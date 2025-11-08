import { Box, IconButton, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import EnFlag from '../../assets/en.png'
import ViFlag from '../../assets/vi.png'
import SmartImage from '../SmartImage'

const LanguageSelector = () => {
  const [t, i18n] = useTranslation()

  const handleChangeLocale = (locale: string) => {
    i18n.changeLanguage(locale)
    localStorage.setItem('locale', locale)
  }
  return (
    <Box style={{ display: 'flex' }} gap={1}>
      <Tooltip title={t('language-selector.languages.vi')} followCursor>
        <IconButton
          sx={{ width: 40, height: 40 }}
          onClick={() => handleChangeLocale('vi')}>
          <SmartImage
            src={ViFlag}
            alt="ViFlag"
            placeholder="Vi"
            customStyle={{ height: 16, width: 20, borderRadius: 2 }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('language-selector.languages.en')} followCursor>
        <IconButton
          sx={{ width: 40, height: 40 }}
          onClick={() => handleChangeLocale('en')}>
          <SmartImage
            src={EnFlag}
            alt="EnFlag"
            placeholder="En"
            customStyle={{ height: 16, width: 20, borderRadius: 2 }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default LanguageSelector
