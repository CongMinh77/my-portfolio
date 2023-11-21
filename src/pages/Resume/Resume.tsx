import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import { Box, Grid, Typography } from "@mui/material"
import AvatarLogo from "../../assets/avatar.png"
import WorkExperienceCard from "../../components/WorkExperienceCard"

const Resume = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("resume.title"))
  }, [t])

  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>{t("resume.title")}</h1>
      <Grid container>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <img src={AvatarLogo} alt="avt-bio" style={{ height: 400 }} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4">{t("resume.work-experience")}</Typography>
            <WorkExperienceCard />
          </Box>
          <Box marginTop={3}>
            <Typography variant="h4">{t("resume.education")}</Typography>
            <Typography style={{ marginTop: 10 }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Resume
