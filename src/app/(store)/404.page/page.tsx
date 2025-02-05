// import Image from "next/image";
// import Link from "next/link";

// export default function MyAccount() {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* Header */}
//       <header className="bg-gray-100 py-14">
//         <div className="container mx-auto px-4">
//           <h1 className="text-[36px] font-bold font-[JosefinSans] text-gray-900">
//             404 Not Found
//           </h1>
//           <p className="text-sm font-bold text-gray-500">
//             Home / Pages / <span className="text-pink-500">404 Not Found</span>
//           </p>
//         </div>
//       </header>
//      {/* 404 page  */}
//       <div className="flex justify-center items-center flex-col mb-20">
//         <Image
//           src={"/Group 123.png"}
//           alt="404 not found"
//           width={913}
//           height={644.43}
//         />

//         <Link href={'/'}><button className="w-[165px] h-[44px] text-white bg-pink-500 ">
//           Back to Home
//         </button></Link> 
//       </div>

//       {/* Footer Logos */}
//                 <div className=" justify-center flex  mb-28 mt-20">
//                   <Image 
//                   src={'/image 1174.png'}
//                   alt='logo'
//                   width={900}
//                   height={1114}
//                   />
//                 </div>
//     </div>
//   );
// }



import Image from "next/image";
import Link from "next/link";

export default function Error404() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-8 sm:py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-[28px] sm:text-[36px] font-bold font-[JosefinSans] text-gray-900">
            404 Not Found
          </h1>
          <p className="text-sm sm:text-base font-bold text-gray-500">
            Home / Pages / <span className="text-pink-500">404 Not Found</span>
          </p>
        </div>
      </header>

      {/* 404 Page */}
      <div className="flex justify-center items-center flex-col mb-10 sm:mb-20 px-4">
        <Image
          src={"/Group 123.png"}
          alt="404 not found"
          width={913}
          height={644.43}
          className="w-full max-w-md sm:max-w-xl lg:max-w-3xl"
        />
        <Link href={"/"}>
          <button className="w-[140px] sm:w-[165px] h-[40px] sm:h-[44px] mt-8 text-white bg-pink-500 hover:bg-pink-600 transition">
            Back to Home
          </button>
        </Link>
      </div>

      {/* Footer Logos */}
      <div className="flex justify-center mb-16 sm:mb-28 mt-10 sm:mt-20 px-4">
        <Image
          src={"/image 1174.png"}
          alt="footer logo"
          width={900}
          height={1114}
          className="w-full max-w-xs sm:max-w-lg"
        />
      </div>
    </div>
  );
}
