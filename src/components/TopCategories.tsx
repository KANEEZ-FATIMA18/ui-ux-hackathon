// import React from "react";
// import Image from "next/image";

// export default function TopCategories(){
// //   const categories = [
//     { name: "Mini LCW Chair", price: 56.0, image: "/image 20.png" },
//     { name: "Comfort Chair", price: 56.0, image: "/image 1168.png" },
//     { name: "Modern Chair", price: 56.0, image: "/image 1171.png" },
//     { name: "Ergonomic Chair", price: 56.0, image: "/image 20.png" },
//   ];

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Title */}
//         <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
//           Top Categories
//         </h2>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="relative bg-white rounded-full shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
//             >
//               {/* Product Image */}
//               <div className="w-40 h-40 mx-auto rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-md">
//                 <Image
//                   src={category.image}
//                   alt={category.name}
//                   width={150}
//                   height={150}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Product Info */}
//               <h3 className="text-gray-800 font-semibold mt-4">{category.name}</h3>
//               <p className="text-gray-500 text-lg">${category.price.toFixed(2)}</p>

//               {/* Hover Button */}
//               <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm font-medium px-6 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
//                 View Shop
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center space-x-2 mt-8">
//           <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
//           <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//           <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//         </div>
//       </div>
//     </section>
//   );
// };



import Image from "next/image";

const TopCategories = () => {
  const items = [
    {
      id: 1,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 20.png", // Replace with your actual image paths
      button: true,
    },
    {
      id: 2,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 1168.png",
      button: false,
    },
    {
      id: 3,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 1171.png",
      button: false,
    },
    {
      id: 4,
      name: "Mini LCW Chair",
      price: "$56.00",
      image: "/image 20.png",
      button: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-8">
        Top Categories
      </h2>

      {/* Category Items */}
      <div className="flex flex-wrap justify-center gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center"
          >
            {/* Image with rounded design */}
            <div
              className={`relative flex items-center justify-center p-4 rounded-full ${
                item.button ? "ring-4 ring-purple-500" : "bg-gray-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={160}
                height={160}
                className="object-contain"
              />
              {/* Button for the first item */}
              {item.button && (
                <button className="absolute bottom-4 bg-green-500 text-white px-4 py-2  text-sm">
                  View Shop
                </button>
              )}
            </div>

            {/* Item Name and Price */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {item.name}
            </h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
