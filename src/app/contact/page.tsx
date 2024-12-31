import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
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
      <div className="container mx-auto px-4 mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2  mb-16">
          {/* Information Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#151875] font-[Josefin Sans] mb-4">
              Information About Us
            </h2>
            <p className="text-[#8A8FB9] mb-6 w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex flex-row mt-10">
              <span className="w-6 h-6 bg-[#5625DF] rounded-full mr-3"></span>
              <span className="w-6 h-6 bg-[#FF27B7] rounded-full mr-3"></span>
              <span className="w-6 h-6 bg-[#37DAF3] rounded-full mr-3"></span>
            </div>
          </div>

          {/* contact way  */}
          <div>
            <h1 className="text-[#151875] text-[36px] font-[Josefin  Sans] font-semibold mb-7">
              {" "}
              Contact Way
            </h1>

            <div className="space-y-7  grid grid-cols-2">
              <div className="flex items-center text-[#8A8FB9]">
                <span className="w-10 h-10 bg-[#5625DF] rounded-full mr-3 "></span>
                Tel: 877-67-88-99 <br />
                E-Mail: shop@store.com
              </div>
              <div className="flex items-center text-[#8A8FB9]">
                <span className="w-10 h-10 bg-[#FB2E86] rounded-full mr-3"></span>
                Support Forum <br />
                For over 24hr
              </div>
              <div className="flex items-center text-[#8A8FB9]">
                <span className="w-10 h-10 bg-orange-500 rounded-full mr-3"></span>
                20 Margaret st, London <br />
                Great britain, 3NM98-LK
              </div>
              <div className="flex items-center text-[#8A8FB9]">
                <span className="w-10 h-10 bg-green-500 rounded-full mr-3"></span>
                Free standard shipping
                <br /> on all orders
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-20 gap-0">
            <h2 className="text-3xl font-bold text-[#151875] mb-4">
              Get In Touch
            </h2>
            <p className="text-[#8A8FB9] mb-6 w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form className="space-y-11 w-[534px] h-[414px] ">
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  placeholder="Your E-mail*"
                  required
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject*"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Type Your Message*"
                rows={5}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-[157px] py-3 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Send Mail
              </button>
            </form>
          </div>
          {/* Illustration Section */}
          <div className="mt-20 mb-28">
            <Image
              src={"/Group 124.png"}
              alt="Illustration"
              width={723}
              height={692}
              className=" w-[723px] h-[692px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
