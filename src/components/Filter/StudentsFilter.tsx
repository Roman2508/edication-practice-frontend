import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import styles from './Filter.module.css'

export const StudentsFilter = () => {
  const inputWidth = '220px'

  return (
    <div className={styles['students-filter-wrapper']}>
      <div className={styles.fields}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          size="small"
          options={top100Films.map((option) => option.title)}
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
        />

        <TextField
          size="small"
          label="Пошук"
          sx={{ width: inputWidth }}
          InputProps={{
            type: 'search',
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

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
]
