import React, { memo } from 'react'
import { Box } from '@mui/material'
import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

/**
 * Layout component that wraps the main content with Header and Footer
 * Using memo to prevent re-renders when only children change
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          paddingY: '70px',
          width: '100%',
          flexGrow: 1
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

// Using memo to prevent re-renders when only children change
export default memo(Layout)
