import { Box, Typography } from "@mui/material"
import React from "react"
import { COLORS } from "../../constants"

interface IProps {}

const WorkExperienceCard: React.FC<IProps> = (props) => {
  const {} = props
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        border: `1px solid ${COLORS.WHITE_CC}`,
        borderRadius: "5px",
        padding: 2
      }}>
      "icon"
      <Typography variant="h6" style={{ marginBottom: 3 }}>
        "title"
      </Typography>
      <Typography variant="subtitle1" style={{ textAlign: "center" }}>
        "description"
      </Typography>
    </Box>
  )
}

export default WorkExperienceCard
