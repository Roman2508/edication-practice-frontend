import React from 'react'
import jwt_decode from 'jwt-decode'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import CircularProgress from '@mui/material/CircularProgress'

import { AppContext } from '../../App'
import { gql } from '../../graphql/client'

export interface IAuthData {
  id: string
  email: string
  name: string
  picture: string
  middleName: string
  access: 'student' | 'owner'
  group: { name: string; courseNumber: number } | null
}

const Login: React.FC<{ setRegisterStep: React.Dispatch<React.SetStateAction<1 | 2>> }> = ({ setRegisterStep }) => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = React.useState(false)

  const { setAlert } = React.useContext(AppContext)

  const setError = () => {
    setAlert({
      isShow: true,
      message: 'Помилка при авторизації!',
      severity: 'error',
    })
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, isShow: false }))
    }, 3000)
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const decoded = jwt_decode(credentialResponse.credential || '')
        const response = decoded as IAuthData

        if (!Object.keys(response).length) {
          setError()
          return
        }

        try {
          setIsLoading(true)

          const student = await gql.GetOneStudent({ email: response.email })
          const isStudentExisted = !!student.students.data.length

          if (!isStudentExisted) {
            const userData = {
              email: response.email,
              name: response.name,
              picture: response.picture,
            }

            const responce = await gql.CreateStudent({ ...userData })

            window.localStorage.setItem(
              'pharm-practice',
              JSON.stringify({
                ...userData,
                id: responce.createStudent.data.id,
                group: null,
                phone: null,
                middleName: null,
              })
            )

            setRegisterStep(2)
            return
          }

          const userData = {
            id: student.students.data[0].id,
            email: student.students.data[0].attributes.email,
            name: student.students.data[0].attributes.name,
            picture: student.students.data[0].attributes.picture,
          }

          const isStudentHasGroup = !!student.students.data[0].attributes.group.data
          const userRole = student.students.data[0]?.attributes.access

          if (!isStudentHasGroup && userRole === 'student') {
            window.localStorage.setItem(
              'pharm-practice',
              JSON.stringify({ ...userData, group: null, phone: null, middleName: null })
            )
            setRegisterStep(2)
            return
          }

          let group = null

          if (userRole === 'student') {
            group = {
              name: student.students.data[0].attributes.group.data[0].attributes.name,
              courseNumber: student.students.data[0].attributes.group.data[0].attributes.courseNumber,
            }
          }

          window.localStorage.setItem(
            'pharm-practice',
            JSON.stringify({
              ...userData,
              group,
              phone: student.students.data[0].attributes.phone,
              middleName: student.students.data[0].attributes.middleName,
            })
          )

          navigate('/')
        } catch (err) {
          setError()
        } finally {
          setIsLoading(false)
        }
      }}
      onError={() => {
        setError()
        console.log('Login Failed')
      }}
      auto_select
    />
  )
}

export default Login
