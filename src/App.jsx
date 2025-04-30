import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

// Custom hook for page transitions (you need to implement this)
const usePageTransition = () => {
  return {
    pageTransition: {},
    exitComplete: () => {}
  }
}

function App() {
  const location = useLocation()
  
  // Use custom page transition hook
  const { pageTransition, exitComplete } = usePageTransition()
  
  // Initial page loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading animation
    
    return () => clearTimeout(timer)
  }, [])

  return (
      (
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      )
  )
}

export default App