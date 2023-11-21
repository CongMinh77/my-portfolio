import { Button, Container, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { assign } from "lodash"
import React from "react"
import { useTranslation } from "react-i18next"
import { ErrorFallbackProps } from "../ErrorBoundary/ErrorBoundary"
import { styles } from "./styles"
import { TFunction } from "i18next"
import Error404 from "../../assets/404.svg"
import Error403 from "../../assets/403.svg"
import ErrorOther from "../../assets/500.svg"

const useStyles = makeStyles(styles)

const getImgBg = (variant: string): string => {
  switch (variant) {
    case "403":
      return Error403
    case "404":
      return Error404
    default:
      return ErrorOther
  }
}

const getDefaultTitle = (
  variant: string,
  title: string | undefined,
  t: TFunction<"translation", undefined>
): string => {
  if (title) return title

  switch (variant) {
    case "403":
      return t("error.403")
    case "404":
      return t("error.404")
    case "500":
      return t("error.500")
    default:
      return t("error.other")
  }
}

interface INormalErrorBlockProps {
  variant?: "404" | "403" | "500" | "503" | "422" | ""
  title?: string
  subtext?: string
  backButton?: boolean
  backButtonTitle?: string
  backUrl?: string
  actionComponent?: React.ComponentType<any> | React.FC
}

const DisplayBlock: React.FC<INormalErrorBlockProps> = (props) => {
  const { t } = useTranslation()
  const defaultProps = {
    backButtonTitle: t("button.go-back-home"),
    backButton: true,
    backUrl: "/"
  }
  props = assign(defaultProps, props)

  const {
    variant = "404",
    subtext,
    backButton,
    backButtonTitle,
    backUrl,
    actionComponent: ActionComponent
  } = props
  const classes = useStyles()
  const imgBg = getImgBg(variant)
  const title = getDefaultTitle(variant, props.title, t)

  console.debug("imgBg", imgBg)
  document.title = `${variant} - ${title}`

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <div className="img-block">
          <img className="img-element" src={imgBg} alt="404" />
        </div>
        <div className="content-block">
          <Typography variant="h1" gutterBottom>
            {variant}
          </Typography>
          <div className="content-desc">
            <Typography variant="h5">{title}</Typography>
            {subtext && <Typography variant="subtitle1">{subtext}</Typography>}
          </div>

          {backButton && (
            <div className="action-block">
              {ActionComponent ? (
                <ActionComponent />
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  href={backUrl}>
                  {backButtonTitle}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

interface IProps extends ErrorFallbackProps {
  variant?: "404" | "403" | "500" | "503" | "422" | ""
  title?: string
  subtext?: string
  backButton?: boolean
  backButtonTitle?: string
  backUrl?: string
  actionComponent?: React.ComponentType<any> | React.FC
}

const ErrorBlock: React.FC<IProps> = (props) => {
  const { error, variant, title, ...rest } = props

  if (error) {
    return <DisplayBlock variant="503" title={error.message} {...rest} />
  }

  return <DisplayBlock variant={variant} title={title} {...rest} />
}

export default ErrorBlock
