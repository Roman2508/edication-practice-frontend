import React from 'react'
import jwt_decode from 'jwt-decode'
import { gql } from '../../graphql/client'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

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

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const decoded = jwt_decode(credentialResponse.credential || '')
        const response = decoded as IAuthData

        if (!Object.keys(response).length) {
          alert('Помилка при авторизації!')
          return
        }

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

        const isStudentHasGroup = !!student.students.data[0].attributes.group.data[0]
        const userRole = student.students.data[0].attributes.access

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
      }}
      onError={() => {
        alert('Помилка при авторизації')
        console.log('Login Failed')
      }}
      auto_select
    />
  )
}

export default Login
