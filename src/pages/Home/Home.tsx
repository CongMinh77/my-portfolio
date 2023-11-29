import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import Service from "../Service"
import About from "../About"
import Resume from "../Resume"
import Contact from "../Contact"
import Wolf from "../../assets/wolf.png"
import { Box, Typography } from "@mui/material"
import { COLORS } from "../../constants"

const Home = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("home.title"))
  }, [t])
  return (
    <>
      <Box sx={{ display: "flex", position: "relative" }}>
        <img src={Wolf} style={{ width: "100%" }} alt="Background" />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: COLORS.BACKGROUND_HOME,
            width: "100%"
          }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign={"center"}
            color={COLORS.WHITE}
            py={2}>
            I'm Nguyen Cong Minh
          </Typography>
        </Box>
      </Box>
      <About />
      <Service />
      <Resume />
      <Contact />
    </>
  )
}

export default Home
