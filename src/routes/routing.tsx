import { createBrowserRouter, Route, Routes } from "react-router-dom"
import { About, Home } from "../pages"

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home
    },
    {
      path: "about",
      Component: About
    }
  ])
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        {/* <RouterProvider router={router} /> */}
      </Routes>
    </>
  )
}

export default Routing
