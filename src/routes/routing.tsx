import { Route, Routes } from "react-router-dom"
import ErrorBlock from "../components/ErrorBlock"
import { About, Contact, Home, Resume, Service } from "../pages"

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorBlock variant="404" />} />
      </Routes>
    </>
  )
}

export default Routing
