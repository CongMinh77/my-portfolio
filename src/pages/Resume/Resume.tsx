import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import { Box, Grid, Typography } from "@mui/material"
import AvatarLogo from "../../assets/avatar.png"
import WorkExperienceCard from "../../components/WorkExperienceCard"

const careerPath = [
  {
    jobTitle: "Front End Developer",
    company: "Facebook, Inc.",
    date: "November 2019 - Present",
    typeOfWork: "Full time"
  }
]

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
            <img src={AvatarLogo} alt="avt-bio" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4">{t("resume.work-experience")}</Typography>
            {careerPath &&
              careerPath.map((career) => (
                <WorkExperienceCard
                  key={career.jobTitle}
                  jobTitle={career.jobTitle}
                  date={career.date}
                  typeOfWork={career.typeOfWork}
                  company={career.company}
                />
              ))}
          </Box>
          <Box marginTop={3}>
            <Typography variant="h4">{t("resume.education")}</Typography>
            <WorkExperienceCard
              jobTitle={"Thang Long University"}
              date={"2018 - 2022"}
              typeOfWork={"Bachelor"}
              company={"Computer Science"}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Resume
