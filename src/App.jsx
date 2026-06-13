import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutGroup } from 'framer-motion'
import './App.css'
import SmoothCursor from './Components/SmoothCursor'
import { PageTransitionProvider } from '@/Components/PageTransitionContext'
import { LiquidTransitionOverlay } from './Components/LiquidTransitionOverlay'
import { useLenis } from './hooks/useLenis'

// Lazy load pages for dynamic code-splitting
const Portfolio = React.lazy(() => import('./Portfolio'))
const ProjectsPage = React.lazy(() => import('./Components/ProjectsPage.jsx'))
const ProjectDetails = React.lazy(() => import('./Components/ProjectDetails.jsx'))
const OpenSourcePage = React.lazy(() => import('./Components/OpenSourcePage.jsx'))

function AppRoutes() {
  useLenis() // Enable smooth scrolling application-wide

  return (
    <PageTransitionProvider>
      <SmoothCursor />
      <LiquidTransitionOverlay />
      <LayoutGroup>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/project/:id' element={<ProjectDetails />} />
            <Route path='/open-source' element={<OpenSourcePage />} />
          </Routes>
        </Suspense>
      </LayoutGroup>
    </PageTransitionProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
