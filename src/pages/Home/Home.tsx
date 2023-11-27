import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import Service from "../Service"
import About from "../About"
import Resume from "../Resume"
import { Contact } from ".."

const Home = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("home.title"))
  }, [t])
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{t("home.title")}</h1>
      <About />
      <Service />
      <Resume />
      <Contact />
    </>
  )
}

export default Home
