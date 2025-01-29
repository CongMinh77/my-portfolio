import { Box, Chip, Typography } from '@mui/material'
import React from 'react'
import { COLORS } from '../../configs'
import { BusinessOutlined, CalendarMonthOutlined } from '@mui/icons-material'

interface IProps {
  jobTitle: string
  company: string
  date: string
  typeOfWork?: string
}

const WorkExperienceCard: React.FC<IProps> = (props) => {
  const { jobTitle, company, date, typeOfWork } = props
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        borderBottom: `1px solid ${COLORS.WHITE_CC}`,
        borderRadius: '5px',
        padding: 2
      }}>
      <Box>
        <Typography variant="h6" style={{ marginBottom: 3 }}>
          {jobTitle}
        </Typography>
        <Box
          mt={1}
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <BusinessOutlined />
          <Typography variant="caption" ml={1}>
            {company}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
        {typeOfWork && (
          <Chip variant="outlined" color="primary" label={typeOfWork} />
        )}

        <Box
          mt={1}
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <CalendarMonthOutlined />
          <Typography variant="caption" ml={1}>
            {date}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default WorkExperienceCard
