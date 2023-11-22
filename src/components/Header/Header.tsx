import MenuIcon from "@mui/icons-material/Menu"
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link, NavLink } from "react-router-dom"
import SignNCM from "../../assets/NCMinh-white.png"
import AvatarLogo from "../../assets/avatar.png"
import NCM from "../../assets/logo.png"
import { PALETTES_1 } from "../../constants"
import LanguageSelector from "../LanguageSelector"

const pages = ["home", "service", "resume", "about", "contact"]
const settings = ["Profile", "Account"]

const Header = () => {
  useEffect(() => {}, [])
  const [t] = useTranslation()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <>
      <AppBar
        style={{
          backgroundColor: PALETTES_1.BLUE
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <img alt="Logo" style={{ height: 50 }} src={NCM} />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`}>{t(`nav.${page}`)}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                letterSpacing: ".3rem",
                color: "inherit"
              }}>
              <img alt="Logo" style={{ height: 50 }} src={SignNCM} />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around"
              }}>
              <Box
                sx={{
                  minWidth: "50vw",
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-around"
                }}>
                {pages.map((page) => (
                  <NavLink key={page} to={`/${page}`}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: PALETTES_1.BLACK,
                        display: "block"
                      }}>
                      {t(`nav.${page}`)}
                    </Button>
                  </NavLink>
                ))}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <LanguageSelector />
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="MinhNC" src={AvatarLogo} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
