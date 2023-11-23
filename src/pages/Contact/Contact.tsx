import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import { PALETTES_1 } from "../../constants"
import {
  EmailOutlined,
  PhoneAndroidOutlined,
  PlaceOutlined
} from "@mui/icons-material"

const Contact = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("contact.title"))
  }, [t])
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{t("contact.title")}</h1>
      <Grid container>
        <Grid item xs={6} sx={{ padding: 3 }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <TextField fullWidth label="First name" variant="standard" />
            </Box>
            <Box sx={{ marginLeft: 2, width: "100%" }}>
              <TextField fullWidth label="Last name" variant="standard" />
            </Box>
          </Box>
          <Box mt={3}>
            <TextField fullWidth label="Email address" variant="standard" />
          </Box>
          <Box mt={3}>
            <TextField
              multiline
              fullWidth
              rows={3}
              label="Messenger"
              variant="standard"
            />
          </Box>
          <Box mt={3}>
            <Button
              style={{
                borderRadius: "20px",
                backgroundColor: PALETTES_1.GREEN,
                color: PALETTES_1.BLACK
              }}
              variant="contained">
              Send messenger
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {t("contact.info")}
          </Typography>

          <Box mt={3} sx={{ display: "flex", alignItems: "center" }}>
            <PlaceOutlined />
            <Typography ml={2} variant="body1">
              Lien Hiep, Phuc Tho, Ha Noi
            </Typography>
          </Box>
          <Box
            mt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              color: PALETTES_1.GREEN
            }}>
            <PhoneAndroidOutlined />
            <Typography ml={2} variant="body1">
              0949 389 572
            </Typography>
          </Box>
          <Box
            mt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              color: PALETTES_1.GREEN
            }}>
            <EmailOutlined />
            <Typography ml={2} variant="body1">
              congminh.se7en@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
