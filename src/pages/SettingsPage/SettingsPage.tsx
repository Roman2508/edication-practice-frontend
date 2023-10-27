import React from 'react'
import { Button, Paper } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import styles from './Settings.page.module.css'

export const SettingsPage = () => {
  return (
    <div>
      <Paper elevation={3} className={styles.wrapper}>
        <Button variant="outlined" className={styles.button}>
          Завантажити бази практик
        </Button>
        <Button variant="outlined" color="error" className={styles.button}>
          Видалити всі бази практик
        </Button>
        <Button variant="outlined" color="error" className={styles.button}>
          Видалити всіх студентів
        </Button>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Дозволити студентам вказувати терміни проходження практики:
          </FormLabel>
          <RadioGroup defaultValue={false} className={styles.ragioGroup}>
            <FormControlLabel value={true} control={<Radio />} label="Так" />
            <FormControlLabel value={false} control={<Radio />} label="Ні" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </div>
  )
}
