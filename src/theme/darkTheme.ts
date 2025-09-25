import { createTheme } from '@mui/material/styles'
import { PALETTES_1, COLORS } from '../configs'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PALETTES_1.BLUE
    },
    secondary: {
      main: '#ffffff'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3'
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
          backgroundColor: '#1e1e1e'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    }
  },
  // Thêm các thuộc tính bắt buộc từ ThemeOptions đã mở rộng
  header: {
    height: 60,
    bg: '#1e1e1e',
    color: '#ffffff'
  },
  footer: {
    height: 150,
    bg: '#1e1e1e',
    color: '#ffffff'
  },
  sidebar: {
    width: 224,
    fontColor: '#ffffff'
  },
  classroomSidebar: {
    width: 300
  },
  customs: {
    color: {
      success: COLORS.SUCCESS || '#4caf50',
      danger: COLORS.ERROR || '#f44336',
      border: {
        main: '#555555'
      }
    },
    button: {
      minWidth: 50
    }
  }
})

export default darkTheme
