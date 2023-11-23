import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import Footer from "../../components/Footer"

const Home = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("home.title"))
  }, [t])
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{t("home.title")}</h1>

      <Footer />
    </>
  )
}

export default Home
