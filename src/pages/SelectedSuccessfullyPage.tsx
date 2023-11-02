import Typography from '@mui/material/Typography'

import styles from './LoginPage/LoginPage.module.css'

const SelectedSuccessfullyPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Typography variant="h6" className={styles['practice']}>
          Базу практики вибрано!
        </Typography>

        <Typography variant="h1">&#128515;</Typography>
      </div>
    </div>
  )
}

export default SelectedSuccessfullyPage
