import { Typography } from "@mui/material"

import styles from "./LoginPage.module.css"
import Login from "../../components/GoogleLogin/GoogleLogin"
import logo from "../../assets/logo.png"

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Typography variant="h5" className={styles["collage-name"]}>
          Житомирський базовий фармацевтичний фаховий коледж
        </Typography>
        <Typography variant="h6" className={styles["practice"]}>
          Практика
        </Typography>
        <Login />
      </div>
    </div>
  )
}

export default LoginPage
