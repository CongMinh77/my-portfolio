import { Box, CssBaseline } from "@mui/material"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Routing from "./routes/routing"
import { ThemeProvider } from "./theme/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh"
        }}>
        <Header />
        <Box
          sx={{
            paddingY: "70px",
            width: "100%",
            flexGrow: 1
          }}>
          <Routing />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
