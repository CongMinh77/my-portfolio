import React, { Suspense, useContext } from "react"
import RouteChildrenContext from "../../context/RouterChildrenContext"
import Loading from "../Loading"
import { Route, Routes } from "react-router-dom"
import ErrorBlock from "../ErrorBlock"

const RouterView = () => {
  const routerChildren = useContext(RouteChildrenContext)
  return (
    <>
      <Suspense fallback={<Loading />}>
        {routerChildren && (
          <Routes>
            {routerChildren.map(
              (
                {
                  childRoutes,
                  path,
                  component: Component,
                  requiredRoles,
                  title
                },
                index
              ) => (
                <Route
                  key={index}
                  path={path}
                  Component={(props) => {
                    return (
                      <RouteChildrenContext.Provider value={childRoutes}>
                        <Component {...props}></Component>
                      </RouteChildrenContext.Provider>
                    )
                  }}></Route>
              )
            )}

            <Route>
              <ErrorBlock />
            </Route>
          </Routes>
        )}
      </Suspense>
    </>
  )
}

export default RouterView
