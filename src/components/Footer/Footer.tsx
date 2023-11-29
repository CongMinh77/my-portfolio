import { Facebook, Instagram, LinkedIn } from "@mui/icons-material"
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import NCM from "../../assets/logo.png"
import { PALETTES_1 } from "../../constants"
import { Link } from "react-router-dom"

const services = [
  {
    title: "Web Development",
    link: "/service"
  },
  {
    title: "Web Design",
    link: "/"
  },
  {
    title: "Editor",
    link: "/"
  }
]

const information = [
  {
    title: "About me",
    link: "/about"
  },
  {
    title: "Contact me",
    link: "/contact"
  }
]

const contact = [
  {
    title: "Email",
    link: "congminh.se7en@gmail.com"
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/nguyenminhnc/"
  }
]

const Footer = () => {
  const [t] = useTranslation()
  return (
    <>
      <footer style={{ width: "100%" }}>
        <Box
          sx={{
            backgroundColor: PALETTES_1.BLUE,
            paddingY: 5
          }}>
          <Grid
            container
            sx={{ paddingBottom: 2, maxWidth: "1440px", mx: "auto" }}>
            <Grid item xs={3}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={NCM} alt="Logo" style={{ height: 150 }} />
              </Box>
              <Box px={3}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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

            <Grid item xs={3}>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                sx={{ paddingBottom: 2 }}>
                {t("footer.information")}
              </Typography>
              <Divider sx={{ width: "15%" }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 1
                }}>
                {information &&
                  information.map((info, key) => (
                    <Link key={`${key}-${info.title}`} to={info.link}>
                      <Typography
                        variant="subtitle1"
                        color={PALETTES_1.BLACK}
                        sx={{ paddingBottom: 1 }}>
                        {info.title}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                sx={{ paddingBottom: 2 }}>
                {t("footer.services")}
              </Typography>
              <Divider sx={{ width: "15%" }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 1
                }}>
                {services &&
                  services.map((service, key) => (
                    <Link key={`${key}-${service.title}`} to={service.link}>
                      <Typography
                        variant="subtitle1"
                        color={PALETTES_1.BLACK}
                        sx={{ paddingBottom: 1 }}>
                        {service.title}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                sx={{ paddingBottom: 2 }}>
                {t("footer.contact")}
              </Typography>
              <Divider sx={{ width: "15%" }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 1
                }}>
                {contact &&
                  contact.map((myContact, key) => (
                    <Link key={`${key}-${myContact.title}`} to={myContact.link}>
                      <Typography
                        variant="subtitle1"
                        color={PALETTES_1.BLACK}
                        sx={{ paddingBottom: 1 }}>
                        {myContact.title}
                      </Typography>
                    </Link>
                  ))}
              </Box>
            </Grid>
          </Grid>

          <Divider />

          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", paddingTop: 2 }}>
            © Copyright All rights reserved | Developer by NCM
          </Typography>
        </Box>
      </footer>
    </>
  )
}

export default Footer
