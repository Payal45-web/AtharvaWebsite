import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../components/Products.json';

// Import all images directly
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

const ProductCategoryDetail = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [viewMode, setViewMode] = useState('grid');

  // Get all categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    return uniqueCategories;
  }, []);

  // Get featured products (one from each other category)
  const featuredProducts = useMemo(() => {
    return categories
      .filter(cat => cat.toLowerCase().replace(/\s+/g, '-') !== categorySlug)
      .map(cat => {
        return productsData.find(product => product.category === cat);
      });
  }, [categories, categorySlug]);

  useEffect(() => {
    // Convert slug back to category name format
    let matchedCategory = '';
    
    // Try to find a direct match first
    const directMatch = categories.find(cat => 
      cat.toLowerCase().replace(/\s+/g, '-') === categorySlug
    );
    
    if (directMatch) {
      matchedCategory = directMatch;
    } else {
      // Try a more flexible match
      const formattedSlug = categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        
      const closestMatch = categories.find(cat => 
        cat.toLowerCase().includes(formattedSlug.toLowerCase())
      );
      
      if (closestMatch) {
        matchedCategory = closestMatch;
      }
    }
    
    setCategory(matchedCategory);
    
    // Filter products by the matched category
    const categoryProducts = productsData.filter(product => product.category === matchedCategory);
    setProducts(categoryProducts);
  }, [categorySlug, categories]);

  // Sort products based on selected option
  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    
    switch(sortOption) {
      case 'price-low-high':
        return sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case 'price-high-low':
        return sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      case 'name-a-z':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-z-a':
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [products, sortOption]);

  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <div className="animate-spin w-12 h-12 mb-4 border-4 border-t-transparent rounded-full mx-auto" style={{ borderColor: `${themeColors.primary} transparent ${themeColors.accent} ${themeColors.primary}` }}></div>
          <h2 className="text-xl font-medium">Loading products...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-8 bg-gray-50">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-white"
        style={{
          background: `radial-gradient(circle at 85% 15%, ${themeColors.secondary}50, transparent 25%),
                      radial-gradient(circle at 15% 85%, ${themeColors.secondary}50, transparent 25%),
                      white`
        }}>
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: themeColors.primary }}></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: themeColors.accent }}></div>
        
        <div className="container max-w-6xl mx-auto px-8 py-12 md:py-16 relative z-10">
          <div className="flex flex-col items-start">
            <nav className="flex mb-4 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-1">
                <li><a href="/" className="text-gray-500 hover:text-gray-700">Home</a></li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><a href="/shop" className="text-gray-500 hover:text-gray-700">Products</a></li>
                <li className="flex items-center">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li><span className="text-gray-900 font-medium">{category}</span></li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{category}</h1>
            <p className="text-gray-600 max-w-2xl">
              {products.length} products available in this category. Explore our range of professional {category.toLowerCase()} designed for industrial use.
            </p>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className="container max-w-6xl mx-auto px-8 py-8">
        {/* Sort and view options */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select 
              className="border border-gray-300 rounded-md text-sm px-3 py-1.5"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">View:</span>
            <button 
              className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'bg-white hover:bg-gray-100'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Products grid or list */}
        {products.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">We couldn't find any products in this category.</p>
            <a 
              href="/shop" 
              className="inline-block px-4 py-2 rounded-md font-medium"
              style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}
            >
              View all products
            </a>
          </div>
        ) : (
          viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <img 
                        src={getProductImage(product.id)} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {product.comparePrice && (
                        <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium" 
                            style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}>
                          Sale
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <a href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="font-medium text-sm flex justify-between items-center">
                          <span>View details</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className="font-medium text-base">$ {product.price} USD</span>
                        {product.comparePrice && (
                          <span className="ml-2 text-gray-500 line-through text-xs">$ {product.comparePrice} USD</span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{product.description.substring(0, 80)}...</p>
                    </div>
                    
                    <div className="px-4 pb-4">
                      <button 
                        className="w-full py-2 rounded text-center font-medium transition-colors" 
                        style={{ backgroundColor: themeColors.dark, color: 'white' }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="md:w-1/4 relative">
                    <img 
                      src={getProductImage(product.id)} 
                      alt={product.name} 
                      className="w-full h-48 md:h-full object-cover"
                    />
                    {product.comparePrice && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium" 
                          style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}>
                        Sale
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-3/4 p-6 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                      <div className="flex items-baseline mb-3">
                        <span className="text-lg font-medium">$ {product.price} USD</span>
                        {product.comparePrice && (
                          <span className="ml-2 text-gray-500 line-through text-sm">$ {product.comparePrice} USD</span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="text-sm text-gray-500 mb-4">
                        <h4 className="font-medium text-gray-700 mb-1">Specifications:</h4>
                        <p>{product.specification}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a 
                        href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="px-4 py-2 rounded font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                      >
                        View Details
                      </a>
                      <button 
                        className="px-4 py-2 rounded font-medium transition-colors" 
                        style={{ backgroundColor: themeColors.dark, color: 'white' }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      
      {/* Featured categories section */}
      <div className="bg-white py-12 mt-12">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Explore Other Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of industrial equipment for all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="group">
                <a href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} 
                   className="block relative rounded-lg overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img 
                    src={getProductImage(product.id)} 
                    alt={product.category} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold mb-1">{product.category}</h3>
                      <span className="inline-block mt-2 px-3 py-1 rounded text-sm transition-colors"
                            style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}>
                        Explore
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
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
      </div>
    </div>
  );
};

export default ProductCategoryDetail;