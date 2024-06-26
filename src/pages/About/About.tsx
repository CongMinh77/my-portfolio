import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import { Box, Button, Grid, Typography } from "@mui/material"
import AvatarLogo from "../../assets/avatar.png"
import { Link } from "react-router-dom"

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
              Full-stack developer with 2 years of experience developing web
              applications including educational applications and internal
              management software. Proficient in many programming languages
              including PHP, JavaScript, CSS, Typescript, and some libraries and
              frameworks such as Laravel, ReactJS, ... And database management
              systems: Mysql, PostgreSQL.
              <br />
              In addition, I am a Designer and editor and use quite proficiently
              with Adobe editing software: Photoshop, Premier Pro, and
              Illustrator ...
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                paddingX: 2,
                borderRadius: 5,
                minWidth: 200,
                marginRight: 2
              }}>
              {t("about.hire-me")}
            </Button>
            <Link
              to={
                "https://drive.google.com/file/d/1YlD3hU8qE4K_Y7J9DfZ3sFqDCSfPs6KJ/view?fbclid=IwAR1AgIQrMZsGtTmGQayX94lZUNeYnGx0eKLIJ3Ju3XiN71zWDhgIA5IDpAc"
              }
              target="_blank">
              <Button
                variant="contained"
                color="secondary"
                sx={{ paddingX: 2, borderRadius: 5, minWidth: 200 }}>
                {t("about.download-cv")}
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
