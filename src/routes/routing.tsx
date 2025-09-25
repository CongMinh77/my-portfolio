import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBlock from '../components/ErrorBlock'
import PageTransition from '../components/PageTransition'
import LoadingScreen from '../components/LoadingScreen'

// Lazy load pages for better performance
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Service = lazy(() => import('@/pages/Service'))
const Resume = lazy(() => import('@/pages/Resume'))
const Contact = lazy(() => import('@/pages/Contact'))
const Tools = lazy(() => import('@/pages/Tools'))

/**
 * Main routing component with lazy-loaded routes
 * Each page is wrapped in Suspense and PageTransition for smooth transitions
 */
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<LoadingScreen message="Loading Home..." />}>
          <PageTransition>
            <Home />
          </PageTransition>
        </Suspense>
      } />
      <Route path="/home" element={
        <Suspense fallback={<LoadingScreen message="Loading Home..." />}>
          <PageTransition>
            <Home />
          </PageTransition>
        </Suspense>
      } />
      <Route path="/about" element={
        <Suspense fallback={<LoadingScreen message="Loading About..." />}>
          <PageTransition>
            <About />
          </PageTransition>
        </Suspense>
      } />
      <Route path="/service" element={
        <Suspense fallback={<LoadingScreen message="Loading Services..." />}>
          <PageTransition>
            <Service />
          </PageTransition>
        </Suspense>
      } />
      <Route path="/resume" element={
        <Suspense fallback={<LoadingScreen message="Loading Resume..." />}>
          <PageTransition>
            <Resume />
          </PageTransition>
        </Suspense>
      } />
      <Route path="/contact" element={
        <Suspense fallback={<LoadingScreen message="Loading Contact..." />}>
          <PageTransition>
            <Contact />
          </PageTransition>
        </Suspense>
      } />
      <Route path="/tools" element={
        <Suspense fallback={<LoadingScreen message="Loading Tools..." />}>
          <PageTransition>
            <Tools />
          </PageTransition>
        </Suspense>
      } />
      <Route path="*" element={<ErrorBlock variant="404" />} />
    </Routes>
  )
}

export default Routing
