import { Box, CssBaseline, LinearProgress } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from './theme/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import React, { Suspense } from 'react'
import i18next from 'i18next'

// Components
import Layout from './components/Layout'
import Routing from './routes/routing'
import ErrorBlock from './components/ErrorBlock'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'

// Resources
import MyTheme from './themes/MyTheme'
import en from './locales/en.json'
import vi from './locales/vi.json'

// Styles
import './App.css'

/**
 * Initialize i18next with translations
 */
const initializeI18n = () => {
  const locale = localStorage.getItem('locale')
  i18next.init({
    interpolation: { escapeValue: false },
    lng: locale ?? 'en',
    resources: {
      en: { translation: en },
      vi: { translation: vi }
    }
  })
  return i18next
}

/**
 * Main application component
 * @returns {JSX.Element} The rendered App component
 */
const App = (): JSX.Element => {
  const i18n = initializeI18n()

  return (
    <React.StrictMode>
      <MuiThemeProvider theme={MyTheme}>
        <ThemeProvider>
          <CssBaseline />
          <I18nextProvider i18n={i18n}>
            <BrowserRouter>
              <ErrorBoundary fallback={ErrorBlock}>
                <Suspense fallback={<LinearProgress />}>
                  <ScrollToTop />
                  <Layout>
                    <Routing />
                  </Layout>
                  {/* Đặt các analytics tools ở đây để tránh re-render khi chuyển trang */}
                  <SpeedInsights />
                  <Analytics />
                </Suspense>
              </ErrorBoundary>
            </BrowserRouter>
          </I18nextProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </React.StrictMode>
  )
}

export default App
