import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
      <RouterProvider router={router} />
    </>
  )
}

export default Routing
