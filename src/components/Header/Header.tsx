import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'
import { Images } from 'utils'
import SignNCM from '../../assets/NCMinh-white.png'
import NCM from '../../assets/logo.png'
import { PALETTES_1 } from '../../configs'
import LanguageSelector from '../LanguageSelector'
import SmartImage from '../SmartImage'
import { useStyles } from './styles'

const pages = ['home', 'service', 'resume', 'about', 'contact']

interface IProps {
  children?: React.ReactNode
}

const Header: React.FC<IProps> = (props) => {
  const [t] = useTranslation()
  const classes = useStyles()

  // const [toggleTheme, setToggleTheme] = React.useState<boolean>(
  //   stateTheme === 'true' ? true : false
  // )
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        style={{
          backgroundColor: PALETTES_1.BLUE
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <SmartImage
                src={NCM}
                alt="Logo"
                placeholder="NCM"
                customStyle={{ height: 50 }}
              />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
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
              className={classes.containerLogoMobile}
              sx={{ display: { xs: 'flex', md: 'none' } }}>
              <SmartImage
                src={SignNCM}
                alt="Logo"
                placeholder="NCM"
                customStyle={{ height: 50 }}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-around'
              }}>
              <Box
                sx={{
                  minWidth: '50vw',
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'space-around'
                }}>
                {pages.map((page) => (
                  <NavLink key={page} to={`/${page}`}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: PALETTES_1.BLACK,
                        display: 'block'
                      }}>
                      {t(`nav.${page}`)}
                    </Button>
                  </NavLink>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <LanguageSelector />
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="MinhNC" src={Images.home.avtNCM} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>{props.children}</Box>
    </>
  )
}

export default Header
