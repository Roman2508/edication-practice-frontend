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

interface IStudentsFilterProps {
  filter: { field: string; value: string }
  setFilter: React.Dispatch<React.SetStateAction<{ field: string; value: string }>>
}

export const StudentsFilter: React.FC<IStudentsFilterProps> = ({ filter, setFilter }) => {
  const inputWidth = '220px'

  const onChangeFilterField = (value: string, fieldName: 'field' | 'value') => {
    setFilter((prev) => ({ ...prev, [fieldName]: value }))
  }

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
          size="small"
          value={filter.field}
          // defaultValue={filterFields[0].label}
          label="Пошук за полем"
          onChange={(e) => onChangeFilterField(e.target.value, 'field')}
          sx={{ width: inputWidth }}
        >
          {filterFields.map((el) => (
            <MenuItem key={el.name} value={el.label}>
              {el.label}
            </MenuItem>
          ))}
        </Select>

        <TextField
          size="small"
          label="Пошук"
          value={filter.value}
          sx={{ width: inputWidth }}
          onChange={(e) => onChangeFilterField(e.target.value, 'value')}
          InputProps={{
            type: 'search',
          }}
        />
      </div>
      <div className={styles.actions}>
        {/* <Button variant="contained">Завантажити направлення в PDF</Button> */}
        {/* <Button variant="contained">Знайти студентів</Button> */}
        <Button variant="contained">Знайти</Button>
      </div>
    </div>
  )
}
