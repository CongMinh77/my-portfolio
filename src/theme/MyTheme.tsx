import { createTheme } from '@mui/material/styles'
import { COLORS, PALETTES_1 } from '../configs'

declare module '@mui/material/styles' {
  interface Theme {
    header: {
      height: number
      bg: string
      color: string
    }
    footer: {
      height: number
      bg: string
      color: string
    }
    sidebar: {
      width: number
      bg: string
      fontColor: string
    }
    classroomSidebar: {
      width: number
    }
    customs: {
      color: {
        danger: string
        success: string
        border: {
          main: string
        }
      }
      button: {
        minWidth: number
      }
    }
    componentStyles: {
      link: {
        color: string
        hoverColor: string
      }
      icon: {
        color: string
        hoverColor: string
      }
      divider: {
        color: string
      }
    }
  }

  interface ThemeOptions {
    header: {
      height: number
      bg: string
      color: string
    }
    footer: {
      height: number
      bg: string
      color: string
    }
    sidebar: {
      width?: number
      bg?: string
      fontColor?: string
    }
    classroomSidebar: {
      width: number
    }
    customs: {
      color: {
        success: string
        danger: string
        border: {
          main: string
        }
      }
      button: {
        minWidth: number
      }
    }
    componentStyles?: {
      link?: {
        color: string
        hoverColor: string
      }
      icon?: {
        color: string
        hoverColor: string
      }
      divider?: {
        color: string
      }
    }
  }
}

const MyTheme = createTheme({
  header: {
    height: 60,
    bg: COLORS.WHITE,
    color: COLORS.HEADER_COLOR
  },
  sidebar: {
    width: 224,
    fontColor: COLORS.WHITE
  },
  footer: {
    height: 150,
    bg: COLORS.WHITE,
    color: COLORS.HEADER_COLOR
  },
  palette: {
    mode: 'light',
    background: {
      default: COLORS.WHITE_EF
    },
    secondary: {
      main: PALETTES_1.BLACK
    },
    text: {
      primary: COLORS.TEXT_PRIMARY,
      secondary: COLORS.TEXT_SECONDARY
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
  classroomSidebar: {
    width: 300
  },
  customs: {
    color: {
      success: COLORS.SUCCESS,
      danger: COLORS.ERROR,
      border: {
        main: COLORS.WHITE_C8
      }
    },
    button: {
      minWidth: 50
    }
  }
})

export default MyTheme
