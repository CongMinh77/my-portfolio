import { Box, Grid, TextField, Typography } from "@mui/material"
import numeral from "numeral"
import React, { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

const FinancialManagement = () => {
  const { t } = useTranslation()
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
        label={t("service.your_salary")}
        variant="outlined"
        onChange={(e) => setSalary(Number(e.target.value))}
      />

      <Grid container rowSpacing={2}>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>{t("service.necessary")}</Typography>
            <Typography>{numeral(firstPot).format("0,0[.]00")}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>{t("sevice.savings")}</Typography>
            <Typography>{numeral(pots10Percent).format("0,0[.]00")}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>{t("service.self-development")}</Typography>
            <Typography>{numeral(pots10Percent).format("0,0[.]00")}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>{t("service.investment")}</Typography>
            <Typography>{numeral(pots10Percent).format("0,0[.]00")}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>{t("service.enjoys")}</Typography>
            <Typography>{numeral(pots10Percent).format("0,0[.]00")}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box p={2}>
            <Typography>{t("service.gifts")}</Typography>
            <Typography>{numeral(pots5Percent).format("0,0[.]00")}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FinancialManagement
