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
        <Routes>
          <Route>
            <ErrorBlock />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default RouterView
