import { Box, Typography } from "@mui/material"
import React from "react"
import { COLORS } from "../../constants"

interface IProps {
  title: string
  icon: React.ReactElement
  description: string
}

const ServiceCard: React.FC<IProps> = (props) => {
  const { title, icon, description } = props
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        border: `1px solid ${COLORS.WHITE_CC}`,
        borderRadius: "5px",
        marginX: 2,
        padding: 2,
        minHeight: "180px"
      }}>
      {icon}
      <Typography variant="h6" style={{ marginBottom: 3 }}>
        {title}
      </Typography>
      <Typography variant="subtitle1" style={{ textAlign: "center" }}>
        {description}
      </Typography>
    </Box>
  )
}

export default ServiceCard
