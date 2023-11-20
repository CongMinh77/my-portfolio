import { createBrowserRouter, Route, Routes } from "react-router-dom"
import { About, Home } from "../pages"
import ErrorBlock from "../components/ErrorBlock"

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
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="*" element={<ErrorBlock variant="404" />} />
        {/* <RouterProvider router={router} /> */}
      </Routes>
    </>
  )
}

export default Routing
