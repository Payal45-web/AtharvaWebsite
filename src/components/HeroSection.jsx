import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb4a0b7405c939dd944b35_02.png",
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
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb349d55e5eaeb85363733_big-product-02.png",
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
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb34c5f67961724fc12d83_big-product-03.png",
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
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb347cbebb7a59ea258205_big-product-04.png",
      specs: [
        { label: "Product type:", value: "Hard faces" },
        { label: "Chuck Capacity:", value: "Nuts & bolts" },
        { label: "Power Output:", value: "175 W" }
      ],
      link: "/product/ratchet-spanner-and-faced-hammer"
    }
  ];

  // Consistent yellow-black theme colors
  const themeColors = {
    primary: '#FBBF24', // Yellow-400
    secondary: '#FEF3C7', // Yellow-100
    accent: '#F59E0B', // Yellow-500
    dark: '#111827' // Gray-900
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
    }, 5000);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-6"
      style={{
        background: `radial-gradient(circle at 80% 20%, ${themeColors.secondary}55, transparent 40%), 
                    radial-gradient(circle at 20% 80%, ${themeColors.secondary}70, transparent 50%), 
                    radial-gradient(circle at 50% 50%, white, white)`
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute rounded-full blur-3xl opacity-20"
          initial={{ x: "-20%", y: "-20%" }}
          animate={{ 
            x: "0%", 
            y: "0%",
            backgroundColor: themeColors.primary
          }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{ width: '40%', height: '40%', top: '20%', left: '10%' }}
        />
        <motion.div 
          className="absolute rounded-full blur-3xl opacity-10"
          initial={{ x: "20%", y: "20%" }}
          animate={{ 
            x: "0%", 
            y: "0%",
            backgroundColor: themeColors.accent
          }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          style={{ width: '30%', height: '30%', bottom: '20%', right: '10%' }}
        />
      </div>

      {/* Main container with max width for content alignment */}
      <div className="container mx-auto max-w-5xl relative z-20">
        {/* Premium badge at top */}
        <div className="flex justify-center mb-6">
          <div 
            className="relative px-4 py-1 rounded-full backdrop-blur-sm bg-white/60 shadow-sm"
            style={{ border: `1px solid ${themeColors.secondary}` }}
          >
            <span className="text-xs font-medium tracking-widest uppercase" 
                  style={{ color: themeColors.accent }}>
              Premium Quality Tools
            </span>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col items-center">
          {/* Main title with animations */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-center uppercase tracking-tighter mb-10 md:mb-12"
            style={{ 
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '1px rgba(0,0,0,0.2)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            key={`title-${currentSlide}`}
          >
            <span className="relative inline-block">
              {activeSlide.title}
              <motion.span 
                className="absolute -z-10 left-0 bottom-0 w-full h-1/4"
                style={{ backgroundColor: themeColors.primary, opacity: 0.3 }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </span>
          </motion.h1>
          
          {/* Products showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mx-auto">
            {/* Left column - Product info */}
            <motion.div 
              className="space-y-4"
              key={`info-${currentSlide}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">{activeSlide.productTitle}</h2>
              
              <div className="flex items-end gap-3">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 line-through">{activeSlide.comparePrice}</span>
                  <span className="text-2xl font-bold">{activeSlide.price}</span>
                </div>
                <div 
                  className="rounded-lg px-2 py-1 text-sm font-bold"
                  style={{ backgroundColor: themeColors.primary }}
                >
                  {activeSlide.discount}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">{activeSlide.description}</p>
              
              <div className="pt-3">
                <button 
                  className="group relative overflow-hidden px-6 py-2 rounded-full font-medium text-white transition-all duration-300"
                  style={{ backgroundColor: themeColors.dark }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Product
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            
            {/* Middle column - Product image */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-64 w-full flex items-center justify-center">
                {/* Product image with circular glow */}
                <motion.div 
                  className="absolute w-56 h-56 rounded-full"
                  style={{ 
                    background: `radial-gradient(circle, ${themeColors.secondary} 0%, rgba(255,255,255,0) 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.img
                  key={`image-${currentSlide}`}
                  src={activeSlide.image}
                  alt={activeSlide.productTitle}
                  className="h-64 object-contain relative z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              {/* Navigation controls */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button 
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:shadow-md"
                  style={{ borderColor: themeColors.primary }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 h-2 rounded-full ${
                        currentSlide === index ? 'w-6' : 'w-2 bg-gray-300'
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
                  className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:shadow-md"
                  style={{ borderColor: themeColors.primary }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Right column - Product specs */}
            <motion.div 
              className="space-y-4"
              key={`specs-${currentSlide}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="rounded-xl p-4 space-y-3 backdrop-blur-sm bg-white/50"
                style={{ border: `1px solid ${themeColors.secondary}` }}
              >
                <h3 className="font-bold text-base flex items-center gap-2">
                  <span 
                    className="w-2 h-6 rounded-full inline-block"
                    style={{ backgroundColor: themeColors.primary }}
                  ></span>
                  Specifications
                </h3>
                
                {activeSlide.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between pb-2 text-sm">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={activeSlide.link}
                className="group flex items-center justify-between w-full p-3 rounded-xl bg-white/80 border transition-all hover:shadow-md"
                style={{ borderColor: themeColors.secondary }}
              >
                <span className="font-medium text-sm">View More Products</span>
                <span 
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ backgroundColor: themeColors.dark }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80">
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: themeColors.secondary }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       style={{ color: themeColors.accent }}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium">Free express shipping</p>
                  <p className="text-xs text-gray-500">30-day money-back guarantee</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;