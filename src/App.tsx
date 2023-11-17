import { useTranslation } from "react-i18next"
import "./App.css"
import Header from "./components/Header"
import Routing from "./routes/routing"

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <Header />
      <h2>{t("app.title")}</h2>
      <Routing />
    </div>
  )
}

export default App
