import { Box, Grid, TextField, Typography } from "@mui/material"
import React, { useMemo, useState } from "react"

const FinancialManagement = () => {
  const [salary, setSalary] = useState<number>(0)

  let firstPot = useMemo(() => {
    return salary * 0.55
  }, [salary])

  let pots10Percent = useMemo(() => {
    return salary * 0.1
  }, [salary])

  let pots5Percent = useMemo(() => {
    return salary * 0.05
  }, [salary])

  return (
    <Box p={2}>
      <TextField
        label="Your Salary"
        variant="outlined"
        onChange={(e) => setSalary(Number(e.target.value))}
      />

      <Grid container rowSpacing={2}>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>Necessary</Typography>
            <Typography>{firstPot}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>Savings</Typography>
            <Typography>{pots10Percent}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>Self-development</Typography>
            <Typography>{pots10Percent}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>Investment</Typography>
            <Typography>{pots10Percent}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>Enjoys</Typography>
            <Typography>{pots10Percent}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>Gifts</Typography>
            <Typography>{pots5Percent}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FinancialManagement
