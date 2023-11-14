import React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

import styles from "./Filter.module.css"

const filterFields = [
  { label: "ПІБ", name: "studentName" },
  { label: "Група", name: "group" },
  { label: "Мережа аптек", name: "pharmacyName" },
  { label: "Місто", name: "city" },
  { label: "Адреса", name: "address" },
]

const initialData = {
  termOfPractice: {
    start: "",
    end: "",
  },
  typeOfPractice: [""],
  practiceDirectionYear: 2023,
  practiceDirectionNumber: 1,
}

export const StudentsFilter = () => {
  const [printSettings, setPrintSettings] = React.useState(initialData)

  const inputWidth = "220px"

  return (
    <div className={styles["students-filter-wrapper"]}>
      <div className={styles.fields}>
        <Autocomplete
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
                type: "search",
              }}
            />
          )}
        />

        <TextField
          size="small"
          label="Пошук"
          sx={{ width: inputWidth }}
          InputProps={{
            type: "search",
          }}
        />

        {/* <TextField
          size="small"
          label="Мережа аптек"
          sx={{ width: inputWidth }}
          InputProps={{
            type: "search",
          }}
        />

        <TextField
          size="small"
          label="Місто"
          sx={{ width: inputWidth }}
          InputProps={{
            type: "search",
          }}
        />

        <TextField
          size="small"
          label="Адреса"
          sx={{ width: inputWidth }}
          InputProps={{
            type: "search",
          }}
        /> */}
      </div>
      <div className={styles.actions}>
        {/* <Button variant="contained">Завантажити направлення в PDF</Button> */}
        {/* <Button variant="contained">Знайти студентів</Button> */}
        <Button variant="contained">Знайти</Button>
      </div>
    </div>
  )
}
