import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import { Box, Grid, IconButton, Typography } from "@mui/material"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { PALETTES_1 } from "../../constants"
import { getPageTitle } from "../../utils"
import NCM from "../../assets/logo.png"

const Footer = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("home.title"))
  }, [t])
  return (
    <>
      <footer style={{ width: "100%" }}>
        <Box sx={{ backgroundColor: PALETTES_1.BLUE }}>
          <Grid container>
            <Grid item xs={3}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={NCM} alt="Logo" style={{ height: 100 }} />
              </Box>
              <Box px={3}>
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
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
      </footer>
    </>
  )
}

export default Footer
