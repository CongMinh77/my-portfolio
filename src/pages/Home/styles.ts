import { makeStyles } from '@mui/styles'
import { COLORS } from '../../configs'

export const useStyles = makeStyles({
  wrapTypography: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: COLORS.BACKGROUND_HOME,
    width: '100%'
  }
})
