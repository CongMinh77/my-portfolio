import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Me from '@assets/main-img.jpg'
import { COLORS } from '@/configs'
import { getPageTitle } from '@utils/index'
import About from '@pages/About'
import Contact from '@pages/Contact'
import Portfolio from '@pages/Portfolio'
import Resume from '@pages/Resume'
import Service from '@pages/Service'
import PageSEO from '@/components/SEO/PageSEO'
import { useStyles } from './styles'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  const classes = useStyles()
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t('home.title'))
  }, [t])
  return (
    <>
      <PageSEO
        title={t('home.title') + ' - Minh Nguyen'}
        description={
          t('home.meta.description') ||
          "Minh Nguyen's personal portfolio showcasing web development skills, projects, and experience."
        }
        path="/"
        keywords={[
          'portfolio',
          'web developer',
          'frontend',
          'react',
          'typescript'
        ]}
      />
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
            py={2}
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              px: { xs: 2, sm: 4 }
            }}>
            <TypeAnimation
              key={t('home.introduction')}
              sequence={[t('home.introduction'), 1000]}
              wrapper="span"
              speed={33}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: '1440px', margin: '0 auto' }}>
        <Portfolio />
        <About />
        <Service showFinancial={false} />
        <Resume />
        <Contact />
      </Box>
    </>
  )
}

export default Home
