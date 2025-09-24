import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import ErrorBlock from '../components/ErrorBlock'

// Lazy load pages for better performance
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Service = lazy(() => import('@/pages/Service'))
const Resume = lazy(() => import('@/pages/Resume'))
const Contact = lazy(() => import('@/pages/Contact'))
const Tools = lazy(() => import('@/pages/Tools'))

/**
 * Main routing component with lazy-loaded routes
 * Each page is wrapped in Suspense to prevent Header re-render during page transitions
 */
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<LinearProgress />}>
          <Home />
        </Suspense>
      } />
      <Route path="/home" element={
        <Suspense fallback={<LinearProgress />}>
          <Home />
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={<LinearProgress />}>
          <About />
        </Suspense>
      } />
      <Route path="/service" element={
        <Suspense fallback={<LinearProgress />}>
          <Service />
        </Suspense>
      } />
      <Route path="/resume" element={
        <Suspense fallback={<LinearProgress />}>
          <Resume />
        </Suspense>
      } />
      <Route path="/contact" element={
        <Suspense fallback={<LinearProgress />}>
          <Contact />
        </Suspense>
      } />
      <Route path="/tools" element={
        <Suspense fallback={<LinearProgress />}>
          <Tools />
        </Suspense>
      } />
      <Route path="*" element={<ErrorBlock variant="404" />} />
    </Routes>
  )
}

export default Routing
