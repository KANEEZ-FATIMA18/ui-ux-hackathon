import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-[36px] font-bold font-[JosefinSans] text-blue-900">
            Shop Grid Default
          </h1>
          <p className="text-sm font-bold text-gray-500">
            Home. Pages.{" "}
            <span className="text-pink-500">Shop Grid Default</span>
          </p>
        </div>
      </header>

      {/* 2nd section  */}
      <div className="max-w-7xl mt-40 mx-auto">
        <div className="flex justify-between items-center">
          {/* Title */}
          <div className="text-xl font-bold text-[#03045e]">
            Ecommerce Accesories & Fashion item
          </div>

          {/* Filter Section */}
          <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-1">
              <span className="text-sm text-[#03045e]">Per Page:</span>
              <input
                type="number"
                className="w-16 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-[#03045e]">Sort By:</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#03045e]">View:</span>
              <button className="w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-blue-500">
                <div className="grid grid-cols-2 gap-0.5">
                  <span className="w-2 h-2 bg-[#03045e]"></span>
                  <span className="w-2 h-2 bg-[#03045e]"></span>
                  <span className="w-2 h-2 bg-[#03045e]"></span>
                  <span className="w-2 h-2 bg-[#03045e]"></span>
                </div>
              </button>
              <button className="w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-blue-500">
                <div className="flex flex-col space-y-0.5">
                  <span className="w-5 h-0.5 bg-[#03045e]"></span>
                  <span className="w-5 h-0.5 bg-[#03045e]"></span>
                  <span className="w-5 h-0.5 bg-[#03045e]"></span>
                </div>
              </button>
              <input
                type="number"
                className="w-36 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          About 9,620 results (0.62 seconds)
        </div>

        {/* grids */}
        <div className="grid grid-cols-4 mt-40 gap-y-20 justify-center items-center">
          {/* 1 grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/image 9.png"}
                alt="Product Image"
                width={201}
                height={201}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 2nd grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#EBF4F3] h-[280px] flex justify-center items-center">
              <Image
                src={"/image 1165.png"}
                alt="Product Image"
                width={201}
                height={201}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 3rd grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#f6f7fb] h-[280px] flex justify-center items-center">
              <Image
                src={"/image 1173.png"}
                alt="Product Image"
                width={201}
                height={201}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 3rd grid */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/10011 1.png"}
                alt="Product Image"
                width={201}
                height={201}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 4th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/unnamed 1.png"}
                alt="Product Image"
                width={128}
                height={139}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 5th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/1562173100-movado-connect-1562173094 2.png"}
                alt="Product Image"
                width={154}
                height={158}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 6th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/purepng 1.png"}
                alt="Product Image"
                width={114}
                height={144}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 7th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/image 1164.png"}
                alt="Product Image"
                width={167}
                height={167}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 8th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/res_7e24bf6d78bbb2518489d0af847413c9_450x450_fcp0 2.png"}
                alt="Product Image"
                width={170}
                height={151}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 9th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/cam 2.png"}
                alt="Product Image"
                width={169}
                height={158}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 10th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLnBuZw 1.png"}
                alt="Product Image"
                width={176}
                height={176}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
          {/* 11th grid  */}
          <div className="w-[270px] h-[363px] bg-white flex flex-col items-center">
            {/* Image */}
            <div className="w-[270px] bg-[#F6F7FB] h-[280px] flex justify-center items-center">
              <Image
                src={"/10011 1 (1).png"}
                alt="Product Image"
                width={186}
                height={186}
              />
            </div>
            {/* Title */}
            <h2 className="text-lg font-bold text-center text-[#03045e] mt-4">
              Vel elit euismod
            </h2>
            {/* Color Dots */}
            <div className="flex space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center mt-3">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="text-sm font-medium text-pink-500 line-through ml-2">
                $42.00
              </span>
            </div>
          </div>
        </div>

        {/* Footer Logos */}
        <div className=" flex justify-center mb-32  mt-16">
          <Image src={"/image 1174.png"} alt="logo" width={900} height={1114} />
        </div>
      </div>
    </div>
  );
}
