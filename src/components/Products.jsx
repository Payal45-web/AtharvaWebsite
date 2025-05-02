import React, { useMemo } from 'react';
import productsData from './Products.json';

// Import all images directly - Keep these imports exactly as they are
import vp100Image from '../assets/1.jpg';
import vp300Image from '../assets/2.jpg';
import vp930Image from '../assets/3.jpg';
import vu500Image from '../assets/4.jpg';
import gd5BatteryImage from '../assets/5.jpg';
import attixImage from '../assets/6.webp';
import t40wImage from '../assets/7.webp';
import vhb436Image from '../assets/8.webp';
import sc100Image from '../assets/9.jpg';
import sc250Image from '../assets/10.jpg';
import sc8000Image from '../assets/11.jpg';
import sw750Image from '../assets/12.jpg';
import sw8000Image from '../assets/13.webp';
import mc2cImage from '../assets/14.webp';
import mh5mImage from '../assets/15.webp';
import libertyImage from '../assets/16.png';
import railsImage from '../assets/17.webp';
import balancersImage from '../assets/18.webp';
import qxSeriesImage from '../assets/19.webp';
import uryuImage from '../assets/20.webp';

// Create an image mapping object
const imageMapping = {
  1: vp100Image,
  2: vp300Image,
  3: vp930Image,
  4: vu500Image,
  5: gd5BatteryImage,
  6: attixImage,
  7: t40wImage,
  8: vhb436Image,
  9: sc100Image,
  10: sc250Image,
  11: sc8000Image,
  12: sw750Image,
  13: sw8000Image,
  14: mc2cImage,
  15: mh5mImage,
  16: libertyImage,
  17: railsImage,
  18: balancersImage,
  19: qxSeriesImage,
  20: uryuImage
};

// Helper function to get image based on product ID
const getProductImage = (productId) => {
  return imageMapping[productId] || null;
};

// Theme colors to match hero section
const themeColors = {
  primary: '#FBBF24', // Yellow-400
  secondary: '#FEF3C7', // Yellow-100
  accent: '#F59E0B', // Yellow-500
  dark: '#111827' // Gray-900
};

const Products = () => {
  // Get unique categories from the product data
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    return uniqueCategories;
  }, []);

  // Get one product from each category
  const featuredProducts = useMemo(() => {
    return categories.map(category => {
      // Find the first product in each category
      return productsData.find(product => product.category === category);
    });
  }, [categories]);

  return (
    <section className="py-16 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 90% 10%, ${themeColors.secondary}40, transparent 30%),
                    radial-gradient(circle at 10% 90%, ${themeColors.secondary}40, transparent 30%),
                    white`
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: themeColors.primary }}></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: themeColors.accent }}></div>
      
      <div className="container max-w-5xl mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-3">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-medium tracking-wide" 
                  style={{ backgroundColor: themeColors.secondary, color: themeColors.accent }}>
              PREMIUM EQUIPMENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Discover Our Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our comprehensive range of professional-grade industrial tools and equipment designed to elevate your productivity</p>
        </div>
        
        {/* Display the first 4 categories in a grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="group">
              <div className="relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <img 
                    src={getProductImage(product.id)} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-medium" 
                       style={{ backgroundColor: themeColors.primary }}>
                    {product.category}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="font-medium text-sm flex justify-between items-center">
                      <span>View category</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
                  <div className="flex items-baseline">
                    <span className="font-medium text-base">$ {product.price} USD</span>
                    {product.comparePrice && (
                      <span className="ml-2 text-gray-500 line-through text-xs">$ {product.comparePrice} USD</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Display the remaining categories in a different layout */}
        {featuredProducts.length > 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featuredProducts.slice(4, 6).map((product) => (
                <div key={product.id} className="group">
                  <div className="relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <img 
                        src={getProductImage(product.id)} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      <div className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-medium" 
                           style={{ backgroundColor: themeColors.primary }}>
                        {product.category}
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <a href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="font-medium text-sm flex justify-between items-center">
                          <span>View category</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
                      <div className="flex items-baseline">
                        <span className="font-medium text-base">$ {product.price} USD</span>
                        {product.comparePrice && (
                          <span className="ml-2 text-gray-500 line-through text-xs">$ {product.comparePrice} USD</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Last category feature */}
            {featuredProducts.slice(6, 7).map((product) => (
              <div key={product.id} className="col-span-1 flex flex-col h-full">
                <div className="flex-grow h-full rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0">
                    <img 
                      src={getProductImage(product.id)} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900/90"></div>
                  </div>
                  
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded text-xs font-medium mb-4" 
                            style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}>
                        {product.category}
                      </span>
                      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                      <p className="text-white/80 text-sm mb-4">Precision engineered for professional performance and reliability</p>
                      <p className="mb-6">
                        <span className="text-xl font-medium">$ {product.price} USD</span>
                        {product.comparePrice && (
                          <span className="ml-2 text-gray-300 line-through text-sm">$ {product.comparePrice} USD</span>
                        )}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <a href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="group relative overflow-hidden rounded-lg px-4 py-2 font-medium text-center transition-all duration-300"
                        style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          View Category
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* View all categories button */}
        <div className="mt-12 text-center">
          <a 
            href="/shop"
            className="group relative overflow-hidden px-8 py-3 rounded-full font-medium text-white inline-flex items-center transition-all duration-300"
            style={{ backgroundColor: themeColors.dark }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View All Categories
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span 
              className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              style={{ backgroundColor: themeColors.accent }}
            ></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;