import { CodeRounded, DrawOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ServiceCard from '@components/ServiceCard'
import { getPageTitle } from '@utils/index'
import PageSEO from '@/components/SEO/PageSEO'
import FinancialManagement from '@pages/FinancialManagement'
// Removed unused imports

interface ICard {
  title: string
  icon: React.ReactElement
}

interface IProps {
  showFinancial?: boolean
  // Removed unused props
}

const cards: ICard[] = [
  {
    title: 'development',
    icon: <CodeRounded fontSize="large" />
  },
  {
    title: 'design',
    icon: <DrawOutlined fontSize="large" />
  }
]

const Service: React.FC<IProps> = (props) => {
  const {
    showFinancial = true
    // Removed unused props
  } = props

  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t('service.title'))
  }, [t])

  return (
    <div>
      <PageSEO 
        title={t('service.title') + " - Minh Nguyen"}
        description={t('service.meta.description') || "Explore the services offered by Minh Nguyen including web development, design, and financial management solutions."}
        path="/service"
        keywords={t('service.meta.keywords')?.split(', ') || ['services', 'web development', 'design', 'financial management']}
      />
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'medium', py: 2 }}>
        {t('service.title')}
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2 }}>
        {cards.map((card, index) => (
          <Grid key={`${card.title}-${index}`} item xs={12} sm={6}>
            <ServiceCard
              title={t(`about.${card.title}`)}
              icon={card.icon}
              description={t(`about.description.${card.title}`)}
            />
          </Grid>
        ))}
      </Grid>
      {showFinancial && (
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <FinancialManagement />
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default Service
