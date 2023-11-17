import { Button, Container, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import { ErrorFallbackProps } from "../ErrorBoundary/ErrorBoundary"
import { styles } from "./styles"
import { assign } from "lodash"

const useStyles = makeStyles(styles)

const getImgBg = (variant: string): string => {
  switch (variant) {
    case "403":
      return "/imgs/403.svg"
    case "404":
      return "/imgs/404.svg"
    default:
      return "/imgs/500.svg"
  }
}

const getDefaultTitle = (
  variant: string,
  title: string | undefined
): string => {
  if (title) return title

  switch (variant) {
    case "403":
      return "Xin lỗi, bạn không thể truy cập nội dung này"
    case "404":
      return "Xin lỗi, nội dung hoặc trang bạn truy cập không tồn tại"
    case "500":
      return "Đã có lỗi kỹ thuật, vui lòng liên hệ DVKH nếu trường hợp khẩn thiệt"
    default:
      return "Không thể truy cập máy chủ, có thể lỗi kỹ thuật hoặc do vấn đề mạng của bạn"
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
  const defaultProps = {
    backButtonTitle: "Trở về trang chủ",
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
  const title = getDefaultTitle(variant, props.title)

  console.debug("ErrorBlock", props)

  document.title = `${variant} - ${title}`

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <div className="img-block">
          <div
            className="img-element"
            style={{ backgroundImage: `url("${imgBg}")` }}></div>
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
