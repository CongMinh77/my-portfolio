import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"

const Contact = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("contact.title"))
  }, [t])
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{t("contact.title")}</h1>
    </>
  )
}

export default Contact
