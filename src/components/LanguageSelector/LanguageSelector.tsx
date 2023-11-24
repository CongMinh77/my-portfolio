import React from "react"
import { useTranslation } from "react-i18next"
import ViFlag from "../../assets/vi.png"
import EnFlag from "../../assets/en.png"
import { Box, Button, Tooltip } from "@mui/material"

const LanguageSelector = () => {
  const [t, i18n] = useTranslation()

  const handleChangeLocale = (locale: string) => {
    i18n.changeLanguage(locale)
    localStorage.setItem("locale", locale)
  }
  return (
    <Box style={{ display: "flex" }}>
      <Button sx={{ paddingX: 0 }} onClick={() => handleChangeLocale("vi")}>
        <Tooltip title={t("language-selector.languages.vi")}>
          <img src={ViFlag} style={{ height: 20 }} alt="ViFlag" />
        </Tooltip>
      </Button>
      <Button sx={{ paddingX: 0 }} onClick={() => handleChangeLocale("en")}>
        <Tooltip title={t("language-selector.languages.en")}>
          <img src={EnFlag} style={{ height: 20 }} alt="EnFlag" />
        </Tooltip>
      </Button>
    </Box>
  )
}

export default LanguageSelector
