import Image from "next/image";
import Link from "next/link";

export default function MyAccount() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-[36px] font-bold font-[JosefinSans] text-gray-900">
            404 Not Found
          </h1>
          <p className="text-sm font-bold text-gray-500">
            Home / Pages / <span className="text-pink-500">404 Not Found</span>
          </p>
        </div>
      </header>
     {/* 404 page  */}
      <div className="flex justify-center items-center flex-col mb-20">
        <Image
          src={"/Group 123.png"}
          alt="404 not found"
          width={913}
          height={644.43}
        />

        <Link href={'/'}><button className="w-[165px] h-[44px] text-white bg-pink-500 ">
          Back to Home
        </button></Link> 
      </div>

      {/* Footer Logos */}
                <div className=" justify-center flex  mb-28 mt-20">
                  <Image 
                  src={'/image 1174.png'}
                  alt='logo'
                  width={900}
                  height={1114}
                  />
                </div>
    </div>
  );
}
