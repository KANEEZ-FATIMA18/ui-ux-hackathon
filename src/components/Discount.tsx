// src/components/DiscountItem.tsx
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import React from "react";

// const DiscountItem: React.FC = () => {
//   return (
//     <section className="py-16 bg-white">
//       {/* maun heading */}
//       <div className="flex justify-center flex-col">
//         <h2 className="text-purple-700 text-3xl text-center font-bold mb-4  ">
//           Discount Item
//         </h2>
//         <div className="flex space-x-3 text-sm text-gray-500 mb-6  justify-center">
//           <span className="underline cursor-pointer text-pink-400">
//             Wood Chair
//           </span>
//           <span className="hover:underline hover:text-pink-400 cursor-pointer">
//             Plastic Chair
//           </span>
//           <span className="hover:underline hover:text-pink-400 cursor-pointer">
//             Sofa Collection
//           </span>
//         </div>
//       </div>
//       <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6">
//         {/* Left Content */}
//         <div className="flex-1 ">
//           <h3 className="font-[JosefinSans] text-[35px] font-bold text-gray-800 mb-4">
//             20% Discount Of All Products
//           </h3>
//           <h4 className="text-[21px] text-pink-500 font-[JosefinSans] mb-4">
//             Eams Sofa Compact
//           </h4>
//           <p className="text-gray-500 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
//             feugiat habitasse nec, bibendum condimentum.
//           </p>
//           <ul className=" pl-5  space-y-2 text-gray-500 grid grid-cols-2">
//             <li>
//               <FontAwesomeIcon
//                 icon={faCheck}
//                 className="w-[16px] h-[11px] text-[#7569B2]"
//               />
//               Material expose like metals
//             </li>

//             <li>
//               <FontAwesomeIcon
//                 icon={faCheck}
//                 className="w-[16px] h-[11px] text-[#7569B2]"
//               />
//               Clear lines and geometric figures
//             </li>
//             <li>
//               <FontAwesomeIcon
//                 icon={faCheck}
//                 className="w-[16px] h-[11px] text-[#7569B2]"
//               />
//               Simple neutral colours
//             </li>

//             <li>
//               <FontAwesomeIcon
//                 icon={faCheck}
//                 className="w-[16px] h-[11px] text-[#7569B2]"
//               />
//               Material expose like metals
//             </li>
//           </ul>
//           <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
//             Shop Now
//           </button>
//         </div>

//         {/* Right Content */}
//         <div className="flex-1 ">
//           <Image
//             src="/tortuga-01-b 1.png"
//             alt="Chair"
//             width={699}
//             height={597}
//             className="rounded-full shadow-md w-full max-w-sm mx-auto bg-pink-100"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscountItem;


import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      {/* Main Heading */}
      <div className="flex justify-center flex-col px-4">
        <h2 className="text-purple-700 text-3xl text-center font-bold mb-4">
          Discount Item
        </h2>
        <div className="flex space-x-3 text-sm text-gray-500 mb-6 justify-center">
          <span className="underline cursor-pointer text-pink-400">
            Wood Chair
          </span>
          <span className="hover:underline hover:text-pink-400 cursor-pointer">
            Plastic Chair
          </span>
          <span className="hover:underline hover:text-pink-400 cursor-pointer">
            Sofa Collection
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6 flex-col-reverse md:flex-row">
        {/* Right Content (Image for small screens moves to top) */}
        <div className="flex-1 w-full md:order-2">
          <Image
            src="/tortuga-01-b 1.png"
            alt="Chair"
            width={699}
            height={597}
            className="rounded-full shadow-md w-full max-w-sm mx-auto bg-pink-100"
          />
        </div>

        {/* Left Content (Text for small screens moves to bottom) */}
        <div className="flex-1 w-full md:order-1">
          <h3 className="font-[JosefinSans] text-[28px] md:text-[35px] font-bold text-gray-800 mb-4">
            20% Discount Of All Products
          </h3>
          <h4 className="text-[18px] md:text-[21px] text-pink-500 font-[JosefinSans] mb-4">
            Eams Sofa Compact
          </h4>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="pl-5 space-y-2 text-gray-500 grid grid-cols-1 sm:grid-cols-2">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[16px] h-[11px] text-[#7569B2] mr-2"
              />
              Material expose like metals
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[16px] h-[11px] text-[#7569B2] mr-2"
              />
              Clear lines and geometric figures
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[16px] h-[11px] text-[#7569B2] mr-2"
              />
              Simple neutral colours
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="w-[16px] h-[11px] text-[#7569B2] mr-2"
              />
              Material expose like metals
            </li>
          </ul>
          <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
