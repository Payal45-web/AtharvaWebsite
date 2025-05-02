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

const ProductDetail = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product based on the slug
    const foundProduct = productsData.find(
      p => p.name.toLowerCase().replace(/\s+/g, '-') === productSlug
    );
    
    setProduct(foundProduct || null);
    setLoading(false);
    // Reset state when product changes
    setQuantity(1);
    setActiveTab('description');
  }, [productSlug]);

  // Get related products (other products from the same category)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    
    return productsData
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Calculate savings if there's a compare price
  const calculateSavings = () => {
    if (!product?.comparePrice) return null;
    
    const originalPrice = parseFloat(product.comparePrice);
    const currentPrice = parseFloat(product.price);
    const savingsAmount = originalPrice - currentPrice;
    const savingsPercentage = Math.round((savingsAmount / originalPrice) * 100);
    
    return {
      amount: savingsAmount.toFixed(2),
      percentage: savingsPercentage
    };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <div className="animate-spin w-12 h-12 mb-4 border-4 border-t-transparent rounded-full mx-auto" style={{ borderColor: `${themeColors.primary} transparent ${themeColors.accent} ${themeColors.primary}` }}></div>
          <h2 className="text-xl font-medium">Loading product details...</h2>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container max-w-6xl mx-auto px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <div className="flex justify-center gap-4">
              <a 
                href="/shop" 
                className="px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                All Products
              </a>
              <a 
                href="/" 
                className="px-6 py-2 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: themeColors.dark }}
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const savings = calculateSavings();

  return (
    <div className="min-h-screen mt-16 bg-gray-50">
      {/* Product hero section */}
      <div className="bg-white"
        style={{
          background: `radial-gradient(circle at 85% 15%, ${themeColors.secondary}50, transparent 25%),
                      radial-gradient(circle at 15% 85%, ${themeColors.secondary}50, transparent 25%),
                      white`
        }}>
        <div className="container max-w-6xl mx-auto px-4 xl:px-0 py-8">
          {/* Breadcrumb navigation */}
          <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
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
              <li>
                <a 
                  href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-gray-500 hover:text-gray-700"
                >
                  {product.category}
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li><span className="text-gray-900 font-medium">{product.name}</span></li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Product image column */}
            <div className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-square mb-4">
                <img 
                  src={getProductImage(product.id)} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              {/* Product badges */}
              {savings && (
                <div 
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}
                >
                  Save {savings.percentage}%
                </div>
              )}
              
              <div className="text-center p-4 rounded-lg bg-gray-100 mt-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Tip:</span> Click on the image to zoom
                </p>
              </div>
            </div>
            
            {/* Product info column */}
            <div className="flex flex-col">
              <div>
                <div className="inline-block px-3 py-1 rounded text-xs font-medium mb-2 bg-gray-100">
                  {product.category}
                </div>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-medium">$ {product.price} USD</span>
                    {product.comparePrice && (
                      <span className="ml-3 text-gray-400 line-through">$ {product.comparePrice} USD</span>
                    )}
                  </div>
                  
                  {savings && (
                    <p className="text-sm mt-1" style={{ color: themeColors.accent }}>
                      You save: ${savings.amount} ({savings.percentage}% off)
                    </p>
                  )}
                </div>
                
                <div className="prose prose-sm mb-6">
                  <p>{product.description}</p>
                </div>
              </div>
              
              {/* Product actions */}
              <div className="mt-auto">
                {/* MODIFIED: Replaced Buy Now and Add to Cart with Contact Info button */}
                <div className="flex">
                  <button 
                    className="w-full py-3 px-6 rounded-lg font-medium text-white transition-all flex items-center justify-center"
                    style={{ backgroundColor: themeColors.dark }}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us For More Information
                  </button>
                </div>
                
                {/* Product meta info */}
                <div className="mt-8 space-y-4">
                  <div className="flex gap-2 items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Free shipping on orders over $500</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">30-day money-back guarantee</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Secure checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product tabs section */}
      <div className="container max-w-6xl mx-auto px-4 xl:px-0 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Tabs navigation */}
          <div className="flex border-b border-gray-200">
            <button 
              className={`py-4 px-6 font-medium text-sm transition-colors ${activeTab === 'description' ? 'border-b-2 border-current text-black' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm transition-colors ${activeTab === 'specifications' ? 'border-b-2 border-current text-black' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={`py-4 px-6 font-medium text-sm transition-colors ${activeTab === 'shipping' ? 'border-b-2 border-current text-black' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping & Returns
            </button>
          </div>
          
          {/* Tab content */}
          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-lg font-medium mb-4">Product Description</h3>
                <p className="mb-4">{product.description}</p>
                <p>
                  Our {product.name} is designed for professional use, offering excellent performance and reliability.
                  Each product undergoes rigorous quality testing to ensure it meets the high standards our customers expect.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap font-mono">{product.specification}</pre>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium mb-2">Product Details</h4>
                  <ul className="space-y-2 text-sm">
                    <li><span className="font-medium">Product ID:</span> {product.id}</li>
                    <li><span className="font-medium">Category:</span> {product.category}</li>
                    <li><span className="font-medium">Warranty:</span> 1 Year Manufacturer Warranty</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Delivery Options</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We offer various shipping options to meet your needs:
                    </p>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><span className="font-medium">Standard Shipping:</span> 3-5 business days</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><span className="font-medium">Express Shipping:</span> 1-2 business days</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><span className="font-medium">Free Shipping:</span> On orders over $500</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Returns Policy</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We want you to be completely satisfied with your purchase. If you're not happy with your order, here's our returns policy:
                    </p>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>30-day money-back guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Returns must be in original packaging</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Return shipping costs are the responsibility of the customer unless the item is defective</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Related products section */}
      {relatedProducts.length > 0 && (
        <div className="container max-w-6xl mx-auto px-4 xl:px-0 py-12">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group">
                <div className="relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                    <img 
                      src={getProductImage(relatedProduct.id)} 
                      alt={relatedProduct.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {relatedProduct.comparePrice && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium" 
                          style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}>
                        Sale
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-base mb-1 truncate">{relatedProduct.name}</h3>
                    <div className="flex items-baseline mb-3">
                      <span className="font-medium text-base">$ {relatedProduct.price} USD</span>
                      {relatedProduct.comparePrice && (
                        <span className="ml-2 text-gray-500 line-through text-xs">$ {relatedProduct.comparePrice} USD</span>
                      )}
                    </div>
                    
                    <a
                      href={`/product/${relatedProduct.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block w-full py-2 rounded text-center font-medium transition-colors" 
                      style={{ backgroundColor: themeColors.dark, color: 'white' }}
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Call to action */}
      <div className="bg-gray-100 py-12">
        <div className="container max-w-6xl mx-auto px-4 xl:px-0">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-no-repeat bg-cover bg-right"
                 style={{ backgroundImage: `url(${getProductImage(product.id)})` }}></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing the Right Equipment?</h2>
              <p className="text-gray-600 mb-6">
                Our team of experts is ready to assist you in finding the perfect solution for your needs.
                Contact us today for a personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="px-6 py-3 rounded-lg font-medium text-white text-center transition-all"
                  style={{ backgroundColor: themeColors.dark }}
                >
                  Contact Us
                </a>
                <a 
                  href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-6 py-3 rounded-lg font-medium text-center transition-all"
                  style={{ backgroundColor: themeColors.primary, color: themeColors.dark }}
                >
                  Explore {product.category}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;