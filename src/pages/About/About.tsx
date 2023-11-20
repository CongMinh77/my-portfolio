import {
  DesktopMacOutlined,
  DrawOutlined,
  StorefrontOutlined
} from "@mui/icons-material"
import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Card from "../../components/Card"
import { getPageTitle } from "../../utils"

interface ICard {
  title: string
  icon: React.ReactElement
  description: string
}

const cards: ICard[] = [
  {
    title: "ecommerce",
    icon: <StorefrontOutlined fontSize="large" />,
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`
  },
  {
    title: "development",
    icon: <DesktopMacOutlined fontSize="large" />,
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`
  },
  {
    title: "design",
    icon: <DrawOutlined fontSize="large" />,
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`
  }
]

const About = () => {
  useEffect(() => {
    document.title = getPageTitle("About")
  }, [])
  const [t] = useTranslation()

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{t("about.title")}</h1>
      <Grid container>
        {cards.map((card) => (
          <Grid key={card.title} item xs={4}>
            <Card
              title={t(`about.${card.title}`)}
              icon={card.icon}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default About
