import BigSmallGame from '@/widgets/BigSmallGame'
import LunarCalculator from '@/widgets/LunarCalculator'
import { Grid, Typography } from '@mui/material'
import FinancialManagement from '@pages/FinancialManagement'
import { getPageTitle } from '@utils/index'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
// Removed unused imports

interface IProps {
  showFinancial?: boolean
  // Removed unused props
}

const Tools: React.FC<IProps> = (props) => {
  const { showFinancial = true } = props

  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t('tools.title'))
  }, [t])

  return (
    <div>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'medium', py: 2 }}>
        {t('tools.title')}
      </Typography>
      {showFinancial && (
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <FinancialManagement />
          </Grid>
        </Grid>
      )}

      <LunarCalculator />

      <BigSmallGame />
    </div>
  )
}

export default Tools
