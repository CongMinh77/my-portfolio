import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { PALETTES_1 } from "../../constants"
import { getPageTitle } from "../../utils"

const Footer = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("home.title"))
  }, [t])
  return (
    <>
      <Box sx={{ backgroundColor: PALETTES_1.BLUE }}>
        <Typography variant="subtitle1">Connect</Typography>
        <Box sx={{ display: "flex" }}>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

export default Footer
