import {
  CodeRounded,
  DrawOutlined,
  StorefrontOutlined
} from "@mui/icons-material"
import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import ServiceCard from "../../components/ServiceCard"
import { getPageTitle } from "../../utils"

interface ICard {
  title: string
  icon: React.ReactElement
  description: string
}

const cards: ICard[] = [
  {
    title: "development",
    icon: <CodeRounded fontSize="large" />,
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`
  },
  {
    title: "design",
    icon: <DrawOutlined fontSize="large" />,
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`
  },
  {
    title: "ecommerce",
    icon: <StorefrontOutlined fontSize="large" />,
    description: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`
  }
]

const Service = () => {
  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("service.title"))
  }, [t])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{t("service.title")}</h1>
      <Grid container rowSpacing={2}>
        {cards.map((card, index) => (
          <Grid key={`${card.title}-${index}`} item xs={4}>
            <ServiceCard
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

export default Service
