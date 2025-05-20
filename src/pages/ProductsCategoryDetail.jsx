
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../components/Products.json';

const ProductCategoryDetail = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  
  // Convert category slug to actual category name
  const getCategoryFromSlug = (slug) => {
    // Convert slug like "vacuum-cleaner" to "Vacuum Cleaner"
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const categoryName = getCategoryFromSlug(categorySlug);
  
  // Filter products by category
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => 
      product.category.toLowerCase() === categoryName.toLowerCase()
    );
  }, [categoryName]);
  
  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Handle page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  
  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categorySlug]);
  
  // Navigate to product detail page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  
  // Theme colors to match the rest of the site
  const themeColors = {
    primary: '#FBBF24', // Yellow-400
    secondary: '#FEF3C7', // Yellow-100
    accent: '#F59E0B', // Yellow-500
    dark: '#111827' // Gray-900
  };
  
  // Helper function to get image path based on product ID (handles different file extensions)
  const getProductImagePath = (productId) => {
    return `/assets/${productId}.jpg`; // Default to jpg, but would need proper handling for various extensions
  };
  
  if (filteredProducts.length === 0) {
    return (
      <div className="container max-w-7xl mx-auto px-4 py-24">
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-8">We couldn't find any products in the category "{categoryName}".</p>
          <button 
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors"
          >
            Browse All Products
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Category Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{categoryName}</h1>
        <p className="text-gray-600 max-w-3xl">
          Browse our selection of high-quality {categoryName.toLowerCase()} designed for professional and industrial use.
        </p>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {currentProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product.id)}>
            <div className="relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img 
                  src={getProductImagePath(product.id)} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded text-xs font-medium" 
                     style={{ backgroundColor: themeColors.primary }}>
                  {product.category}
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="font-medium text-sm flex justify-between items-center">
                    <span>View details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2" title={product.description}>
                  {product.description}
                </p>
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
      
      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => {
              // Show limited number of page buttons
              if (
                index === 0 || 
                index === totalPages - 1 || 
                (index >= currentPage - 2 && index <= currentPage + 1)
              ) {
                return (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === index + 1 
                        ? 'bg-yellow-400 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              }
              
              // Show ellipsis for skipped pages
              if (index === 1 && currentPage > 3) {
                return <span key="start-ellipsis" className="px-3 py-2">...</span>;
              }
              
              if (index === totalPages - 2 && currentPage < totalPages - 2) {
                return <span key="end-ellipsis" className="px-3 py-2">...</span>;
              }
              
              return null;
            })}
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
      
      {/* Related Categories Section */}
      <div className="mt-16 pt-12 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-6">You might also be interested in</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* This would be dynamically generated based on related categories */}
          <a href="/category/vacuum-cleaners" className="p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors text-center">
            <span className="font-medium">Vacuum Cleaners</span>
          </a>
          <a href="/category/scrubber-dryers" className="p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors text-center">
            <span className="font-medium">Scrubber Dryers</span>
          </a>
          <a href="/category/sweepers" className="p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors text-center">
            <span className="font-medium">Sweepers</span>
          </a>
          <a href="/category/high-pressure-washers" className="p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors text-center">
            <span className="font-medium">High Pressure Washers</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryDetail;