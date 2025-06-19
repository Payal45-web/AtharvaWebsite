import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  
  const slides = [
    {
      title: "POWER TOOL",
      productTitle: "Ingco power tools and hand tools cordless",
      discount: "30% off",
      price: "$1,245.00 USD",
      comparePrice: "$1,420.00 USD",
      description: "Explore the art of creation with confidence, equipped with the finest tools and accessories handpicked for the.",
      image: img1,
      specs: [
        { label: "Product type:", value: "Rotary drill" },
        { label: "Chuck Capacity:", value: "0-6.5mm" },
        { label: "Power Output:", value: "450 W" }
      ],
      link: "/product/ingco-power-tools-and-hand-tools-cordless"
    },
    {
      title: "FLATHEAD TOOL",
      productTitle: "YATO electrician motor cutter",
      discount: "10% off",
      price: "$1,209.00 USD",
      comparePrice: "$1,500.00 USD",
      description: "Designed for use by electricians and professionals working with electrical installations.",
      image: img2,
      specs: [
        { label: "Product type:", value: "Wire Cutter" },
        { label: "Chuck Capacity:", value: "Diameter" },
        { label: "Power Output:", value: "184 W" }
      ],
      link: "/product/yato-electrician-motor-cutter"
    },
    {
      title: "PLUMBING TOOL",
      productTitle: "Corded electric rotary machine",
      discount: "15% off",
      price: "$189.00 USD",
      comparePrice: "$230.00 USD",
      description: "The cord provides a continuous power supply, eliminating the need for batteries or recharging.",
      image: img3,
      specs: [
        { label: "Product type:", value: "lubrication" },
        { label: "Chuck Capacity:", value: "0-3.5mm" },
        { label: "Power Output:", value: "160 W" }
      ],
      link: "/product/corded-electric-rotary-machine"
    },
    {
      title: "HAND TOOL",
      productTitle: "Ratchet spanner and faced hammer",
      discount: "25% off",
      price: "$240.00 USD",
      comparePrice: "$430.00 USD",
      description: "Depending on the model, faced hammers come with changeable faces of different hardness or materials for tasks.",
      image: img4,
      specs: [
        { label: "Product type:", value: "Hard faces" },
        { label: "Chuck Capacity:", value: "Nuts & bolts" },
        { label: "Power Output:", value: "175 W" }
      ],
      link: "/product/ratchet-spanner-and-faced-hammer"
    }
  ];

  // Enhanced theme colors with additional accent variants
  const themeColors = {
    primary: '#FBBF24', // Yellow-400
    primaryLight: '#FEF3C7', // Yellow-100
    primaryDark: '#D97706', // Yellow-600
    accent: '#F59E0B', // Yellow-500
    dark: '#111827', // Gray-900
    darkAlpha: 'rgba(17, 24, 39, 0.8)' // Gray-900 with alpha
  };

  // Reset and start the interval timer when the current slide changes
  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [currentSlide]);
  
  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 6000); // Slightly longer interval for better user experience
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    // Clear animation lock after transition completes
    setTimeout(() => setIsAnimating(false), 750);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => setIsAnimating(false), 750);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => setIsAnimating(false), 750);
    startAutoScroll();
  };

  const activeSlide = slides[currentSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
      style={{
        background: `radial-gradient(circle at 80% 20%, ${themeColors.primaryLight}55, transparent 40%), 
                    radial-gradient(circle at 20% 80%, ${themeColors.primaryLight}70, transparent 50%), 
                    radial-gradient(circle at 50% 50%, white, white)`
      }}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute rounded-full blur-3xl opacity-20"
          initial={{ x: "-20%", y: "-20%" }}
          animate={{ 
            x: "0%", 
            y: "0%",
            backgroundColor: themeColors.primary
          }}
          transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          style={{ width: '45%', height: '45%', top: '15%', left: '10%' }}
        />
        <motion.div 
          className="absolute rounded-full blur-3xl opacity-15"
          initial={{ x: "20%", y: "20%" }}
          animate={{ 
            x: "0%", 
            y: "0%",
            backgroundColor: themeColors.accent
          }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          style={{ width: '35%', height: '35%', bottom: '15%', right: '10%' }}
        />
        <motion.div 
          className="absolute rounded-full blur-3xl opacity-10"
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: 1.1,
            backgroundColor: themeColors.primaryDark
          }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
          style={{ width: '25%', height: '25%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Main container with increased max width for larger content */}
      <div className="container mx-auto max-w-6xl relative z-20">
        {/* Enhanced premium badge at top */}
        <div className="flex justify-center mb-8">
          <motion.div 
            className="relative px-6 py-2 rounded-full backdrop-blur-sm bg-white/60 shadow-md"
            style={{ border: `1px solid ${themeColors.primaryLight}` }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase" 
                  style={{ color: themeColors.accent }}>
              Premium Quality Tools
            </span>
          </motion.div>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col items-center">
          {/* Enhanced main title with dark fill and lower z-index for image overlay */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-center uppercase tracking-tighter mb-36 md:mb-40 relative z-0"
            style={{ 
              color: themeColors.dark,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            key={`title-${currentSlide}`}
          >
            <span className="relative inline-block">
              {activeSlide.title}
              <motion.span 
                className="absolute -z-10 left-0 bottom-0 w-full h-1/3"
                style={{ backgroundColor: themeColors.primary, opacity: 0.4 }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </motion.h1>
          
          {/* Enhanced products showcase with larger image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 w-full mx-auto">
            {/* Left column - Product info (span 3 columns) */}
            <motion.div 
              className="md:col-span-3 space-y-5"
              key={`info-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight">{activeSlide.productTitle}</h2>
              
              <div className="flex items-end gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-through">{activeSlide.comparePrice}</span>
                  <span className="text-3xl font-medium">{activeSlide.price}</span>
                </div>
                <div 
                  className="rounded-lg px-3 py-1.5 text-sm font-medium"
                  style={{ backgroundColor: themeColors.primary }}
                >
                  {activeSlide.discount}
                </div>
              </div>
              
              <p className="text-gray-600 text-base leading-relaxed">{activeSlide.description}</p>
              
              <div className="pt-4">
                <button 
                  className="group relative overflow-hidden px-8 py-3 rounded-full font-medium text-white transition-all duration-300"
                  style={{ backgroundColor: themeColors.dark }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Product
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span 
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ backgroundColor: themeColors.accent }}
                  ></span>
                </button>
              </div>
            </motion.div>
            
            {/* Middle column - Product image (span 6 columns for larger display) */}
            <div className="md:col-span-6 flex flex-col items-center justify-center">
              <div className="relative h-96 w-full flex items-center justify-center -mt-24">
                {/* Enhanced product image with better circular glow */}
                <motion.div 
                  className="absolute w-80 h-80 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, ${themeColors.primaryLight} 0%, rgba(255,255,255,0) 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.img
                  key={`image-${currentSlide}`}
                  src={activeSlide.image}
                  alt={activeSlide.productTitle}
                  className="h-96 object-contain relative z-20" // Higher z-index to overlay the heading
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Added subtle floating particles around product */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-yellow-200 opacity-60 z-10"
                    style={{ 
                      width: Math.random() * 8 + 4, 
                      height: Math.random() * 8 + 4 
                    }}
                    initial={{ 
                      x: Math.random() * 200 - 100, 
                      y: Math.random() * 200 - 100,
                      opacity: 0.2
                    }}
                    animate={{ 
                      x: Math.random() * 200 - 100, 
                      y: Math.random() * 200 - 100,
                      opacity: 0.6
                    }}
                    transition={{ 
                      duration: Math.random() * 5 + 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </div>
              
              {/* Enhanced navigation controls */}
              <div className="flex items-center justify-center gap-6 mt-8">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:shadow-lg group"
                  style={{ borderColor: themeColors.primary }}
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                
                <div className="flex gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 h-2.5 rounded-full ${
                        currentSlide === index ? 'w-8' : 'w-2.5 bg-gray-300'
                      }`}
                      style={{ 
                        backgroundColor: currentSlide === index ? themeColors.primary : undefined
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-all hover:shadow-lg group"
                  style={{ borderColor: themeColors.primary }}
                >
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right column - Product specs (span 3 columns) */}
            <motion.div 
              className="md:col-span-3 space-y-5"
              key={`specs-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
            >
              <div 
                className="rounded-xl p-5 space-y-4 backdrop-blur-sm bg-white/50 shadow-sm"
                style={{ border: `1px solid ${themeColors.primaryLight}` }}
              >
                <h3 className="font-medium text-lg flex items-center gap-2">
                  <span 
                    className="w-2 h-8 rounded-full inline-block"
                    style={{ backgroundColor: themeColors.primary }}
                  ></span>
                  Specifications
                </h3>
                
                {activeSlide.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between pb-3 text-base border-b border-gray-100 last:border-0">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={activeSlide.link}
                className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/80 border shadow-sm transition-all hover:shadow-md"
                style={{ borderColor: themeColors.primaryLight }}
              >
                <span className="font-medium text-base">View More Products</span>
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ backgroundColor: themeColors.dark }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 shadow-sm">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: themeColors.primaryLight }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       style={{ color: themeColors.accent }}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Free express shipping</p>
                  <p className="text-xs text-gray-500">30-day money-back guarantee</p>
                </div>
              </div>
              
              {/* Added trust badges */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/80 shadow-sm">
                <div className="flex flex-col items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       style={{ color: themeColors.dark }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span className="text-xs mt-1">Secure</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       style={{ color: themeColors.dark }}>
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span className="text-xs mt-1">24/7</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       style={{ color: themeColors.dark }}>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  </svg>
                  <span className="text-xs mt-1">Warranty</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative bottom elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
        <div className="h-2" style={{ backgroundColor: themeColors.primary, opacity: 0.3 }}></div>
      </div>
    </section>
  );
};

export default HeroSection;