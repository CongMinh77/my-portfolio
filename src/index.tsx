import { ThemeProvider } from "@mui/styles"
import i18next from "i18next"
import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import App from "./App"
import ErrorBlock from "./components/ErrorBlock"
import ErrorBoundary from "./components/ErrorBoundary"
import "./index.css"
import en from "./locales/en.json"
import vi from "./locales/vi.json"
import reportWebVitals from "./reportWebVitals"
import MyTheme from "./themes/MyTheme"
import { BrowserRouter } from "react-router-dom"
import { LinearProgress } from "@mui/material"

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
      <I18nextProvider i18n={i18next}>
        <BrowserRouter basename="/">
          <ErrorBoundary fallback={ErrorBlock}>
            <Suspense fallback={<LinearProgress />}>
              <App />
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
