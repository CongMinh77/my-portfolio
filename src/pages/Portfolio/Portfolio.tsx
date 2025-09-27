import { Box, Typography, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const images = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed'
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen'
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds'
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop'
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors'
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table'
  }
]
const Portfolio = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <Typography
        sx={{ paddingY: 3 }}
        textAlign={'center'}
        variant="h4"
        fontWeight="bold">
        {t('my_portfolio.title')}
      </Typography>
      <Box
        sx={{
          width: '100%',
          overflowY: 'scroll'
        }}>
        <ImageList variant="masonry" cols={3} gap={8} sx={{ marginY: 0 }}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: '16px', padding: '8px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default Portfolio
