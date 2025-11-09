import {
  EmailOutlined,
  PhoneAndroidOutlined,
  PlaceOutlined
} from '@mui/icons-material'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getPageTitle } from '@utils/index'
import PageSEO from '@/components/SEO/PageSEO'

const Contact = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t('contact.title'))
  }, [t])
  return (
    <>
      <PageSEO
        title={t('contact.title') + ' - Minh Nguyen'}
        description={
          t('contact.meta.description') ||
          'Get in touch with Minh Nguyen. Contact information and message form available.'
        }
        path="/contact"
        keywords={
          t('contact.meta.keywords')?.split(', ') || [
            'contact',
            'email',
            'phone',
            'message',
            'get in touch'
          ]
        }
      />
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'medium', py: 2 }}>
        {t('contact.title')}
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ padding: 3 }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2, md: 0 }
            }}>
            <Box sx={{ width: '100%' }}>
              <TextField
                fullWidth
                label={t('contact.first-name')}
                variant="standard"
              />
            </Box>
            <Box sx={{ marginLeft: { xs: 0, md: 2 }, width: '100%' }}>
              <TextField
                fullWidth
                label={t('contact.last-name')}
                variant="standard"
              />
            </Box>
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              label={t('contact.email-address')}
              variant="standard"
            />
          </Box>
          <Box mt={3}>
            <TextField
              multiline
              fullWidth
              rows={3}
              label={t('contact.messenger')}
              variant="standard"
            />
          </Box>
          <Box mt={3}>
            <Button
              sx={{
                borderRadius: 5
              }}
              color="secondary"
              variant="contained">
              {t('contact.send-messenger')}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {t('contact.info')}
          </Typography>

          <Box mt={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <PlaceOutlined />
            <Typography ml={2} variant="body1">
              {t('contact.address')}
            </Typography>
          </Box>
          <Box
            mt={3}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <PhoneAndroidOutlined />
            <Typography ml={2} variant="body1">
              0949 389 572
            </Typography>
          </Box>
          <Box
            mt={3}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <PhoneAndroidOutlined />
            <Typography ml={2} variant="body1">
              088 618 2681
            </Typography>
          </Box>
          <Box
            mt={3}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <EmailOutlined />
            <Typography ml={2} variant="body1">
              congminh.se7en@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
