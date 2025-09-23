import { createTheme } from '@mui/material/styles'
import { PALETTES_1, COLORS } from '../configs'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PALETTES_1.BLUE
    },
    secondary: {
      main: PALETTES_1.BLACK
    },
    background: {
      default: COLORS.WHITE,
      paper: '#f5f5f5'
    },
    text: {
      primary: PALETTES_1.BLACK,
      secondary: '#555555'
    }
  },
  typography: {
    fontFamily: `"Quicksand", "sans-serif"`,
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: PALETTES_1.BLUE
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: COLORS.WHITE
        }
      }
    }
  },
  // Thêm các thuộc tính bắt buộc từ ThemeOptions đã mở rộng
  header: {
    height: 60,
    bg: COLORS.WHITE,
    color: COLORS.HEADER_COLOR || '#000000'
  },
  footer: {
    height: 150
  },
  sidebar: {
    width: 224,
    fontColor: COLORS.WHITE
  },
  classroomSidebar: {
    width: 300
  },
  customs: {
    color: {
      success: COLORS.SUCCESS || '#4caf50',
      danger: COLORS.ERROR || '#f44336',
      border: {
        main: COLORS.WHITE_C8 || '#c8c8c8'
      }
    },
    button: {
      minWidth: 50
    }
  }
})

export default lightTheme
