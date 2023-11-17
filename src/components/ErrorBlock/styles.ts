import { createStyles } from "@mui/styles"
import { Theme } from "@mui/material"

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      height: '80%',
      minHeight: 500,

      '& div.img-block': {
        flex: '0 0 1',
        width: '50%',
        paddingRight: 152,
        zoom: 1,

        '& .img-element': {
          float: 'right',
          width: '100%',
          maxWidth: 430,
          height: 360,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'contain'
        }
      },

      '& .content-block': {
        flex: 'auto',

        '& .content-desc': {
          paddingBottom: theme.spacing(2)
        }
      }
    }
  })
