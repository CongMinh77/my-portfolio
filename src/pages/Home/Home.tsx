import { useTranslation } from "react-i18next"

const Home = () => {
  const [t] = useTranslation()
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{t("home.title")}</h1>
    </>
  )
}

export default Home
