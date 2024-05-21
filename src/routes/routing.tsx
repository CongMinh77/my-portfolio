import { Route, Routes } from "react-router-dom"
import ErrorBlock from "../components/ErrorBlock"
import { About, Contact, Home, Resume, Service } from "../pages"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/home" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/service" Component={Service} />
      <Route path="/resume" Component={Resume} />
      <Route path="/contact" Component={Contact} />
      <Route path="*" element={<ErrorBlock variant="404" />} />
    </Routes>
  )
}

export default Routing
