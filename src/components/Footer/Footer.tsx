import { useThemeCustom } from '@/theme'
import { Images, LINKS } from '@/utils'
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  YouTube
} from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Web Development',
    link: '/service'
  },
  {
    title: 'Web Design',
    link: '/'
  },
  {
    title: 'Editor',
    link: '/'
  }
]

const contact = [
  {
    title: 'Email',
    link: 'congminh.se7en@gmail.com'
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/minh-nguyen-cong/'
  }
]

const iconSocial = [
  {
    icon: <Facebook />,
    link: 'https://www.facebook.com/ncm.se7en'
  },
  {
    icon: <Instagram />,
    link: 'https://www.instagram.com/cm.se7en.oo/'
  },
  {
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/minh-nguyen-cong/'
  },
  {
    icon: <YouTube />,
    link: 'https://www.youtube.com/channel/UCMMKhIT65LTvmuBCNtj7KPA'
  },
  {
    icon: <GitHub />,
    link: 'https://github.com/CongMinh77'
  }
]

const Footer = () => {
  const [t] = useTranslation()
  const { isDarkMode, theme } = useThemeCustom()

  const information = useMemo(
    () => [
      {
        title: t('about_me'),
        link: LINKS.about
      },
      {
        title: t('contact_me'),
        link: LINKS.contact
      }
    ],
    [t]
  )
  return (
    <>
      <footer style={{ width: '100%' }}>
        <Box
          sx={{
            backgroundColor: theme.footer.bg,
            paddingY: 5
          }}>
          <Grid
            container
            sx={{ paddingBottom: 2, maxWidth: '1440px', mx: 'auto' }}>
            <Grid item md={3} xs={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={
                    isDarkMode ? Images.home.logoWhite : Images.home.logoColor
                  }
                  alt="Logo"
                  style={{ height: 150 }}
                />
              </Box>
              <Box px={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {iconSocial &&
                    iconSocial.map((item, key) => (
                      <Link
                        key={`${key}-${item.link}`}
                        to={item.link}
                        target="_blank">
                        <IconButton
                          sx={{
                            color: theme.componentStyles.icon.color
                          }}>
                          {item.icon}
                        </IconButton>
                      </Link>
                    ))}
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} xs={6}>
              <Typography
                variant="h5"
                fontWeight={'bold'}
                sx={{
                  paddingBottom: 2,
                  color: theme.componentStyles.link.color
                }}>
                {t('footer.information')}
              </Typography>
              <Divider sx={{ width: '15%' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: 1
                }}>
                {information &&
                  information.map((info, key) => (
                    <Link key={`${key}-${info.title}`} to={info.link}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          paddingBottom: 1,
                          color: theme.componentStyles.link.color
                        }}>
                        {info.title}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            </Grid>

            <Grid item md={3} xs={6}>
              <Typography
                variant="h5"
                fontWeight={'bold'}
                sx={{
                  paddingBottom: 2,
                  color: theme.componentStyles.link.color
                }}>
                {t('footer.services')}
              </Typography>
              <Divider sx={{ width: '15%' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: 1
                }}>
                {services &&
                  services.map((service, key) => (
                    <Link key={`${key}-${service.title}`} to={service.link}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          paddingBottom: 1,
                          color: theme.componentStyles.link.color
                        }}>
                        {service.title}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            </Grid>

            <Grid item md={3} xs={6}>
              <Typography
                variant="h5"
                fontWeight={'bold'}
                sx={{
                  paddingBottom: 2,
                  color: theme.componentStyles.link.color
                }}>
                {t('footer.contact')}
              </Typography>
              <Divider sx={{ width: '15%' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: 1
                }}>
                {contact &&
                  contact.map((myContact, key) => (
                    <Link key={`${key}-${myContact.title}`} to={myContact.link}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          paddingBottom: 1,
                          color: theme.componentStyles.link.color
                        }}>
                        {myContact.title}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            </Grid>
          </Grid>

          <Divider />

          <Typography
            variant="subtitle2"
            sx={{
              textAlign: 'center',
              paddingTop: 4,
              color: theme.palette.text.primary
            }}>
            {`© ${new Date().getFullYear()} Copyright All rights reserved | `}
            {t('footer.developer')}
          </Typography>
        </Box>
      </footer>
    </>
  )
}

export default Footer
