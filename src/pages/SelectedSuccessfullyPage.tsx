import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { googleLogout } from '@react-oauth/google'

import styles from './LoginPage/LoginPage.module.css'

const SelectedSuccessfullyPage = () => {
  const navigate = useNavigate()

  const logout = () => {
    if (window.confirm('Ви дійсно хочете вийти з акаунта?')) {
      window.localStorage.removeItem('pharm-practice')
      googleLogout()
      navigate('/auth')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Typography variant="h6" className={styles['practice']}>
          Базу практики вибрано!
        </Typography>

        <Typography variant="h1" sx={{ mb: 3 }}>
          &#128515;
        </Typography>

        <Button onClick={logout}>Вийти з акаунта</Button>

        {/* <img width={150} src="https://few.io/images/parrot-party.gif" alt="gif" /> */}
      </div>
    </div>
  )
}

export default SelectedSuccessfullyPage
