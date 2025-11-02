import { Box, Typography, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Portfolio gallery component that displays a masonry layout of images
 * @param {Object} props - Component props
 * @param {Array} props.images - Array of image objects with src and title properties
 * @param {string} props.title - Gallery title
 */
const PortfolioGallery: React.FC<{
  images: Array<{ src: string; title: string; website: string }>
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
            <Link
              key={item.src}
              to={item.website}
              target="_blank"
              rel="noopener noreferrer">
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
            </Link>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default PortfolioGallery
