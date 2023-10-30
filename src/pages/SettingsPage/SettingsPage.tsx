import React from 'react'
import * as XLSX from 'xlsx'
import Radio from '@mui/material/Radio'
import { Button, Paper, FormLabel, RadioGroup, FormControl, FormControlLabel } from '@mui/material'

import { gql } from '../../graphql/client'
import styles from './Settings.page.module.css'

interface IPharmacyData {
  name: string
  city: string
  address: string
  places: number
  contractNumber: string
}

export const SettingsPage = () => {
  const fileRef = React.useRef<HTMLInputElement | null>(null)

  const [uploadedFileName, setUploadedFileName] = React.useState('')

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

      setUploadedFileName(f.name)

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
        newPharmacies.map(async (el) => {
          await gql.CreatePharmacy(el)
        })
      )
    }
    reader.readAsBinaryString(f)
  }

  return (
    <div>
      <Paper elevation={3} className={styles.wrapper}>
        <input type="file" ref={fileRef} onChange={handleChangeUpload} style={{ display: 'none' }} />
        {uploadedFileName && <span>{uploadedFileName}</span>}
        <Button variant="outlined" className={styles.button} onClick={onClickUpload}>
          Завантажити бази практик
        </Button>
        <Button variant="outlined" color="error" className={styles.button}>
          Видалити всі бази практик
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
  )
}
