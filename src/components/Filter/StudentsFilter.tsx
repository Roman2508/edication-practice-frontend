import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
// import Autocomplete from '@mui/material/Autocomplete'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import styles from './Filter.module.css'

const filterFields = [
  { label: 'ПІБ', name: 'studentName' },
  { label: 'Група', name: 'group' },
  { label: 'Мережа аптек', name: 'pharmacyName' },
  { label: 'Місто', name: 'city' },
  { label: 'Адреса', name: 'address' },
]

export const StudentsFilter: React.FC<{ setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setOpen }) => {
  const inputWidth = '220px'

  return (
    <div className={styles['students-filter-wrapper']}>
      <div className={styles.fields}>
        {/* <Autocomplete
          freeSolo
          disableClearable
          size="small"
          options={filterFields.map((option) => option.label)}
          sx={{ width: inputWidth }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Пошук за полем"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        /> */}

        <Select
          value={filterFields[0].name}
          label="Пошук за полем"
          size="small"
          onChange={() => {}}
          sx={{ width: inputWidth }}
        >
          {filterFields.map((el) => (
            <MenuItem key={el.name} value={el.name}>
              {el.label}
            </MenuItem>
          ))}
        </Select>

        <TextField
          size="small"
          label="Пошук"
          sx={{ width: inputWidth }}
          InputProps={{
            type: 'search',
          }}
        />
      </div>
      <div className={styles.actions}>
        {/* <Button variant="contained">Завантажити направлення в PDF</Button> */}
        {/* <Button variant="contained">Знайти студентів</Button> */}
        <Button variant="contained">Знайти</Button>
        <Button variant="contained" onClick={() => setOpen(true)}>
          OPEN MODAL
        </Button>
      </div>
    </div>
  )
}
