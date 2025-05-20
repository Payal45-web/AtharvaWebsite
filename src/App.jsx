
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCategoryDetail from './pages/ProductsCategoryDetail';
import ProductDetail from './pages/ProductsDetail';

// Custom hook for page transitions
const usePageTransition = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };
  
  const exitComplete = () => {
    window.scrollTo(0, 0);
    setIsAnimating(false);
  };
  
  return {
    pageTransition,
    exitComplete,
    isAnimating,
    setIsAnimating
  };
};

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Use custom page transition hook
  const { pageTransition, exitComplete } = usePageTransition();
  
  // Initial page loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading animation
    
    return () => clearTimeout(timer);
  }, []);
  
  // Render loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-medium text-gray-800">Loading</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Main content with top padding to account for fixed navbar */}
      <main className="flex-grow pt-16">
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<div className="container mx-auto px-4 py-24"><h1 className="text-3xl font-bold">About Us</h1></div>} />
          <Route path="/services" element={<div className="container mx-auto px-4 py-24"><h1 className="text-3xl font-bold">Services</h1></div>} />
          <Route path="/industries" element={<div className="container mx-auto px-4 py-24"><h1 className="text-3xl font-bold">Industries</h1></div>} />
          <Route path="/contact-us" element={<div className="container mx-auto px-4 py-24"><h1 className="text-3xl font-bold">Contact Us</h1></div>} />
          
          {/* Product routes */}
          <Route path="/category/:categorySlug" element={<ProductCategoryDetail />} />
          <Route path="/product/:productSlug" element={<ProductDetail />} />
          
          {/* 404 route */}
          <Route path="*" element={
            <div className="container mx-auto px-4 py-24 text-center">
              <h1 className="text-5xl font-bold mb-6">404</h1>
              <h2 className="text-2xl mb-4">Page Not Found</h2>
              <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
              <a href="/" className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors">
                Go Home
              </a>
            </div>
          } />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;