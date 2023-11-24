import { Box } from "@mui/material"
import "./App.css"
import Header from "./components/Header"
import Routing from "./routes/routing"
import Footer from "./components/Footer"

function App() {
  return (
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
  )
}

export default App
