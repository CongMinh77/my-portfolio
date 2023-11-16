import { useTranslation } from "react-i18next"
import "./App.css"
import LanguageSelector from "./components/LanguageSelector"
import Routing from "./routes/routing"

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelector />
        <h2>{t("app.title")}</h2>
        <Routing />
      </header>
    </div>
  )
}

export default App
