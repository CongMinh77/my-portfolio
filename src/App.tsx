import { useTranslation } from "react-i18next"
import "./App.css"
import Header from "./components/Header"
import LanguageSelector from "./components/LanguageSelector"
import Routing from "./routes/routing"

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <Header />
      <LanguageSelector />
      <h2>{t("app.title")}</h2>
      <Routing />
    </div>
  )
}

export default App
