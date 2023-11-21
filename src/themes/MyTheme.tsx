import { createTheme } from "@mui/material/styles"
import { COLORS } from "../constants"

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

export default createTheme({
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
    background: {
      default: COLORS.WHITE_ED
    },
    secondary: {
      main: "#F37029"
    },
    text: {
      primary: "#222b45",
      secondary: "#66729c"
    }
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif',
    fontSize: 12,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  classroomSidebar: {
    width: 300
  },
  customs: {
    color: {
      success: "#007E33",
      danger: "#f50057",
      border: {
        main: "#c8c8c8"
      }
    },
    button: {
      minWidth: 150
    }
  }
})
