import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutGroup } from 'framer-motion'
import './App.css'
import Portfolio from './Portfolio'
import ProjectsPage from './Components/ProjectsPage.jsx'
import ProjectDetails from './Components/ProjectDetails.jsx'
import OpenSourcePage from './Components/OpenSourcePage.jsx'
import SmoothCursor from './Components/SmoothCursor'
import { PageTransitionProvider } from './Components/PageTransitionContext'
import { LiquidTransitionOverlay } from './Components/LiquidTransitionOverlay'
import { useLenis } from './hooks/useLenis'

function AppRoutes() {
  useLenis() // Enable smooth scrolling application-wide

  return (
    <PageTransitionProvider>
      <SmoothCursor />
      <LiquidTransitionOverlay />
      <LayoutGroup>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
          <Route path='/open-source' element={<OpenSourcePage />} />
        </Routes>
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
