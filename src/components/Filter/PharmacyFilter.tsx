import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Pagination from '@mui/material/Pagination'

import styles from './Filter.module.css'
import { IPharmacyFilter } from '../../pages/Home'
import { PharmacyEntity, gql } from '../../graphql/client'

interface IPharmacyFilterProps {
  isLoading: boolean
  filter: IPharmacyFilter
  setFilter: React.Dispatch<React.SetStateAction<IPharmacyFilter>>
  setPharmacies: React.Dispatch<React.SetStateAction<PharmacyEntity[]>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const PharmacyFilter: React.FC<IPharmacyFilterProps> = ({
  filter,
  setFilter,
  isLoading,
  setIsLoading,
  setPharmacies,
}) => {
  const inputWidth = '220px'

  const onChangeFilterData = (key: keyof IPharmacyFilter, value: string) => {
    setFilter((prev) => ({ ...prev, [key]: value }))
  }

  const findPharmacies = async () => {
    try {
      setIsLoading(true)
      const data = await gql.GetSearchPharmacies({ ...filter })
      // @ts-ignore
      setPharmacies(data.pharmacies.data)
    } catch (err) {
      alert('Помилка при отриманні даних!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <TextField
          label="Мережа аптек"
          size="small"
          value={filter.name}
          onChange={(e) => onChangeFilterData('name', e.target.value)}
          sx={{ width: inputWidth }}
          InputProps={{
            type: 'search',
          }}
        />

        <TextField
          label="Місто"
          size="small"
          value={filter.city}
          onChange={(e) => onChangeFilterData('city', e.target.value)}
          sx={{ width: inputWidth }}
          InputProps={{
            type: 'search',
          }}
        />

        <TextField
          label="Адреса"
          size="small"
          value={filter.address}
          onChange={(e) => onChangeFilterData('address', e.target.value)}
          sx={{ width: inputWidth }}
          InputProps={{
            type: 'search',
          }}
        />

        <Button variant="contained" onClick={findPharmacies} disabled={isLoading} sx={{ width: '160px' }}>
          {isLoading ? 'Завантаження...' : 'Знайти'}
        </Button>
      </div>
      <div className={styles.wrapper}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          onChange={(_: React.ChangeEvent<unknown>, page: number) => console.log(page)}
        />
      </div>
    </div>
  )
}
