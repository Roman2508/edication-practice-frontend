import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import styles from './Filter.module.css'
import { IPharmacyFilter } from '../../pages/Home'
import { PharmacyEntity, gql } from '../../graphql/client'

interface IPharmacyFilterProps {
  filter: IPharmacyFilter
  setFilter: React.Dispatch<React.SetStateAction<IPharmacyFilter>>
  setPharmacies: React.Dispatch<React.SetStateAction<PharmacyEntity[]>>
}

export const PharmacyFilter: React.FC<IPharmacyFilterProps> = ({ filter, setFilter, setPharmacies }) => {
  const inputWidth = '220px'

  const [isLoading, setIsLoading] = React.useState(false)

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
  )
}
