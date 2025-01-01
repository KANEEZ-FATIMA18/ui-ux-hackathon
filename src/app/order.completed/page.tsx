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

      <div className=" flex items-center justify-center py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Your Order Is Completed!
          </h2>
          <p className="text-gray-600 mb-20 w-[620px] text-center">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className="px-6 py-3 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            Continue Shopping
          </button>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-7 top-1/2 transform -translate-y-1/2 hidden lg:block w-[1200px] border-t-2 border-dashed border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
