import { useTranslation } from "react-i18next"

const LanguageSelector = () => {
  const [t, i18n] = useTranslation()
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => i18n.changeLanguage("vi")}>
        {t("language-selector.languages.vi")}
      </button>
      &nbsp;
      <button onClick={() => i18n.changeLanguage("en")}>
        {t("language-selector.languages.en")}
      </button>
    </div>
  )
}

export default LanguageSelector
