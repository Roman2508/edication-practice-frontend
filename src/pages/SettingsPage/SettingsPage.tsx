import React from 'react'
import * as XLSX from 'xlsx'
import { AppContext } from '../../App'
import { Radio, Paper, Button, FormLabel, RadioGroup, FormControl, FormControlLabel } from '@mui/material'

import { gql } from '../../graphql/client'
import styles from './Settings.page.module.css'

interface IButtonDisabled {
  uploadPharmacies: boolean
  deletePharmacies: boolean
  deleteStudents: boolean
}

export const SettingsPage = () => {
  const fileRef = React.useRef<HTMLInputElement | null>(null)

  const { setAlert } = React.useContext(AppContext)

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
            name: element[3],
            city: element[1],
            address: element[2],
            places: 1,
            contractNumber: element[4],
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

  return (
    <>
      <div>
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

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Дозволити студентам вказувати терміни проходження практики:
            </FormLabel>
            <RadioGroup defaultValue={false} className={styles.ragioGroup}>
              <FormControlLabel value={true} control={<Radio />} label="Так" />
              <FormControlLabel value={false} control={<Radio />} label="Ні" />
            </RadioGroup>
          </FormControl>
        </Paper>
      </div>
    </>
  )
}