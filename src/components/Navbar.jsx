import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isProductsOpen) setIsProductsOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Here you would typically handle the search
    setIsSearchOpen(false);
  };

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black py-1">
        <div className="container max-w-5xl mx-auto text-center text-xs font-medium">
          Free shipping on orders over $500 • Fast worldwide delivery
        </div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo - Centered on Mobile, Left on Desktop */}
          <div className="flex-1 lg:flex-none flex justify-start">
            <a href="/" className="relative group">
              <img 
                src="https://cdn.prod.website-files.com/65b9cce908217ff5cd624b00/65bb4424e5513bc04508ecbc_gearo-logo.svg" 
                alt="Gearo Logo" 
                className="h-7 md:h-8 transition-all duration-300"
              />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Center Navigation - Hidden on Mobile */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex space-x-6 items-center">
              <a href="/" className="font-medium text-sm text-gray-800 hover:text-yellow-400 transition-all duration-300 relative group py-2">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/about-us" className="font-medium text-sm text-gray-800 hover:text-yellow-400 transition-all duration-300 relative group py-2">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <div className="relative group">
                <button 
                  onClick={toggleProductsDropdown}
                  className="font-medium text-sm text-gray-800 hover:text-yellow-400 transition-all duration-300 flex items-center py-2"
                >
                  Products
                  <svg 
                    className={`w-3 h-3 ml-1 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                
                {/* Products Dropdown */}
                {isProductsOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white shadow-xl rounded-lg z-10 overflow-hidden transition-all duration-300 opacity-100 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                      <div>
                        <div className="mb-2 pb-2 border-b border-gray-100">
                          <h3 className="font-semibold text-base">Cleaning Solutions</h3>
                          <p className="text-xs text-gray-500">Professional-grade equipment</p>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-xs">
                            <a href="/products/vacuum-systems" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Vacuum Systems
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/pressure-washers" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Pressure Washers
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/steam-cleaners" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Steam Cleaners
                            </a>
                          </li>
                        </ul>
                        <a href="/products/cleaning-solutions" className="text-xs font-medium text-black hover:text-yellow-400 mt-2 inline-block hover:underline">
                          View All Solutions
                        </a>
                      </div>
                      
                      <div>
                        <div className="mb-2 pb-2 border-b border-gray-100">
                          <h3 className="font-semibold text-base">Fluid Management</h3>
                          <p className="text-xs text-gray-500">Comprehensive handling systems</p>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-xs">
                            <a href="/products/pumps-systems" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Pumps & Systems
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/hoses-fittings" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Hoses & Fittings
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/valves-controls" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Valves & Controls
                            </a>
                          </li>
                        </ul>
                        <a href="/products/fluid-management" className="text-xs font-medium text-black hover:text-yellow-400 mt-2 inline-block hover:underline">
                          View All Systems
                        </a>
                      </div>
                      
                      <div>
                        <div className="mb-2 pb-2 border-b border-gray-100">
                          <h3 className="font-semibold text-base">Assembly Tools</h3>
                          <p className="text-xs text-gray-500">Precision industrial tools</p>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-xs">
                            <a href="/products/power-tools" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Power Tools
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/pneumatic-tools" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Pneumatic Tools
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/torque-solutions" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Torque Solutions
                            </a>
                          </li>
                        </ul>
                        <a href="/products/assembly-tools" className="text-xs font-medium text-black hover:text-yellow-400 mt-2 inline-block hover:underline">
                          View All Tools
                        </a>
                      </div>
                      
                      <div>
                        <div className="mb-2 pb-2 border-b border-gray-100">
                          <h3 className="font-semibold text-base">Material Handling</h3>
                          <p className="text-xs text-gray-500">Safe & efficient equipment</p>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-xs">
                            <a href="/products/lifting-equipment" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Lifting Equipment
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/conveyor-systems" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Conveyor Systems
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/storage-solutions" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Storage Solutions
                            </a>
                          </li>
                        </ul>
                        <a href="/products/material-handling" className="text-xs font-medium text-black hover:text-yellow-400 mt-2 inline-block hover:underline">
                          View All Solutions
                        </a>
                      </div>
                      
                      <div>
                        <div className="mb-2 pb-2 border-b border-gray-100">
                          <h3 className="font-semibold text-base">Hydraulic Wrenches</h3>
                          <p className="text-xs text-gray-500">High-torque applications</p>
                        </div>
                        <ul className="space-y-1">
                          <li className="text-xs">
                            <a href="/products/square-drive" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Square Drive
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/low-profile" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Low Profile
                            </a>
                          </li>
                          <li className="text-xs">
                            <a href="/products/custom-solutions" className="flex items-center hover:text-yellow-400 transition-colors duration-300">
                              <span className="mr-1">→</span>Custom Solutions
                            </a>
                          </li>
                        </ul>
                        <a href="/products/hydraulic-wrenches" className="text-xs font-medium text-black hover:text-yellow-400 mt-2 inline-block hover:underline">
                          View All Wrenches
                        </a>
                      </div>
                      
                      <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-sm">New Product Catalog</h3>
                          <p className="text-xs text-gray-600">Discover our latest innovations in industrial solutions</p>
                        </div>
                        <a 
                          href="/catalog" 
                          className="inline-flex items-center justify-center px-3 py-1 bg-gray-900 text-white text-xs rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
                        >
                          Download
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="/services" className="font-medium text-sm text-gray-800 hover:text-yellow-400 transition-all duration-300 relative group py-2">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/industries" className="font-medium text-sm text-gray-800 hover:text-yellow-400 transition-all duration-300 relative group py-2">
                Industries
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          
          {/* Right Actions */}
          <div className="flex-1 lg:flex-none flex justify-end items-center space-x-1 md:space-x-3">
            {/* Search */}
            <div className="relative">
              <button 
                onClick={toggleSearch} 
                className="p-1 text-gray-700 hover:text-yellow-400 transition-colors duration-300 rounded-full hover:bg-gray-100"
                aria-label="Search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              
              {/* Search Popup */}
              {isSearchOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg z-10 p-3 border border-gray-100 overflow-hidden">
                  <div className="flex flex-col">
                    <div className="flex items-center border-b border-gray-200 pb-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                      <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="flex-grow px-2 py-1 text-sm focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      />
                    </div>
                    <div className="pt-2 flex justify-between items-center">
                      <div className="text-xs text-gray-500">Press Enter to search</div>
                      <button 
                        onClick={handleSearch}
                        className="bg-gray-900 text-white px-3 py-1 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-xs font-medium"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Contact Us Button */}
            <a 
              href="/contact-us" 
              className="hidden md:flex items-center space-x-1 bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="font-medium">Contact Us</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-1 text-gray-700 hover:text-yellow-400 transition-colors duration-300 rounded-full hover:bg-gray-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-screen overflow-y-auto transition-all duration-300">
          <div className="container max-w-5xl mx-auto py-3 px-8 space-y-3">
            <a href="/" className="block font-medium text-sm text-gray-800 hover:text-yellow-400 py-1.5 border-b border-gray-100">
              Home
            </a>
            <a href="/about-us" className="block font-medium text-sm text-gray-800 hover:text-yellow-400 py-1.5 border-b border-gray-100">
              About Us
            </a>
            <div className="py-1.5 border-b border-gray-100">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center justify-between w-full font-medium text-sm text-gray-800 hover:text-yellow-400"
              >
                <span>Products</span>
                <svg 
                  className={`w-3 h-3 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isProductsOpen && (
                <div className="mt-2 pl-3 space-y-2">
                  <div className="py-1">
                    <h3 className="font-semibold text-xs text-yellow-400">Cleaning Solutions</h3>
                    <ul className="mt-1 pl-2 space-y-1">
                      <li><a href="/products/vacuum-systems" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Vacuum Systems</a></li>
                      <li><a href="/products/pressure-washers" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Pressure Washers</a></li>
                      <li><a href="/products/steam-cleaners" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Steam Cleaners</a></li>
                    </ul>
                  </div>
                  
                  <div className="py-1">
                    <h3 className="font-semibold text-xs text-yellow-400">Fluid Management</h3>
                    <ul className="mt-1 pl-2 space-y-1">
                      <li><a href="/products/pumps-systems" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Pumps & Systems</a></li>
                      <li><a href="/products/hoses-fittings" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Hoses & Fittings</a></li>
                      <li><a href="/products/valves-controls" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Valves & Controls</a></li>
                    </ul>
                  </div>
                  
                  <div className="py-1">
                    <h3 className="font-semibold text-xs text-yellow-400">Assembly Tools</h3>
                    <ul className="mt-1 pl-2 space-y-1">
                      <li><a href="/products/power-tools" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Power Tools</a></li>
                      <li><a href="/products/pneumatic-tools" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Pneumatic Tools</a></li>
                      <li><a href="/products/torque-solutions" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Torque Solutions</a></li>
                    </ul>
                  </div>
                  
                  <div className="py-1">
                    <h3 className="font-semibold text-xs text-yellow-400">Material Handling</h3>
                    <ul className="mt-1 pl-2 space-y-1">
                      <li><a href="/products/lifting-equipment" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Lifting Equipment</a></li>
                      <li><a href="/products/conveyor-systems" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Conveyor Systems</a></li>
                      <li><a href="/products/storage-solutions" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Storage Solutions</a></li>
                    </ul>
                  </div>
                  
                  <div className="py-1">
                    <h3 className="font-semibold text-xs text-yellow-400">Hydraulic Wrenches</h3>
                    <ul className="mt-1 pl-2 space-y-1">
                      <li><a href="/products/square-drive" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Square Drive</a></li>
                      <li><a href="/products/low-profile" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Low Profile</a></li>
                      <li><a href="/products/custom-solutions" className="text-xs text-gray-600 hover:text-yellow-400 transition-colors duration-300">Custom Solutions</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <a href="/services" className="block font-medium text-sm text-gray-800 hover:text-yellow-400 py-1.5 border-b border-gray-100">
              Services
            </a>
            <a href="/testimonials" className="block font-medium text-sm text-gray-800 hover:text-yellow-400 py-1.5 border-b border-gray-100">
              Testimonials
            </a>
            
            {/* Mobile Contact Button */}
            <a 
              href="/contact-us" 
              className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 mt-3 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="font-medium">Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;