import { Box, Typography } from "@mui/material"
import React from "react"

const Card = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h6>icon</h6>
      <Typography>Title</Typography>
      <Typography>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </Typography>
    </Box>
  )
}

export default Card
