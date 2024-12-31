import Image from "next/image";
import Link from "next/link";
export default function MyAccount() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-[36px] font-bold font-[JosefinSans] text-black">
            Shop List
          </h1>
          <p className="text-sm font-bold text-gray-500">
            Home / Pages / <span className="text-pink-500">Shop List</span>
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

        {/* grids  */}
        <div className=" shadow-lg rounded-lg  mt-24">
          {/* 1st grid  */}
          <div className="w-[1141px] h-[254px] flex items-center mt-20 bg-[#FFFFFF]">
            {/* left image  */}
            <div>
              <Image
                src={"/Rectangle 32.png"}
                alt=""
                width={313.63}
                height={217.56}
                className="m-4"
              />
            </div>

            {/* right side  */}
            <div className="">
              <h1 className="font-[JosefinSans] font-semibold text-[19.88px] text-[#111c85]">
                Accumsan tincidunt
              </h1>
              {/* Color Dots */}
              <div className="flex space-x-2 mt-2">
                <span className="w-4 h-4 rounded-full bg-[#f48c06]"></span>
                <span className="w-4 h-4 rounded-full bg-pink-500"></span>
                <span className="w-4 h-4 rounded-full bg-[#8568FF]"></span>
              </div>
              {/* Price */}
              <div className="flex items-center">
                <span className="text-lg font-bold text-[#151875]">$26.00</span>
                <span className="text-sm font-medium text-pink-500 line-through ml-2">
                  $42.00
                </span>
              </div>

              <p className="font-[Lato] text-[17.67px] w-[591.93px] h-[46.38px] text-[#9295aa]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
