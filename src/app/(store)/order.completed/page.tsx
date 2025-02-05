import Image from "next/image";

export default function OrderCompleted() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-100 py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-[36px] font-bold font-[JosefinSans] text-black">
            About Us
          </h1>
          <p className="text-sm font-bold text-gray-500">
            Home. Pages. <span className="text-pink-500">About Us</span>
          </p>
        </div>
      </header>

      <div>
            <Image src={'/Group.png'} alt="" width={94} height={94}/>
          </div>

      <div className=" flex items-center justify-center py-10">
        <div className=" mx-auto  w-[625px] h-[326px] mt-16 text-center">
          <div className="flex justify-center mb-7 items-center flex-col">
            <Image
              src={"/Ellipse 70.png"}
              alt=""
              width={65}
              height={65}
              className="object-cover bg-gray-200 border-[2px] rounded-[27px] "
            />

            <Image
              src={"/Vector 15.png"}
              alt=""
              width={46.08}
              height={36.91}
              className="absolute w-[46.08px] h-[36.91px]"
            />
          </div>
          <h2 className="text-3xl font-bold  text-black mb-7">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-600  w-[625px]  leading-[30px]">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className="px-6 py-3 mt-11 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            Continue Shopping
          </button>

          <div className="relative mt-16">
            <div className="absolute left-2   top-1/2 transform -translate-y-1/2 hidden lg:block w-[1100px] border-t-2 border-dashed border-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
