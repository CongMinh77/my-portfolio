import { Route, Routes } from "react-router-dom"
import ErrorBlock from "../components/ErrorBlock"
import { About, Home, Service } from "../pages"

const Routing = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     Component: Home
  //   },
  //   {
  //     path: "about",
  //     Component: About
  //   }
  // ])
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/service" Component={Service} />
        <Route path="*" element={<ErrorBlock variant="404" />} />
        {/* <RouterProvider router={router} /> */}
      </Routes>
    </>
  )
}

export default Routing
