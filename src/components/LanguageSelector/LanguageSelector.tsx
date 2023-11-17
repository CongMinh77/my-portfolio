import React from "react"
import { useTranslation } from "react-i18next"
import ViFlag from "../../assets/vi.png"
import EnFlag from "../../assets/en.png"
import { Button, Tooltip } from "@mui/material"

const LanguageSelector = () => {
  const [t, i18n] = useTranslation()
  return (
    <div style={{ display: "flex" }}>
      <Tooltip title={t("language-selector.languages.vi")}>
        <Button
          variant="outlined"
          sx={{ paddingX: 1 }}
          onClick={() => i18n.changeLanguage("vi")}>
          <img src={ViFlag} style={{ height: 20 }} alt="ViFlag" />
        </Button>
      </Tooltip>
      <Tooltip title={t("language-selector.languages.en")}>
        <Button
          variant="outlined"
          sx={{ paddingX: 1 }}
          onClick={() => i18n.changeLanguage("en")}>
          <img src={EnFlag} style={{ height: 20 }} alt="EnFlag" />
        </Button>
      </Tooltip>
    </div>
  )
}

export default LanguageSelector
