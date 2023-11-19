import i18next from "i18next"
import React from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import App from "./App"
import ErrorBlock from "./components/ErrorBlock"
import ErrorBoundary from "./components/ErrorBoundary"
import "./index.css"
import en from "./locales/en.json"
import vi from "./locales/vi.json"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider } from "@mui/styles"
import MyTheme from "./themes/MyTheme"
import { BrowserRouter } from "react-router-dom"

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // Language to use
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
      {/* <BrowserRouter> */}
      <ErrorBoundary fallback={ErrorBlock}>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </ErrorBoundary>
      {/* </BrowserRouter> */}
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
