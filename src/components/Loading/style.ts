import { Theme } from "@mui/material"

export const style = (theme: Theme) => {
  return {
    loadingCtn: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(10)
    }
  }
}