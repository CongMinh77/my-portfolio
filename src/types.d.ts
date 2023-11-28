/// <reference types="react-scripts" />

declare type RouteChildrenType = {
  path: string
  component:
    | React.ComponentType<any>
    | React.LazyExoticComponent<React.ComponentType<any>>
  requiredClaims?: { [key: string]: boolean }
  requiredRoles?: { [key: string]: boolean }
  childRoutes?: RouteChildrenType[]
  title?: string
}