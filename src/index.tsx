import { CssBaseline, LinearProgress } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { SpeedInsights } from "@vercel/speed-insights/react"
import i18next from "i18next"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorBlock from "./components/ErrorBlock"
import ErrorBoundary from "./components/ErrorBoundary"
import ScrollToTop from "./components/ScrollToTop"
import "./index.css"
import en from "./locales/en.json"
import vi from "./locales/vi.json"
import reportWebVitals from "./reportWebVitals"
import MyTheme from "./themes/MyTheme"

const locale = localStorage.getItem("locale")
i18next.init({
  interpolation: { escapeValue: false },
  lng: locale ?? "en", // Language currently used
  resources: {
    en: {
      translation: en
    },
    vi: {
      translation: vi
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <ErrorBoundary fallback={ErrorBlock}>
            <Suspense fallback={<LinearProgress />}>
              <ScrollToTop />
              <App />
              <SpeedInsights />
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
