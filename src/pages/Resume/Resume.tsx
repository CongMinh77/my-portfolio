import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import { Box, Grid, Typography } from "@mui/material"
import AvatarLogo from "../../assets/avatar.png"
import WorkExperienceCard from "../../components/WorkExperienceCard"

const career = [
  {
    jobTitle: "Full Stack Developer",
    company: "Deha VietNam JSC.",
    date: "November 2021 - Present",
    typeOfWork: "Full time"
  }
]

const education = [
  {
    schoolName: "Thang Long University",
    date: "2018 - 2022",
    degree: "Bachelor Degree",
    company: "Computer Science"
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
            {career &&
              career.map((career) => (
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
            {education &&
              education.map((edu) => (
                <WorkExperienceCard
                  key={edu.schoolName}
                  jobTitle={edu.schoolName}
                  date={edu.date}
                  typeOfWork={edu.degree}
                  company={edu.company}
                />
              ))}
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Resume
