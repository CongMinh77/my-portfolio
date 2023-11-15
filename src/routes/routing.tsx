import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About } from "../pages"

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>HomePage</>
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
