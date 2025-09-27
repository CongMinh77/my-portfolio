import React from 'react'
import { useTranslation } from 'react-i18next'
import PortfolioGallery from '../../components/PortfolioGallery'

// Sử dụng hình ảnh cục bộ thay vì từ Unsplash
const images = [
  {
    src: '/assets/images/portfolio-1.jpg',
    title: 'Bed'
  },
  {
    src: '/assets/images/portfolio-2.jpg',
    title: 'Kitchen'
  },
  {
    src: '/assets/images/portfolio-3.jpg',
    title: 'Blinds'
  },
  {
    src: '/assets/images/portfolio-4.jpg',
    title: 'Laptop'
  },
  {
    src: '/assets/images/portfolio-5.jpg',
    title: 'Doors'
  },
  {
    src: '/assets/images/portfolio-6.jpg',
    title: 'Coffee table'
  }
]
const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <PortfolioGallery 
      images={images} 
      title={t('my_portfolio.title')} 
    />
  )
}

export default Portfolio
