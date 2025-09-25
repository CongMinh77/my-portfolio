import { CssBaseline, LinearProgress } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import i18next from 'i18next'
import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './theme/ThemeContext'
import ScrollProgressBar from './components/ScrollProgressBar'

// Components
import ErrorBlock from './components/ErrorBlock'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Routing from './routes/routing'

// Resources
import en from './locales/en.json'
import vi from './locales/vi.json'
import MyTheme from './themes/MyTheme'

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
                  <ScrollProgressBar />
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
