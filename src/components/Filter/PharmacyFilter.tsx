import React from 'react'
import TextField from '@mui/material/TextField'
import Pagination from '@mui/material/Pagination'

import styles from './Filter.module.css'
import ContainedButton from '../ContainedButton'
import { IPharmacyFilter } from '../../pages/Home'
import { PharmacyEntity, gql } from '../../graphql/client'

interface IPharmacyFilterProps {
  isLoading: boolean
  pagesCount: number
  filter: IPharmacyFilter
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setFilter: React.Dispatch<React.SetStateAction<IPharmacyFilter>>
  setPharmacies: React.Dispatch<React.SetStateAction<PharmacyEntity[]>>
}

export const PharmacyFilter: React.FC<IPharmacyFilterProps> = ({
  filter,
  setFilter,
  isLoading,
  pagesCount,
  setIsLoading,
  setPharmacies,
  setCurrentPage,
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
    <>
      <div className={styles.wrapper}>
        <TextField
          label="Мережа аптек"
          size="small"
          value={filter.name}
          className={styles.input}
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
          className={styles.input}
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
          className={styles.input}
          onChange={(e) => onChangeFilterData('address', e.target.value)}
          sx={{ width: inputWidth }}
          InputProps={{
            type: 'search',
          }}
        />

        <ContainedButton
          color="inherit"
          variant="contained"
          disabled={isLoading}
          onClick={findPharmacies}
          className={styles.button}
        >
          {isLoading ? 'Завантаження...' : 'Знайти'}
        </ContainedButton>
      </div>

      <Pagination
        hideNextButton
        hidePrevButton
        shape="rounded"
        variant="outlined"
        count={pagesCount}
        sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
        onChange={(_: React.ChangeEvent<unknown>, page: number) => setCurrentPage(page)}
      />
    </>
  )
}
