import { Box, Typography, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

/**
 * Portfolio gallery component that displays a masonry layout of images
 * @param {Object} props - Component props
 * @param {Array} props.images - Array of image objects with src and title properties
 * @param {string} props.title - Gallery title
 */
const PortfolioGallery: React.FC<{
  images: Array<{ src: string; title: string }>
  title: string
}> = ({ images, title }) => {
  return (
    <Box>
      <Typography
        sx={{ paddingY: 3 }}
        textAlign={'center'}
        variant="h4"
        fontWeight="bold">
        {title}
      </Typography>
      <Box
        sx={{
          width: '100%',
          overflowY: 'scroll'
        }}>
        <ImageList variant="masonry" cols={3} gap={8} sx={{ marginY: 0 }}>
          {images.map((item) => (
            <ImageListItem key={item.src}>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: '16px',
                  padding: '8px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default PortfolioGallery
