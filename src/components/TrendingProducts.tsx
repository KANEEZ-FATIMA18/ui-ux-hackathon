
import React from "react";
import Image from "next/image";

const TrendingProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image 1171.png",
    },
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image 1170.png",
    },
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image 31.png",
    },
    {
      name: "Cantilever chair",
      price: "26.00",
      originalPrice: "42.00",
      image: "/image 32 (2).png",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-[JosefinSans] font-bold text-blue-800 text-center mb-6">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {products.map((product,index) => (
            <div
              key={index}
              className="bg-white shadow-lg w-[270px] h-[350px] p-4 text-center border border-gray-200 relative"
            >
              {/* Product Image */}
              <div className="w-[235px] h-[244px] bg-gray-100 mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain h-[171px] w-[171px]"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 text-[16px] font-bold mb-2">{product.name}</h3>
              <div className="text-gray-500 space-x-3">
                <span className="text-blue-900">${product.price}</span>
                <span className="line-through mr-2">${product.originalPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
