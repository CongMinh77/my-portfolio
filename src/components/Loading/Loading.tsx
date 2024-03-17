import React from "react"
import { style } from "./style"
import { makeStyles } from "@mui/styles"
import {
  Box,
  BoxProps,
  CircularProgress,
  CircularProgressProps
} from "@mui/material"

const useStyle = makeStyles(style)

interface IProps {
  size?: CircularProgressProps["size"]
  style?: BoxProps["style"]
}

const Loading: React.FC<IProps> = ({ size, style }) => {
  const classes = useStyle()
  return (
    <Box style={style} className={classes.loadingCtn}>
      <CircularProgress size={size} />
    </Box>
  )
}

export default Loading
