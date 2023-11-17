import React from 'react'
import * as XLSX from 'xlsx'
import {
  Radio,
  Paper,
  Button,
  Divider,
  MenuItem,
  TextField,
  FormLabel,
  Typography,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material'

import { AppContext } from '../../App'
import { Setting, gql } from '../../graphql/client'
import styles from './Settings.page.module.css'
import DatePicker from '../../components/DatePicker'
import emptyImg from '../../assets/empty-image.png'
import dayjs from 'dayjs'

interface IButtonDisabled {
  uploadPharmacies: boolean
  deletePharmacies: boolean
  deleteStudents: boolean
}

export const SettingsPage = () => {
  const fileRef = React.useRef<HTMLInputElement | null>(null)

  const { setAlert } = React.useContext(AppContext)

  const [isSaving, setIsSaving] = React.useState(false)
  const [settings, setSettings] = React.useState<Setting | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const settings = await gql.GetSettings()

        // @ts-ignore
        setSettings(settings.setting.data.attributes)

        setAlert({ isShow: true, message: 'Завантажено :)', severity: 'success' })
      } catch (error) {
        setAlert({ isShow: true, message: 'Помилка при отриманні даних', severity: 'error' })
      } finally {
        setTimeout(() => {
          setAlert((prev) => ({ ...prev, isShow: false }))
        }, 3000)
      }
    }

    fetchData()
  }, [])

  const [buttonDisabled, setButtonDisabled] = React.useState<IButtonDisabled>({
    uploadPharmacies: false,
    deletePharmacies: false,
    deleteStudents: false,
  })

  const onClickUpload = () => {
    if (!fileRef.current) return
    fileRef.current.click()
  }

  const handleChangeUpload = (e: any /* Event */) => {
    e.preventDefault()

    const files = (e.target as HTMLInputElement).files

    if (!files?.length) return

    const f = files[0]
    const reader = new FileReader()

    reader.onload = function (e) {
      if (e.target === null) return

      const data = e.target.result
      let readedData = XLSX.read(data, { type: 'binary' })
      const wsname = readedData.SheetNames[0]
      const ws = readedData.Sheets[wsname]

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 })

      const newPharmacies = dataParse
        .map((el, index) => {
          if (index === 0) return

          const element = el as string[]

          const obj = {
            number: element[0] || 0,
            city: element[1] || '-',
            address: element[2] || '-',
            name: element[3] || '-',
            contractNumber: element[4] || '-',
            legalName: element[5] || '-',
            places: element[6] || 1,
          }

          return obj
        })
        .filter((el) => !!el)

      Promise.all(
        newPharmacies.map(async (el: any) => {
          try {
            setButtonDisabled((prev) => ({ ...prev, uploadPharmacies: true }))
            await gql.CreatePharmacy(el)
            setAlert({
              isShow: true,
              message: 'Бази практик успішно завантажені',
              severity: 'success',
            })
          } catch (err) {
            setAlert({
              isShow: true,
              message: 'Помилка при завантажені баз практик',
              severity: 'error',
            })
            console.log(err)
          } finally {
            setButtonDisabled((prev) => ({ ...prev, uploadPharmacies: false }))
            setTimeout(() => {
              setAlert((prev) => ({ ...prev, isShow: false }))
            }, 3000)
          }
        })
      )
    }
    reader.readAsBinaryString(f)
  }

  const onDeleteAllPharmacies = async () => {
    if (window.confirm('Ви дійсно хочете видалити всі бази практик?')) {
      try {
        setButtonDisabled((prev) => ({ ...prev, deletePharmacies: true }))
        const allPharmacyIds = await gql.GetAllPharmacyIds()

        if (!allPharmacyIds || !allPharmacyIds.pharmacies.data.length) return

        Promise.all(
          allPharmacyIds.pharmacies.data.map(async (el) => {
            await gql.DeletePharmacy({ id: el.id })
          })
        )

        setAlert({
          isShow: true,
          message: 'Бази практик успішно видалені!',
          severity: 'success',
        })
      } catch (err) {
        setAlert({
          isShow: true,
          message: 'Помилка при видалені баз практик!',
          severity: 'error',
        })
        console.log(err)
      } finally {
        setButtonDisabled((prev) => ({ ...prev, deletePharmacies: false }))
        setTimeout(() => {
          setAlert((prev) => ({ ...prev, isShow: false }))
        }, 3000)
      }
    }
  }

  const saveChanges = async () => {
    if (!settings) return

    if (window.confirm('Ви дійсно хочете зберегти зміни?')) {
      try {
        setIsSaving(true)

        const newSettings = await gql.UpdateSettings({
          endPracticeDate: settings.endPracticeDate,
          startPracticeDate: settings.startPracticeDate,
          canStudentSelectPracticeBase: settings.canStudentSelectPracticeBase,
          currentPracticeType: settings.currentPracticeType.data.id,
        })

        // @ts-ignore
        setSettings(newSettings.updateSetting.data.attributes)

        setAlert({ isShow: true, message: 'Налаштування збережені!', severity: 'success' })
      } catch (error) {
        setAlert({ isShow: true, message: 'Помилка при збереженні даних', severity: 'error' })
      } finally {
        setIsSaving(false)

        setTimeout(() => {
          setAlert((prev) => ({ ...prev, isShow: false }))
        }, 3000)
      }
    }
  }

  const onChangePracticeTerm = (e: dayjs.Dayjs | null, practiceDate: 'startPracticeDate' | 'endPracticeDate') => {
    const selectedDate = dayjs(e).format('YYYY-MM-DD')
    // @ts-ignore
    setSettings((prev) => {
      return { ...prev, [practiceDate]: selectedDate }
    })
  }

  const onChangeStudentSelectPracticeBase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === 'true' ? true : false

    // @ts-ignore
    setSettings((prev) => {
      return { ...prev, canStudentSelectPracticeBase: value }
    })
  }

  const onChangePracticeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value.split('_')

    // @ts-ignore
    setSettings((prev) => ({
      ...prev,
      currentPracticeType: { data: { id: data[1], attributes: { name: data[0] } } },
    }))
  }

  if (!settings) {
    return (
      <Paper elevation={3} className={styles.wrapper} sx={{ alignItems: 'center' }}>
        <img style={{ width: '200px' }} src={emptyImg} alt="empty" />
        <Typography>Завантаження...</Typography>
      </Paper>
    )
  }

  return (
    <Paper elevation={3} className={styles.wrapper}>
      <input type="file" ref={fileRef} onChange={handleChangeUpload} style={{ display: 'none' }} />
      <Button
        variant="outlined"
        disabled={buttonDisabled.uploadPharmacies}
        onClick={onClickUpload}
        className={styles.button}
      >
        {buttonDisabled.uploadPharmacies ? 'Завантаження...' : 'Завантажити бази практик'}
      </Button>

      <Button
        variant="outlined"
        color="error"
        className={styles.button}
        onClick={onDeleteAllPharmacies}
        disabled={buttonDisabled.deletePharmacies}
      >
        {buttonDisabled.uploadPharmacies ? 'Видалення...' : 'Видалити всі бази практик'}
      </Button>

      <Button variant="outlined" color="error" className={styles.button}>
        Видалити всіх студентів
      </Button>

      <Divider sx={{ margin: '16px 0' }} />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Дозволити студентам вказувати терміни проходження практики:
        </FormLabel>
        <RadioGroup
          className={styles.ragioGroup}
          value={settings.canStudentSelectPracticeBase}
          onChange={onChangeStudentSelectPracticeBase}
        >
          <FormControlLabel value={true} control={<Radio />} label="Так" />
          <FormControlLabel value={false} control={<Radio />} label="Ні" />
        </RadioGroup>
      </FormControl>

      <Divider sx={{ margin: '16px 0' }} />

      <Typography>Початок практики:</Typography>
      <DatePicker value={settings.startPracticeDate} onChange={(e) => onChangePracticeTerm(e, 'startPracticeDate')} />

      <Divider sx={{ margin: '16px 0' }} />

      <Typography>Кінець практики:</Typography>
      <DatePicker value={settings.endPracticeDate} onChange={(e) => onChangePracticeTerm(e, 'endPracticeDate')} />

      <Divider sx={{ margin: '16px 0' }} />

      <TextField
        select
        fullWidth
        label="Тип практики:"
        onChange={onChangePracticeType}
        value={`${settings.currentPracticeType.data.attributes?.name}_${settings.currentPracticeType.data.id}`}
        defaultValue={`${settings.currentPracticeType.data.attributes?.name}_${settings.currentPracticeType.data.id}`}
      >
        {settings.practiceTypes.data.map((option) => (
          <MenuItem key={option.id} value={`${option.attributes.name}_${option.id}`}>
            {option.attributes.name}
          </MenuItem>
        ))}
      </TextField>

      <Divider sx={{ margin: '16px 0' }} />

      <Button variant="contained" disabled={isSaving} onClick={saveChanges}>
        {isSaving ? 'Збереження...' : 'Зберегти зміни'}
      </Button>
    </Paper>
  )
}
