import React from "react"
import AppBar from "@mui/material/AppBar"
import { googleLogout } from "@react-oauth/google"
import { Link, useNavigate } from "react-router-dom"
import { IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"

import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import { getAuthData } from "../../utils/getAuthData"
import { IAuthData } from "../GoogleLogin/GoogleLogin"

export const Header = () => {
  const navigate = useNavigate()

  const initialAuthData = { name: "", email: "", picture: "" }

  const [auth, setAuth] = React.useState<IAuthData>(initialAuthData)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  React.useEffect(() => {
    const data = getAuthData()

    if (data) {
      setAuth(data)
    } else {
      navigate("/auth")
    }
  }, [])

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = () => {
    if (window.confirm("Ви дійсно хочете вийти з акаунта?")) {
      window.localStorage.removeItem("pharm-practice")
      googleLogout()
      handleClose()
      navigate("/auth")
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <Link to="/">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <img src={logo} alt="logo" width={40} />
            </IconButton>
          </Link>
        </Typography>

        {auth.name && (
          <div className={styles["account-wrapper"]}>
            <Typography>{auth.name}</Typography>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <img className={styles.avatar} src={auth.picture} alt="account avatar" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/print">
                <MenuItem onClick={handleClose}>Друк</MenuItem>
              </Link>
              <Link to="/settings">
                <MenuItem onClick={handleClose}>Налаштування</MenuItem>
              </Link>
              <MenuItem onClick={logout}>Вихід</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
