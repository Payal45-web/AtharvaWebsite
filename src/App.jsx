import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductCategoryDetail from './pages/ProductsCategoryDetail'
import ProductDetail from './pages/ProductsDetail'

// Custom hook for page transitions (you need to implement this)
const usePageTransition = () => {
  return {
    pageTransition: {},
    exitComplete: () => {}
  }
}

function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          
          {/* Product routes */}
          <Route path="/category/:categorySlug" element={<ProductCategoryDetail />} />
          <Route path="/product/:productSlug" element={<ProductDetail />} />
          
          {/* 404 route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App