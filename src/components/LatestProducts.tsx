
import React from "react";
import Image from "next/image";

const LatestProducts: React.FC = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
  const products = [
    { name: "Comfort Handy Craft", price: 42.0, originalPrice: 65.0, sale: true, image: "/image 1166.png" },
    { name: "Ergonomic Chair", price: 50.0, originalPrice: 75.0, sale: true, image: "/image 15.png" },
    { name: "Modern Chair", price: 45.0, originalPrice: 60.0, sale: false, image: "/image 1168.png" },
    { name: "Classic Sofa", price: 55.0, originalPrice: 70.0, sale: false, image: "/image 23.png" },
    { name: "Cozy Chair", price: 60.0, originalPrice: 80.0, sale: true, image: "/image 32 (2).png" },
    { name: "Luxury Seat", price: 75.0, originalPrice: 95.0, sale: true, image: "/image 3.png" },
    
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Latest Products
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-6 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${
                index === 0
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "text-gray-500"
              } hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 group hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={223}
                  height={229}
                  className="w-[223px] h-[229px] object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
              <div className="text-gray-500">
                <span className="text-red-500 line-through mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span>${product.price.toFixed(2)}</span>
              </div>

              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded shadow-md">
                  Sale
                </div>
              )}

              {/* Hover Icons */}
              <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  ❤
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🛒
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100">
                  🔍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
