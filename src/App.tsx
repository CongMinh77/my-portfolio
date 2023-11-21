import { Box } from "@mui/material"
import "./App.css"
import Header from "./components/Header"
import Routing from "./routes/routing"

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <Header />
      <Box sx={{ marginTop: "70px", width: "100%" }}>
        <Routing />
      </Box>
    </Box>
  )
}

export default App
