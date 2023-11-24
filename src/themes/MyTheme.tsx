import { createTheme } from "@mui/material/styles"
import { COLORS, PALETTES_1 } from "../constants"

declare module "@mui/material/styles" {
  interface Theme {
    header: {
      height: number
      bg: string
      color: string
    }
    footer: {
      height: number
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
  }

  interface ThemeOptions {
    header: {
      height: number
      bg: string
      color: string
    }
    footer: {
      height: number
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
    bg: "#091a7a",
    fontColor: COLORS.WHITE
  },
  footer: {
    height: 150
  },
  palette: {
    mode: "light",
    background: {
      default: COLORS.WHITE_ED
    },
    secondary: {
      main: PALETTES_1.BLACK
    },
    text: {
      primary: "#222b45",
      secondary: "#66729c"
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
