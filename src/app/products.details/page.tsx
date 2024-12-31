
import Image from "next/image";
export default function MyAccount() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header */}
        <header className="bg-gray-100 py-14">
          <div className="container mx-auto px-4">
            <h1 className="text-[36px] font-bold font-[JosefinSans] text-black">
              Products Details
            </h1>
            <p className="text-sm font-bold text-gray-500">
              Home / Pages / <span className="text-pink-500">Products Details</span>
            </p>
          </div>
        </header>
        {/* grid  */}
        <div className="w-[1170px] h-[504px] mt-32 shadow-xl flex items-center bg-[#ffffff] ">
          {/* small image  */}
          <div className="m-4 ">
            <Image src={'/Rectangle 134.png'} alt="" width={151} height={155} className="space-y-5"/>
            <Image src={'/Rectangle 136.png'} alt="" width={151} height={155}/>
            <Image src={'/Rectangle 137.png'} alt="" width={151} height={155}/>

          </div>
        </div>
        </div> )}