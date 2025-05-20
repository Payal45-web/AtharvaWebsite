
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../components/Products.json';

const ProductDetail = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const productId = parseInt(productSlug, 10);
    
    if (isNaN(productId)) {
      // Handle invalid product ID
      setIsLoading(false);
      return;
    }
    
    const foundProduct = productsData.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products (same category, excluding current product)
      const related = productsData
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4); // Limit to 4 related products
      
      setRelatedProducts(related);
    }
    
    setIsLoading(false);
  }, [productSlug]);
  
  // Helper function to get image path based on product ID
  const getProductImagePath = (productId) => {
    return `/assets/${productId}.jpg`; // Default to jpg, but would need proper handling for various extensions
  };
  
  // Handle category click
  const handleCategoryClick = (category) => {
    // Convert category name to slug
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${categorySlug}`);
  };
  
  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container max-w-6xl mx-auto px-4 py-24">
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">We couldn't find the product you're looking for.</p>
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
    <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Breadcrumb */}
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-sm text-gray-500 hover:text-yellow-400">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <button 
                  onClick={() => handleCategoryClick(product.category)}
                  className="text-sm text-gray-500 hover:text-yellow-400 ml-1 md:ml-2"
                >
                  {product.category}
                </button>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700 ml-1 md:ml-2">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <div className="aspect-square relative overflow-hidden">
            <img 
              src={getProductImagePath(product.id)} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-medium bg-yellow-400 text-gray-900">
              {product.category}
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold">$ {product.price} USD</span>
            {product.comparePrice && (
              <span className="ml-2 text-gray-500 line-through text-base">$ {product.comparePrice} USD</span>
            )}
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="font-medium mb-2">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          {product.specification && (
            <div className="mb-6">
              <h2 className="font-medium mb-2">Specifications</h2>
              <p className="text-gray-700">{product.specification}</p>
            </div>
          )}
          
          <div className="mt-auto">
            <button className="w-full py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-colors mb-3">
              Request Quote
            </button>
            <button className="w-full py-3 bg-gray-100 text-gray-900 font-medium rounded-md hover:bg-gray-200 transition-colors">
              Download Datasheet
            </button>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div 
                key={relatedProduct.id} 
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={getProductImagePath(relatedProduct.id)} 
                    alt={relatedProduct.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-base mb-1 truncate">{relatedProduct.name}</h3>
                  <div className="flex items-baseline">
                    <span className="font-medium text-base">$ {relatedProduct.price} USD</span>
                    {relatedProduct.comparePrice && (
                      <span className="ml-2 text-gray-500 line-through text-xs">$ {relatedProduct.comparePrice} USD</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;