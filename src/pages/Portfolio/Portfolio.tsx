import React from 'react'
import { useTranslation } from 'react-i18next'
import PortfolioGallery from '../../components/PortfolioGallery'

// Sử dụng hình ảnh cục bộ thay vì từ Unsplash
const images = [
  {
    src: '/assets/portfolio/prj-steny.png',
    title: 'Prj Steny'
  }
]
const Portfolio = () => {
  const { t } = useTranslation()

  return <PortfolioGallery images={images} title={t('my_portfolio.title')} />
}

export default Portfolio
