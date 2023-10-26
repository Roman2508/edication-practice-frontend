import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { MenuItem, Typography, InputLabel, Box, Button } from '@mui/material'

import logo from '../../assets/logo.png'
import styles from './LoginPage.module.css'
import Login from '../../components/GoogleLogin/GoogleLogin'
import { GetAllGroupsQuery, gql } from '../../graphql/client'
import { NumberFormatValues, PatternFormat } from 'react-number-format'

type InputValueState = {
  value: string
  formattedValue: string
}

const LoginPage = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = React.useState(false)
  const [registerStep, setRegisterStep] = React.useState<1 | 2>(1)
  const [selectedGroup, setSelectedGroup] = React.useState('')
  const [groups, setGroups] = React.useState<GetAllGroupsQuery>()
  const [phone, setPhone] = React.useState({} as InputValueState)

  const phoneDisabled = !phone.formattedValue || !phone.formattedValue.includes('_')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedGroup(event.target.value as string)
  }

  React.useEffect(() => {
    const storageData = window.localStorage.getItem('pharm-practice')

    if (storageData) {
      const user = JSON.parse(storageData)

      const isGroupData = typeof user.group !== null

      if (user.id && isGroupData) {
        navigate('/')
        return
      }
    }

    const fetchData = async () => {
      try {
        const data = await gql.GetAllGroups()
        setGroups(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const updateGroup = async () => {
    try {
      setIsLoading(true)
      if (!selectedGroup) return
      const storageData = window.localStorage.getItem('pharm-practice')

      if (!storageData) return
      const user = JSON.parse(storageData)

      if (!user.id) return
      const data = await gql.ChangeStudentGroup({ id: user.id, group: selectedGroup })

      console.log(data)

      const { name, courseNumber } = data.updateStudent.data.attributes.group.data[0].attributes

      const updatedUserData = {
        ...user,
        group: { name, courseNumber },
      }

      window.localStorage.setItem('pharm-practice', JSON.stringify(updatedUserData))
      navigate('/')
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Typography variant="h5" className={styles['collage-name']}>
          Житомирський базовий фармацевтичний фаховий коледж
        </Typography>
        <Typography variant="h6" className={styles['practice']}>
          Практика
        </Typography>

        {registerStep !== 1 ? (
          <Login setRegisterStep={setRegisterStep} />
        ) : (
          <Box className={styles['box']}>
            <FormControl className={styles['actions']}>
              <InputLabel className={styles['select-label']}>Група</InputLabel>
              <Select value={selectedGroup} className={styles['select']} label="Група" onChange={handleChange}>
                {groups &&
                  groups.groups.data.map((el) => (
                    <MenuItem key={el.id} value={el.id}>
                      {el.attributes.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <PatternFormat
              mask="_"
              className={styles['phone']}
              allowEmptyFormatting
              format="+38 (###) ### ## ##"
              onValueChange={({ formattedValue, value }) => setPhone({ formattedValue, value })}
              // placeholder="+38 (099) 333 22 11"
              // value={inputValue.value}
            />

            <Button
              sx={{ minWidth: '280px' }}
              className={styles.button}
              disabled={!phoneDisabled || !selectedGroup || isLoading}
              onClick={updateGroup}
              variant="outlined"
              size="large"
            >
              {!isLoading ? 'Підтвердити' : 'Збереження...'}
            </Button>
          </Box>
        )}
      </div>
    </div>
  )
}

export default LoginPage
