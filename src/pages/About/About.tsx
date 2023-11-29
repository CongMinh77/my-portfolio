import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import { Box, Grid, Typography } from "@mui/material"
import AvatarLogo from "../../assets/avatar.png"

const About = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("about.title"))
  }, [t])

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>{t("about.title")}</h1>
      <Grid container>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <img src={AvatarLogo} alt="avt-bio" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4">{t("about.my-bio")}</Typography>
            <Typography style={{ marginTop: 10 }}>
              Full-stack developer with nearly 2 years of experience developing
              web applications including educational applications and internal
              management software. Proficient in many programming languages
              including PHP, JavaScript, CSS, Typescript, and some libraries and
              frameworks such as Laravel, ReactJS, ... And database management
              systems: Mysql, PostgreSQL In addition, I am a Designer and editor
              and use quite proficiently with Adobe editing software: Photoshop,
              Premier Pro, and Illustrator ...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
