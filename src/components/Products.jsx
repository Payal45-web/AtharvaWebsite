import React, { useMemo, useState, useEffect } from 'react';
import productsData from './Products.json';

// Import all images with their correct file extensions
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.webp';
import img8 from '../assets/8.webp';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.webp';
import img14 from '../assets/14.webp';
import img15 from '../assets/15.webp';
import img16 from '../assets/16.png';
import img17 from '../assets/17.webp';
import img18 from '../assets/18.webp';
import img19 from '../assets/19.webp';
import img20 from '../assets/20.webp';
import img21 from '../assets/21.jpg';
import img22 from '../assets/22.webp';
import img23 from '../assets/23.webp';
import img24 from '../assets/24.jpg';
import img25 from '../assets/25.webp';
import img26 from '../assets/26.jpg'; // Using jpg version (there's also 26.avif)
import img27 from '../assets/27.png';
import img28 from '../assets/28.webp';
import img29 from '../assets/29.jpg';
import img30 from '../assets/30.jpg';
import img31 from '../assets/31.webp';
import img32 from '../assets/32.png';
import img33 from '../assets/33.jpg';
import img34 from '../assets/34.jpg';
import img35 from '../assets/35.png';
import img36 from '../assets/36.jpg';
import img37 from '../assets/37.jpg';
import img38 from '../assets/38.jpeg';
import img39 from '../assets/39.jpg';
import img40 from '../assets/40.jpg';
import img41 from '../assets/41.webp';
import img42 from '../assets/42.webp';
import img43 from '../assets/43.webp';
import img44 from '../assets/44.jpeg';
import img45 from '../assets/45.webp';
import img46 from '../assets/46.webp';
import img47 from '../assets/47.jpeg';
import img48 from '../assets/48.png';
import img49 from '../assets/49.webp';
import img50 from '../assets/50.webp';
import img51 from '../assets/51.jpg';
import img52 from '../assets/52.avif';
import img53 from '../assets/53.jpg';
import img54 from '../assets/54.jpg';
import img55 from '../assets/55.jpg';
import img56 from '../assets/56.webp';
import img57 from '../assets/57.jpg';
import img58 from '../assets/58.jpeg';
import img59 from '../assets/59.webp';
import img60 from '../assets/60.png';
import img61 from '../assets/61.webp';
import img62 from '../assets/62.webp';
import img63 from '../assets/63.jpg';
import img64 from '../assets/64.jpg';
import img65 from '../assets/65.jpeg';
import img66 from '../assets/66.jpeg';
import img67 from '../assets/67.jpeg';
import img68 from '../assets/68.jpg';
import img69 from '../assets/69.jpeg';
import img70 from '../assets/70.jpg';
import img71 from '../assets/71.jpg';
import img72 from '../assets/72.jpg';
import img73 from '../assets/73.jpg';
import img74 from '../assets/74.jpg';
import img75 from '../assets/75.jpg';
import img76 from '../assets/76.jpg';
import img77 from '../assets/77.webp';
import img78 from '../assets/78.jpg';
import img79 from '../assets/79.jpg';
import img80 from '../assets/80.webp';
import img81 from '../assets/81.jpg';
import img82 from '../assets/82.webp';
import img83 from '../assets/83.webp';
import img84 from '../assets/84.webp';
import img85 from '../assets/85.webp';
import img86 from '../assets/86.webp';
import img87 from '../assets/87.webp';
import img88 from '../assets/88.webp';
import img89 from '../assets/89.webp';
import img90 from '../assets/90.jpg';
import img91 from '../assets/91.jpg';
import img92 from '../assets/92.webp';
import img93 from '../assets/93.webp';
import img94 from '../assets/94.webp';
import img95 from '../assets/95.webp';
import img96 from '../assets/96.webp';
import img97 from '../assets/97.jpg';
import img98 from '../assets/98.jpg';
import img99 from '../assets/99.jpg';
import img100 from '../assets/100.jpg';
import img101 from '../assets/101.jpg';
import img102 from '../assets/102.webp';
import img103 from '../assets/103.webp';
import img104 from '../assets/104.webp';
import img105 from '../assets/105.webp';
import img106 from '../assets/106.webp';
import img107 from '../assets/107.webp';
import img108 from '../assets/108.webp';
import img109 from '../assets/109.webp';
import img110 from '../assets/110.webp';
import img111 from '../assets/111.webp';
import img112 from '../assets/112.webp';
import img113 from '../assets/113.webp';
import img114 from '../assets/114.webp';
import img115 from '../assets/115.webp';
import img116 from '../assets/116.webp';
import img117 from '../assets/117.webp';
import img118 from '../assets/118.webp';
import img119 from '../assets/119.webp';
import img120 from '../assets/120.webp';
import img121 from '../assets/121.webp';
import img122 from '../assets/122.webp';
import img123 from '../assets/123.webp';
import img124 from '../assets/124.webp';
import img125 from '../assets/125.jpg';
import img126 from '../assets/126.jpg';
import img127 from '../assets/127.jpg';
import img128 from '../assets/128.webp';
import img129 from '../assets/129.webp';
import img130 from '../assets/130.webp';
import img131 from '../assets/131.jpeg';
import img132 from '../assets/132.jpeg';
import img133 from '../assets/133.webp';
import img134 from '../assets/134.webp';
import img135 from '../assets/135.webp';
import img136 from '../assets/136.webp';
import img137 from '../assets/137.webp';
import img138 from '../assets/138.webp';
import img139 from '../assets/139.webp';
import img140 from '../assets/140.webp';
import img141 from '../assets/141.webp';
import img142 from '../assets/142.webp';
import img143 from '../assets/143.webp';
import img144 from '../assets/144.webp';
import img145 from '../assets/145.webp';
import img146 from '../assets/146.webp';
import img147 from '../assets/147.webp';
import img148 from '../assets/148.webp';
import img149 from '../assets/149.webp';
import img150 from '../assets/150.webp';
import img151 from '../assets/151.webp';
import img152 from '../assets/152.webp';
import img153 from '../assets/153.jpg';
import img154 from '../assets/154.jpg';
import img155 from '../assets/155.jpeg';
import img156 from '../assets/156.jpeg';
import img157 from '../assets/157.avif';
import img158 from '../assets/158.webp';
import img159 from '../assets/159.webp';
import img160 from '../assets/160.webp';
import img161 from '../assets/161.webp';
import img162 from '../assets/162.webp';
import img163 from '../assets/163.webp';
import img164 from '../assets/164.jpeg';
import img165 from '../assets/165.jpeg';
import img166 from '../assets/166.jpg';
import img167 from '../assets/167.jpeg';
import img168 from '../assets/168.jpeg';
import img169 from '../assets/169.webp';
import img170 from '../assets/170.jpeg';
import img171 from '../assets/171.webp';
import img172 from '../assets/172.webp';
import img173 from '../assets/173.webp';
import img174 from '../assets/174.webp';
import img175 from '../assets/175.jpeg';
import img176 from '../assets/176.jpeg';
import img177 from '../assets/177.webp';
import img178 from '../assets/178.webp';
import img179 from '../assets/179.webp';
import img180 from '../assets/180.webp';
import img181 from '../assets/181.webp';
import img182 from '../assets/182.webp';
import img183 from '../assets/183.webp';
import img184 from '../assets/184.jpeg';
import img185 from '../assets/185.webp';
import img186 from '../assets/186.webp';
import img187 from '../assets/187.webp';
import img188 from '../assets/188.webp';
import img189 from '../assets/189.webp';
import img190 from '../assets/190.webp';
import img191 from '../assets/191.webp';
import img192 from '../assets/192.webp';
import img193 from '../assets/193.webp';
import img194 from '../assets/194.webp';
import img195 from '../assets/195.webp';
import img196 from '../assets/196.webp';
import img197 from '../assets/197.webp';
import img198 from '../assets/198.webp';
import img199 from '../assets/199.webp';
import img200 from '../assets/200.webp';
import img201 from '../assets/201.webp';
import img202 from '../assets/202.webp';
import img203 from '../assets/203.webp';
import img204 from '../assets/204.jpg';
import img205 from '../assets/205.jpeg';
import img206 from '../assets/206.webp';
import img207 from '../assets/207.webp';
import img208 from '../assets/208.png';
import img209 from '../assets/209.jpeg';
import img210 from '../assets/210.webp';
import img211 from '../assets/211.jpg';
import img212 from '../assets/212.webp';
import img213 from '../assets/213.webp';
import img214 from '../assets/214.webp';
import img215 from '../assets/215.webp';
import img216 from '../assets/216.webp';
import img217 from '../assets/217.webp';
import img218 from '../assets/218.webp';
import img219 from '../assets/219.webp';
import img220 from '../assets/220.webp';
import img221 from '../assets/221.webp';
import img222 from '../assets/222.webp';
import img223 from '../assets/223.webp';
import img224 from '../assets/224.webp';
import img225 from '../assets/225.webp';
import img226 from '../assets/226.webp';
import img227 from '../assets/227.webp';
import img228 from '../assets/228.webp';
import img229 from '../assets/229.webp';
import img230 from '../assets/230.webp';
import img231 from '../assets/231.webp';
import img232 from '../assets/232.webp';
import img233 from '../assets/233.webp';
import img234 from '../assets/234.webp';
import img235 from '../assets/235.webp';
import img236 from '../assets/236.webp';
import img237 from '../assets/237.webp';
import img238 from '../assets/238.webp';
import img239 from '../assets/239.webp';
import img240 from '../assets/240.webp';
import img241 from '../assets/241.webp';
import img242 from '../assets/242.webp';
import img243 from '../assets/243.webp';
import img244 from '../assets/244.webp';
import img245 from '../assets/245.webp';
import img246 from '../assets/246.webp';
import img247 from '../assets/247.webp';
import img248 from '../assets/248.webp';
import img249 from '../assets/249.webp';
import img250 from '../assets/250.webp';
import img251 from '../assets/251.webp';
import img252 from '../assets/252.webp';
import img253 from '../assets/253.jpeg';
import img254 from '../assets/254.jpg';
import img255 from '../assets/255.png';
import img256 from '../assets/256.jpeg';
import img257 from '../assets/257.webp';
import img258 from '../assets/258.jpeg';
import img259 from '../assets/259.jpg';
import img260 from '../assets/260.jpeg';
import img261 from '../assets/261.jpeg';
import img262 from '../assets/262.jpg';
import img263 from '../assets/263.jpg';
import img264 from '../assets/264.jpg';
import img265 from '../assets/265.jpg';
import img266 from '../assets/266.jpeg';
import img267 from '../assets/267.jpeg';
import img268 from '../assets/268.jpeg';
import img269 from '../assets/269.jpg';
import img270 from '../assets/270.jpeg';

// Create a complete image mapping object for all 270 products
const imageMapping = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
  11: img11,
  12: img12,
  13: img13,
  14: img14,
  15: img15,
  16: img16,
  17: img17,
  18: img18,
  19: img19,
  20: img20,
  21: img21,
  22: img22,
  23: img23,
  24: img24,
  25: img25,
  26: img26,
  27: img27,
  28: img28,
  29: img29,
  30: img30,
  31: img31,
  32: img32,
  33: img33,
  34: img34,
  35: img35,
  36: img36,
  37: img37,
  38: img38,
  39: img39,
  40: img40,
  41: img41,
  42: img42,
  43: img43,
  44: img44,
  45: img45,
  46: img46,
  47: img47,
  48: img48,
  49: img49,
  50: img50,
  51: img51,
  52: img52,
  53: img53,
  54: img54,
  55: img55,
  56: img56,
  57: img57,
  58: img58,
  59: img59,
  60: img60,
  61: img61,
  62: img62,
  63: img63,
  64: img64,
  65: img65,
  66: img66,
  67: img67,
  68: img68,
  69: img69,
  70: img70,
  71: img71,
  72: img72,
  73: img73,
  74: img74,
  75: img75,
  76: img76,
  77: img77,
  78: img78,
  79: img79,
  80: img80,
  81: img81,
  82: img82,
  83: img83,
  84: img84,
  85: img85,
  86: img86,
  87: img87,
  88: img88,
  89: img89,
  90: img90,
  91: img91,
  92: img92,
  93: img93,
  94: img94,
  95: img95,
  96: img96,
  97: img97,
  98: img98,
  99: img99,
  100: img100,
  101: img101,
  102: img102,
  103: img103,
  104: img104,
  105: img105,
  106: img106,
  107: img107,
  108: img108,
  109: img109,
  110: img110,
  111: img111,
  112: img112,
  113: img113,
  114: img114,
  115: img115,
  116: img116,
  117: img117,
  118: img118,
  119: img119,
  120: img120,
  121: img121,
  122: img122,
  123: img123,
  124: img124,
  125: img125,
  126: img126,
  127: img127,
  128: img128,
  129: img129,
  130: img130,
  131: img131,
  132: img132,
  133: img133,
  134: img134,
  135: img135,
  136: img136,
  137: img137,
  138: img138,
  139: img139,
  140: img140,
  141: img141,
  142: img142,
  143: img143,
  144: img144,
  145: img145,
  146: img146,
  147: img147,
  148: img148,
  149: img149,
  150: img150,
  151: img151,
  152: img152,
  153: img153,
  154: img154,
  155: img155,
  156: img156,
  157: img157,
  158: img158,
  159: img159,
  160: img160,
  161: img161,
  162: img162,
  163: img163,
  164: img164,
  165: img165,
  166: img166,
  167: img167,
  168: img168,
  169: img169,
  170: img170,
  171: img171,
  172: img172,
  173: img173,
  174: img174,
  175: img175,
  176: img176,
  177: img177,
  178: img178,
  179: img179,
  180: img180,
  181: img181,
  182: img182,
  183: img183,
  184: img184,
  185: img185,
  186: img186,
  187: img187,
  188: img188,
  189: img189,
  190: img190,
  191: img191,
  192: img192,
  193: img193,
  194: img194,
  195: img195,
  196: img196,
  197: img197,
  198: img198,
  199: img199,
  200: img200,
  201: img201,
  202: img202,
  203: img203,
  204: img204,
  205: img205,
  206: img206,
  207: img207,
  208: img208,
  209: img209,
  210: img210,
  211: img211,
  212: img212,
  213: img213,
  214: img214,
  215: img215,
  216: img216,
  217: img217,
  218: img218,
  219: img219,
  220: img220,
  221: img221,
  222: img222,
  223: img223,
  224: img224,
  225: img225,
  226: img226,
  227: img227,
  228: img228,
  229: img229,
  230: img230,
  231: img231,
  232: img232,
  233: img233,
  234: img234,
  235: img235,
  236: img236,
  237: img237,
  238: img238,
  239: img239,
  240: img240,
  241: img241,
  242: img242,
  243: img243,
  244: img244,
  245: img245,
  246: img246,
  247: img247,
  248: img248,
  249: img249,
  250: img250,
  251: img251,
  252: img252,
  253: img253,
  254: img254,
  255: img255,
  256: img256,
  257: img257,
  258: img258,
  259: img259,
  260: img260,
  261: img261,
  262: img262,
  263: img263,
  264: img264,
  265: img265,
  266: img266,
  267: img267,
  268: img268,
  269: img269,
  270: img270
};

// Helper function to get image based on product ID
const getProductImage = (productId) => {
  return imageMapping[productId];
};

// Theme colors to match hero section
const themeColors = {
  primary: '#FBBF24', // Yellow-400
  secondary: '#FEF3C7', // Yellow-100
  accent: '#F59E0B', // Yellow-500
  dark: '#111827' // Gray-900
};

const Products = () => {
  // State for selected category and pagination
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; // Adjust as needed
  
  // Get unique categories from the product data
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    return ['All', ...uniqueCategories];
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return productsData;
    }
    return productsData.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

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
  }, [selectedCategory]);

  // Get featured products (one from each category)
  const featuredProducts = useMemo(() => {
    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    return uniqueCategories.map(category => {
      // Find the first product from each category
      return productsData.find(product => product.category === category);
    });
  }, []);

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
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        
        {/* Categories navigation */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured categories section - show only when "All" is selected */}
        {selectedCategory === 'All' && (
          <>
            <h3 className="text-2xl font-bold mb-6">Featured Categories</h3>
            {/* Display the first 4 categories in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                        <a href="#" 
                           onClick={(e) => { e.preventDefault(); setSelectedCategory(product.category); }}
                           className="font-medium text-sm flex justify-between items-center">
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

            {/* Featured categories continued */}
            {featuredProducts.length > 4 && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                            <a href="#" 
                               onClick={(e) => { e.preventDefault(); setSelectedCategory(product.category); }}
                               className="font-medium text-sm flex justify-between items-center">
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
                
                {/* Last featured category */}
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
                          <a href="#" 
                             onClick={(e) => { e.preventDefault(); setSelectedCategory(product.category); }}
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
          </>
        )}
        
        {/* Product listing section */}
        <div>
          {selectedCategory !== 'All' && (
            <h3 className="text-2xl font-bold mb-6">{selectedCategory}</h3>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
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
                      <a href={`/product/${product.id}`} className="font-medium text-sm flex justify-between items-center">
                        <span>View product</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </a>
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
          
          {/* Show message when no products are found */}
          {currentProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
          <div className="mt-12 flex justify-center">
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Previous
              </button>
              
              {/* Generate page numbers */}
              {[...Array(totalPages)].map((_, i) => {
                // Show limited page numbers for better UX when there are many pages
                if (
                  i === 0 || // First page
                  i === totalPages - 1 || // Last page
                  (i >= currentPage - 2 && i <= currentPage + 1) // Pages around current
                ) {
                  return (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`px-4 py-2 rounded-md ${
                        currentPage === i + 1 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                }
                
                // Show ellipsis for skipped pages
                if (i === 1 && currentPage > 3) {
                  return <span key="start-ellipsis" className="px-3 py-2">...</span>;
                }
                
                if (i === totalPages - 2 && currentPage < totalPages - 2) {
                  return <span key="end-ellipsis" className="px-3 py-2">...</span>;
                }
                
                return null;
              })}
              
              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* View all categories button - only show when a specific category is selected */}
        {selectedCategory !== 'All' && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setSelectedCategory('All')}
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
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;