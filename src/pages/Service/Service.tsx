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
import FinancialManagement from "../FinancialManagement"

interface ICard {
  title: string
  icon: React.ReactElement
}

interface IProps {
  showFinancial?: boolean
}

const cards: ICard[] = [
  {
    title: "development",
    icon: <CodeRounded fontSize="large" />
  },
  {
    title: "design",
    icon: <DrawOutlined fontSize="large" />
  },
  {
    title: "ecommerce",
    icon: <StorefrontOutlined fontSize="large" />
  }
]

const Service: React.FC<IProps> = (props) => {
  const { showFinancial = true } = props

  const [t] = useTranslation()
  useEffect(() => {
    document.title = getPageTitle(t("service.title"))
  }, [t])

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{t("service.title")}</h1>
      <Grid container rowSpacing={2}>
        {cards.map((card, index) => (
          <Grid key={`${card.title}-${index}`} item xs={12 / cards.length}>
            <ServiceCard
              title={t(`about.${card.title}`)}
              icon={card.icon}
              description={t(`about.description.${card.title}`)}
            />
          </Grid>
        ))}
      </Grid>
      {showFinancial && (
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <FinancialManagement />
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default Service
