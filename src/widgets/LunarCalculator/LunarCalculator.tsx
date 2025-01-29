import { Box, Grid, TextField, Typography } from '@mui/material'
import { DIA_CHI, NGU_HANH, THIEN_CAN } from 'configs'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { returnNumberDestiny } from 'utils/lunarCalculator'

type Props = {}

const LunarCalculator = (props: Props) => {
  const { t } = useTranslation()

  const [lunarYear, setLunarYear] = useState<number>(0)
  const thienCan = useMemo(
    () =>
      THIEN_CAN.find(
        (item) =>
          item.value + '' === (lunarYear + '')[(lunarYear + '').length - 1]
      ),
    [lunarYear]
  )

  const diaChi = useMemo(
    () => DIA_CHI.find((item) => item.value === lunarYear % 12),
    [lunarYear]
  )

  const destinyNumber = useMemo(
    () =>
      returnNumberDestiny((thienCan?.destiny ?? 0) + (diaChi?.destiny ?? 0)),
    [diaChi?.destiny, thienCan?.destiny]
  )

  const nguHanh = useMemo(
    () => NGU_HANH.find((item) => item.value === destinyNumber),
    [destinyNumber]
  )

  console.debug('nguHanh', nguHanh)
  console.debug('diaChi', diaChi)
  console.debug('thienCan', thienCan)

  return (
    <>
      <Box p={2}>
        <TextField
          label={t('lunar.your-lunar-year')}
          variant="outlined"
          onChange={(e) => setLunarYear(Number(e.target.value))}
        />

        <Grid container rowSpacing={2}>
          <Grid item xs={2}>
            <Box p={2}>
              <Typography>
                {t('Bạn sinh năm ') + thienCan?.name + ' ' + diaChi?.name}
              </Typography>
              <Typography>{t('Bạn thuộc mệnh ') + nguHanh?.name}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default LunarCalculator
