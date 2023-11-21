import React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Pagination from "@mui/material/Pagination"

import styles from "./Filter.module.css"
import { IPharmacyFilter } from "../../pages/Home"
import { PharmacyEntity, gql } from "../../graphql/client"
import ContainedButton from "../ContainedButton"

interface IPharmacyFilterProps {
  isLoading: boolean
  pagesCount: number
  filter: IPharmacyFilter
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setFilter: React.Dispatch<React.SetStateAction<IPharmacyFilter>>
  setPharmacies: React.Dispatch<React.SetStateAction<PharmacyEntity[]>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
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
  const inputWidth = "220px"

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
      alert("Помилка при отриманні даних!")
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
          onChange={(e) => onChangeFilterData("name", e.target.value)}
          sx={{ width: inputWidth }}
          InputProps={{
            type: "search",
          }}
        />

        <TextField
          label="Місто"
          size="small"
          value={filter.city}
          onChange={(e) => onChangeFilterData("city", e.target.value)}
          sx={{ width: inputWidth }}
          InputProps={{
            type: "search",
          }}
        />

        <TextField
          label="Адреса"
          size="small"
          value={filter.address}
          onChange={(e) => onChangeFilterData("address", e.target.value)}
          sx={{ width: inputWidth }}
          InputProps={{
            type: "search",
          }}
        />

        <ContainedButton
          color="inherit"
          variant="contained"
          disabled={isLoading}
          onClick={findPharmacies}
        >
          {isLoading ? "Завантаження..." : "Знайти"}
        </ContainedButton>

        {/* <Button
          variant="contained"
          onClick={findPharmacies}
          disabled={isLoading}
          color="inherit"
          sx={{
            width: "160px",
            color: "#fff",
            background: "red",
            backgroundColor:
              "linear-gradient(90deg, rgba(19, 173, 163, 1) 0%, rgba(102, 92, 206, 1) 100%) !important",
          }}
        >
          {isLoading ? "Завантаження..." : "Знайти"}
        </Button> */}
      </div>
      <div className={styles.wrapper}>
        <Pagination
          count={pagesCount}
          variant="outlined"
          shape="rounded"
          onChange={(_: React.ChangeEvent<unknown>, page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  )
}
