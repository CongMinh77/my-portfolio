import { About, Contact, Home, Resume, Service, Tools } from '@/pages'
import { Route, Routes } from 'react-router-dom'
import ErrorBlock from '../components/ErrorBlock'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/home" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/service" Component={Service} />
      <Route path="/resume" Component={Resume} />
      <Route path="/contact" Component={Contact} />
      <Route path="/tools" Component={Tools} />
      <Route path="*" element={<ErrorBlock variant="404" />} />
    </Routes>
  )
}

export default Routing
