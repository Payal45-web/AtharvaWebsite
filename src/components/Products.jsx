import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "New tools wood cutter",
      price: "$ 345.50 USD",
      comparePrice: "$ 499.00 USD",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bc9116a8707454567f1839_product-image-15.jpg",
      link: "/product/new-tools-wood-cutter",
      badgeText: "",
      badgeImage: ""
    },
    {
      id: 2,
      title: "Gearo 15-inch plastic tool bag",
      price: "$ 1,865.00 USD",
      comparePrice: "$ 2,220.00 USD",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb264addef44fc7b184e0e_product-image-14.jpg",
      link: "/product/gearo-15-inch-plastic-tool-bag",
      badgeText: "30% off",
      badgeImage: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb7cf2c67879aa0d87991b_trendy-badge.svg"
    },
    {
      id: 3,
      title: "Electric rotary drill machine",
      price: "$ 750.00 USD",
      comparePrice: "$ 900.00 USD",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb2617a7173f3127ebd274_product-image-13.jpg",
      link: "/product/electric-rotary-drill-machine",
      badgeText: "",
      badgeImage: ""
    },
    {
      id: 4,
      title: "Ingco power tools",
      price: "$ 1,245.00 USD",
      comparePrice: "$ 1,420.00 USD",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb2beb06c3fca8dc29febf_product-image-01.jpg",
      link: "/product/ingco-power-tools",
      badgeText: "",
      badgeImage: ""
    },
    {
      id: 5,
      title: "7-in-1 magnetized wrench",
      price: "$ 248.00 USD",
      comparePrice: "",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d2152f5fa819e54b7ca_product-image-02.jpg",
      link: "/product/7-in-1-magnetized-wrench",
      badgeText: "",
      badgeImage: ""
    },
    {
      id: 6,
      title: "Industrial pneumatic nailer with duo glide roller",
      price: "$ 1,865.00 USD",
      comparePrice: "$ 2,300.00 USD",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d2eb7d8f998712f6549_product-image-03.jpg",
      link: "/product/industrial-pneumatic-nailer-with-duo-glide-roller",
      badgeText: "30% off",
      badgeImage: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb7cf2c67879aa0d87991b_trendy-badge.svg"
    },
    {
      id: 7,
      title: "Adjustable wrenches",
      price: "$ 750.00 USD",
      comparePrice: "",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d3b3420d5cb9f2ff48f_product-image-04.jpg",
      link: "/product/adjustable-wrenches",
      badgeText: "",
      badgeImage: ""
    },
    {
      id: 8,
      title: "Truflex steel tape",
      price: "$ 102.00 USD",
      comparePrice: "",
      image: "https://cdn.prod.website-files.com/65ba0e3e13e1be28866fc5db/65bb2d728b57c5aa2c5e29ae_product-image-05.jpg",
      link: "/product/truflex-steel-tape-3",
      badgeText: "",
      badgeImage: ""
    }
  ];

  return (
    <section className="py-16 bg-white">
      {/* Added max-w-5xl to limit width and add space on sides */}
      <div className="container max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Discover Our Inventory</h2>
        </div>
        
        {/* Changed grid layout to have smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="group">
              <a href={product.link} className="block relative overflow-hidden rounded-lg">
                {/* Reduced height with aspect-[4/3] instead of aspect-square */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {product.badgeText && (
                    <div 
                      className="absolute top-3 left-3 px-3 py-1 bg-no-repeat bg-contain font-medium text-sm text-black"
                      style={{ backgroundImage: `url(${product.badgeImage})` }}
                    >
                      {product.badgeText}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-black text-white py-2 px-4 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Shop now
                    </div>
                  </div>
                </div>
                
                {/* Reduced padding and text size */}
                <div className="pt-3">
                  <h3 className="font-medium text-base mb-1 truncate">{product.title}</h3>
                  <div className="flex items-center">
                    <span className="font-bold text-base">{product.price}</span>
                    {product.comparePrice && (
                      <span className="ml-2 text-gray-500 line-through text-xs">{product.comparePrice}</span>
                    )}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.slice(4, 8).map((product) => (
              <div key={product.id} className="group">
                <a href={product.link} className="block relative overflow-hidden rounded-lg">
                  {/* Reduced height with aspect-[4/3] instead of aspect-square */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {product.badgeText && (
                      <div 
                        className="absolute top-3 left-3 px-3 py-1 bg-no-repeat bg-contain font-medium text-sm text-black"
                        style={{ backgroundImage: `url(${product.badgeImage})` }}
                      >
                        {product.badgeText}
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-black text-white py-2 px-4 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Shop now
                      </div>
                    </div>
                  </div>
                  
                  {/* Reduced padding and text size */}
                  <div className="pt-3">
                    <h3 className="font-medium text-base mb-1 truncate">{product.title}</h3>
                    <div className="flex items-center">
                      <span className="font-bold text-base">{product.price}</span>
                      {product.comparePrice && (
                        <span className="ml-2 text-gray-500 line-through text-xs">{product.comparePrice}</span>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="col-span-1 relative">
            {/* Changed height to be more proportional */}
            <div className="h-64 lg:h-full rounded-lg overflow-hidden bg-cover bg-center" 
                 style={{backgroundImage: "url('https://cdn.prod.website-files.com/65b9cce908217ff5cd624b00/65bb6fed58dda83c3f4b4935_small-banner.jpg')"}}>
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative h-full flex flex-col justify-center items-center p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Hand tools and storage</h2>
                <a href="/shop" className="bg-white text-black font-bold py-2 px-5 rounded-md hover:bg-gray-100 transition-colors duration-300">
                  Shop now
                </a>
              </div>
            </div>
            <div className="mt-6">
              <a href="/shop" className="bg-black text-white font-medium py-2 px-5 rounded-md inline-block hover:bg-gray-800 transition-colors duration-300">
                View all tools
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;