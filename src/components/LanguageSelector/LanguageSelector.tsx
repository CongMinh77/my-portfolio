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
    <Box style={{ display: 'flex' }}>
      <Tooltip title={t('language-selector.languages.vi')}>
        <IconButton onClick={() => handleChangeLocale('vi')}>
          <SmartImage
            src={ViFlag}
            alt="ViFlag"
            placeholder="Vi"
            customStyle={{ height: 15, width: 22, borderRadius: 5 }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('language-selector.languages.en')}>
        <IconButton onClick={() => handleChangeLocale('en')}>
          <SmartImage
            src={EnFlag}
            alt="EnFlag"
            placeholder="En"
            customStyle={{ height: 15, width: 22, borderRadius: 5 }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default LanguageSelector
