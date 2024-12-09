

import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code.Y523201",
      price: "$42.00",
      image: "/image 1168.png", // Replace with actual image paths
    },
    {
      name: "Cantilever chair",
      code: "Code.Y523201",
      price: "$42.00",
      image: "/image 1.png",
    },
    {
      name: "Cantilever chair",
      code: "Code.Y523201",
      price: "$42.00",
      image: "/image 1169.png",
    },
    {
      name: "Cantilever chair",
      code: "Code.Y523201",
      price: "$42.00",
      image: "/image 3.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6 shadow-xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#1A0B5B] mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-[#F6F7FB] shadow-md hover:shadow-lg transition duration-300"
              style={{ width: "270px", height: "361px" }}
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain w-[178px] h-[178px]"
                />
              </div>
              <div className="mt-12 text-center bg-white">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <div className="flex justify-center mt-3">
                  <Image
                    src={'/Group 141.png'}
                    alt=""
                    width={200}
                    height={200}
                    className="w-[35px] h-[5px]"
                  />
                </div>
                <p className="text-sm mt-3 text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#f171cd] text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-pink-400 font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

