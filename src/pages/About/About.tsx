import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getPageTitle, Images } from '@utils/index'
import { useStyles } from './styles'

const About = () => {
  const [t] = useTranslation()

  const classes = useStyles()

  useEffect(() => {
    document.title = getPageTitle(t('about.title'))
  }, [t])

  return (
    <div style={{ width: '100%' }}>
      <h1 style={{ textAlign: 'center' }}>{t('about.title')}</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <img
              src={Images.home.avtNCM}
              alt="avt-bio"
              style={{ width: '100%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4">{t('about.my-bio')}</Typography>
            <Typography sx={{ marginTop: 2 }}>
              {t('about.my-summary')}
              <br />
              <br />
              {t('about.my-design')}
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btn}
              sx={{
                marginRight: 2
              }}>
              {t('about.hire-me')}
            </Button>
            <Link
              to={
                'https://drive.google.com/file/d/1FMIjFICO_xBUfmDacsRjJshz79Q-MeQn/view?usp=drive_link'
              }
              target="_blank">
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}>
                {t('about.download-cv')}
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
