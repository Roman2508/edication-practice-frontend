import React from 'react'
import { googleLogout } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import { IconButton, Menu, MenuItem, Toolbar, Typography, Box } from '@mui/material'

import { AppContext } from '../../App'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

export const Header = () => {
  const navigate = useNavigate()

  const { user } = React.useContext(AppContext)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = () => {
    if (window.confirm('Ви дійсно хочете вийти з акаунта?')) {
      window.localStorage.removeItem('pharm-practice')
      googleLogout()
      handleClose()
      navigate('/auth')
    }
  }

  return (
    <div /* position="static" */ className={styles.header}>
      <Toolbar /* sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} */>
        <Typography sx={{ flexGrow: 1 }}>
          <Link to="/">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <img src={logo} alt="logo" width={40} />
            </IconButton>
          </Link>
        </Typography>

        {/* <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <Typography sx={{ color: "#ddd", margin: "0 32px 0 64px" }}>
            <Link to="/">Головна</Link>
          </Typography>
          <Typography sx={{ color: "#ddd", marginRight: "32px" }}>
            <Link to="/print">Друк</Link>
          </Typography>
          <Typography sx={{ color: "#ddd" }}>
            <Link to="/settings">Налаштування</Link>
          </Typography>
        </Stack> */}

        {user && user.name ? (
          <div className={styles['account-wrapper']}>
            <Typography>{user.name}</Typography>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <img className={styles.avatar} src={user.picture} referrerPolicy="no-referrer" alt="account avatar" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {user.access === 'owner' && (
                <Link to="/print">
                  <MenuItem onClick={handleClose}>Друк</MenuItem>
                </Link>
              )}
              {user.access === 'owner' && (
                <Link to="/settings">
                  <MenuItem onClick={handleClose}>Налаштування</MenuItem>
                </Link>
              )}

              <MenuItem onClick={logout}>Вихід</MenuItem>
            </Menu>
          </div>
        ) : (
          <Box>
            <CircularProgress size={28} sx={{ mr: 2 }} />
          </Box>
        )}
      </Toolbar>
    </div>
  )
}
