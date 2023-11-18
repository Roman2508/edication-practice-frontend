import React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

import styles from "./Filter.module.css"

export const filterFields = [
  { fieldLabel: "ПІБ", fieldName: "studentName" },
  { fieldLabel: "Група", fieldName: "studentGroup" },
  { fieldLabel: "Мережа аптек", fieldName: "pharmacyName" },
  { fieldLabel: "Місто", fieldName: "pharmacyCity" },
  { fieldLabel: "Адреса", fieldName: "pharmacyAddress" },
]

interface IStudentsFilterProps {
  isLoading: boolean
  fetchStudents: () => void
  filter: { fieldName: string; fieldLabel: string; value: string }
  setFilter: React.Dispatch<React.SetStateAction<{ fieldName: string; fieldLabel: string; value: string }>>
}

export const StudentsFilter: React.FC<IStudentsFilterProps> = ({
  filter,
  setFilter,
  isLoading,
  fetchStudents,
}) => {
  const inputWidth = "220px"

  const onChangeFilterField = (value: string, fieldName: "fieldName" | "value") => {
    if (fieldName === "fieldName") {
      const selectedItem = filterFields.find((el) => el.fieldName === value)

      if (!selectedItem) return

      setFilter((prev) => ({ ...prev, ...selectedItem }))
    } else {
      setFilter((prev) => ({ ...prev, value }))
    }
  }

  return (
    <div className={styles["students-filter-wrapper"]}>
      <div className={styles.fields}>
        <Select
          size="small"
          value={filter.fieldName}
          onChange={(e) => onChangeFilterField(e.target.value, "fieldName")}
          sx={{ width: inputWidth }}
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
          sx={{ width: inputWidth }}
          onChange={(e) => onChangeFilterField(e.target.value, "value")}
          InputProps={{
            type: "search",
          }}
        />
      </div>

      <div className={styles.actions}>
        <Button variant="contained" onClick={fetchStudents} disabled={isLoading}>
          {isLoading ? "Завантаження..." : "Знайти"}
        </Button>
      </div>
    </div>
  )
}
