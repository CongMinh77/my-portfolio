import React from "react"

const RouteChildrenContext = React.createContext<
  RouteChildrenType[] | undefined
>(undefined)

export default RouteChildrenContext
