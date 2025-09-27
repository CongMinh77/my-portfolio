import { Box, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import WorkExperienceCard from '@components/WorkExperienceCard'
import { getPageTitle, Images } from '@utils/index'
import PageSEO from '@/components/SEO/PageSEO'

const career = [
  {
    jobTitle: 'Full Stack Developer',
    company: 'Deha VietNam JSC.',
    date: 'November 2021 - Present',
    typeOfWork: 'Full time'
  }
]

const education = [
  {
    schoolName: 'Thang Long University',
    date: '2018 - 2022',
    degree: 'Bachelor Degree',
    company: 'Computer Science'
  }
]

const Resume = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t('resume.title'))
  }, [t])

  return (
    <div style={{ width: '100%' }}>
      <PageSEO 
        title={t('resume.title') + " - Minh Nguyen"}
        description={t('resume.meta.description') || "View Minh Nguyen's professional resume, work experience, and educational background."}
        path="/resume"
        keywords={t('resume.meta.keywords')?.split(', ') || ['resume', 'CV', 'work experience', 'education', 'skills', 'career']}
      />
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 'medium', py: 2 }}>
        {t('resume.title')}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <img
              src={Images.home.avtNCM}
              alt="avt-bio"
              style={{ width: '100%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h4">{t('resume.work-experience')}</Typography>
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
            <Typography variant="h4">{t('resume.education')}</Typography>
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
