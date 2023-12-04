import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { getPageTitle } from "../../utils"
import Service from "../Service"
import About from "../About"
import Resume from "../Resume"
import Contact from "../Contact"
import Wolf from "../../assets/wolf.png"
import { Box, ImageList, ImageListItem, Typography } from "@mui/material"
import { COLORS } from "../../constants"

const images = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed"
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books"
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink"
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen"
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds"
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs"
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop"
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors"
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee"
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage"
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle"
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table"
  }
]
const Home = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("home.title"))
  }, [t])
  return (
    <>
      <Box sx={{ display: "flex", position: "relative" }}>
        <img
          src={Wolf}
          style={{ width: "100%" }}
          alt="Background"
          loading="lazy"
        />
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
            {t("home.introduction")}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
        <Box>
          <Typography
            sx={{ paddingY: 3 }}
            textAlign={"center"}
            variant="h4"
            fontWeight="bold">
            My portfolio
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: 500,
              overflowY: "scroll",
              borderRadius: "20px"
            }}>
            <ImageList variant="masonry" cols={3} gap={8} sx={{ marginY: 0 }}>
              {images.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
        <About />
        <Service />
        <Resume />
        <Contact />
      </Box>
    </>
  )
}

export default Home
