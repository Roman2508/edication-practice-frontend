import React from "react"
import AppBar from "@mui/material/AppBar"
import { IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircle from "@mui/icons-material/AccountCircle"
import logoWhite from "../../assets/logo_white.svg"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export const Header = () => {
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setAuth(event.target.checked)
  //   }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
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
        {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton> */}

        {/* <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            flexGrow: 1,
          }}
        >
          LOGO
        </Typography> */}

        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photos
        </Typography> */}
        {auth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
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
              <MenuItem onClick={handleClose}>
                <Link to="/print">Друк</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/settings">Налаштування</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>Вихід</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
