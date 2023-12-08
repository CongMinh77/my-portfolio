import { Box, TextField, Typography } from "@mui/material"
import React, { useMemo, useState } from "react"

const FinancialManagement = () => {
  const [salary, setSalary] = useState<number>(0)

  let firstPot = useMemo(() => {
    return salary * 0.55
  }, [salary])

  return (
    <Box>
      <TextField
        label="Your Salary"
        variant="outlined"
        onChange={(e) => setSalary(Number(e.target.value))}
      />

      <Typography> First pot</Typography>
      <Typography>{firstPot}</Typography>
    </Box>
  )
}

export default FinancialManagement
