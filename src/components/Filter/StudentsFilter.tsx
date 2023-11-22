import React from 'react'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import styles from './Filter.module.css'
import ContainedButton from '../ContainedButton'
import { Pagination } from '@mui/material'

export const filterFields = [
  { fieldLabel: 'ПІБ', fieldName: 'studentName' },
  { fieldLabel: 'Група', fieldName: 'studentGroup' },
  { fieldLabel: 'Мережа аптек', fieldName: 'pharmacyName' },
  { fieldLabel: 'Місто', fieldName: 'pharmacyCity' },
  { fieldLabel: 'Адреса', fieldName: 'pharmacyAddress' },
]

interface IStudentsFilterProps {
  isLoading: boolean
  pagesCount: number
  fetchStudents: () => void
  filter: { fieldName: string; fieldLabel: string; value: string }
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setFilter: React.Dispatch<React.SetStateAction<{ fieldName: string; fieldLabel: string; value: string }>>
}

export const StudentsFilter: React.FC<IStudentsFilterProps> = ({
  filter,
  setFilter,
  isLoading,
  pagesCount,
  setCurrentPage,
  fetchStudents,
}) => {
  const inputWidth = '220px'

  const onChangeFilterField = (value: string, fieldName: 'fieldName' | 'value') => {
    if (fieldName === 'fieldName') {
      const selectedItem = filterFields.find((el) => el.fieldName === value)

      if (!selectedItem) return

      setFilter((prev) => ({ ...prev, ...selectedItem }))
    } else {
      setFilter((prev) => ({ ...prev, value }))
    }
  }

  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['students-filter-wrapper']}>
        <div className={styles.fields}>
          <Select
            size="small"
            value={filter.fieldName}
            onChange={(e) => onChangeFilterField(e.target.value, 'fieldName')}
            sx={{ width: inputWidth }}
            className={styles.textField}
          >
            {filterFields.map((el) => (
              <MenuItem key={el.fieldName} value={el.fieldName}>
                {el.fieldLabel}
              </MenuItem>
            ))}
          </Select>

          <TextField
            size="small"
            label="Пошук"
            value={filter.value}
            className={styles.textField}
            sx={{ width: inputWidth }}
            onChange={(e) => onChangeFilterField(e.target.value, 'value')}
            InputProps={{
              type: 'search',
            }}
          />
        </div>

        <div className={styles.actions}>
          <ContainedButton variant="contained" onClick={fetchStudents} disabled={isLoading} className={styles.button}>
            {isLoading ? 'Завантаження...' : 'Знайти'}
          </ContainedButton>
        </div>
      </div>

      <Pagination
        hideNextButton
        hidePrevButton
        shape="rounded"
        variant="outlined"
        count={pagesCount}
        onChange={(_: React.ChangeEvent<unknown>, page: number) => setCurrentPage(page)}
      />
    </div>
  )
}
