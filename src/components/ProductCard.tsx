// import Image from "next/image";

// export default function ProductCard() {
//     return (
//       <div className="bg-[#F1F0FF]">
//       <div className="flex  h-[550px] flex-col md:flex-row items-center md:items-start justify-around bg-[#F1F0FF] p-6  max-w-[1050px] mx-auto">
//         {/* Image Section */}
//         <div className="relative  max-w-[509px] h-[550px] w-full">
//           <Image
//             src="/Group 153.png"
//             alt="Stylish Chair"
//             width={558}
//             height={550}
//           />
//           <div className="absolute -z-10 top-5 left-5 bg-pink-100 "></div>
//         </div>
  
//         {/* Content Section */}
//         <div className="max-w-[500px] md:mt-16">
//           <h2 className="text-2xl md:text-[35px] font-[JosefinSans] font-bold text-[#151875] mb-4">
//             Unique Features of Latest & Trending Products
//           </h2>
//           <ul className="space-y-3 text-[#ACABC3] mb-6">
//             <li className="flex items-center gap-2 text-[16px]">
//               <span className="text-pink-500 text-2xl">•</span>
//               All frames constructed with hardwood solids and laminates
//             </li>
//             <li className="flex items-center gap-2 text-[16px]">
//               <span className="text-[#2B2BF5] text-2xl">•</span>
//               Reinforced with double wood dowels, glue, screw – nails corner blocks and machine nails
//             </li>
//             <li className="flex items-center gap-2 text-[16px]">
//               <span className="text-[#2BF5CC] text-2xl">•</span>
//               Arms, backs and seats are structurally reinforced
//             </li>
//           </ul>
//           <div className="flex items-center gap-4">
//             <button className="px-6 py-2 bg-pink-500 text-white font-bold rounded shadow-md hover:bg-pink-600">
//               Add to Cart
//             </button>
//             <div>
//               <p className="text-gray-800 font-bold">B&B Italian Sofa</p>
//               <p className="text-gray-600">$32.00</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }
  

import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-[#F1F0FF]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-around bg-[#F1F0FF] p-6 max-w-[1050px] mx-auto">
        {/* Image Section */}
        <div className="relative max-w-full h-auto md:max-w-[509px] md:h-[550px] flex-shrink-0">
          <Image
            src="/Group 153.png"
            alt="Stylish Chair"
            width={558}
            height={550}
            className="w-full h-auto object-contain"
          />
          <div className="absolute -z-10 top-5 left-5 bg-pink-100 w-[350px] h-[350px] rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-[500px] w-full md:mt-16 px-4 md:px-0">
          <h2 className="text-2xl md:text-[35px] font-[JosefinSans] font-bold text-[#151875] mb-4 text-center md:text-left">
            Unique Features of Latest & Trending Products
          </h2>
          <ul className="space-y-3 text-[#ACABC3] mb-6">
            <li className="flex items-start gap-2 text-[16px]">
              <span className="text-pink-500 text-2xl">•</span>
              <p>All frames constructed with hardwood solids and laminates</p>
            </li>
            <li className="flex items-start gap-2 text-[16px]">
              <span className="text-[#2B2BF5] text-2xl">•</span>
              <p>
                Reinforced with double wood dowels, glue, screw – nails corner
                blocks and machine nails
              </p>
            </li>
            <li className="flex items-start gap-2 text-[16px]">
              <span className="text-[#2BF5CC] text-2xl">•</span>
              <p>Arms, backs and seats are structurally reinforced</p>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="px-6 py-2 bg-pink-500 text-white font-bold rounded shadow-md hover:bg-pink-600">
              Add to Cart
            </button>
            <div className="text-center md:text-left">
              <p className="text-gray-800 font-bold">B&B Italian Sofa</p>
              <p className="text-gray-600">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
