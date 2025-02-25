import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Me from '../../assets/main-img.jpg'
import { COLORS } from '../../configs'
import { getPageTitle } from '../../utils'
import About from '../About'
import Contact from '../Contact'
import Portfolio from '../Portfolio'
import Resume from '../Resume'
import Service from '../Service'
import { useStyles } from './styles'

const Home = () => {
  const classes = useStyles()
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t('home.title'))
  }, [t])
  return (
    <>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        <img
          src={Me}
          style={{
            width: '100%',
            height: 'auto'
          }}
          alt="Background"
          loading="lazy"
        />
        <Box className={classes.wrapTypography}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign={'center'}
            color={COLORS.WHITE}
            py={2}>
            {t('home.introduction')}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
        <Portfolio />
        <About />
        <Service
          showFinancial={false}
          showGame={false}
          showLunarCalculator={false}
        />
        <Resume />
        <Contact />
      </Box>
    </>
  )
}

export default Home
