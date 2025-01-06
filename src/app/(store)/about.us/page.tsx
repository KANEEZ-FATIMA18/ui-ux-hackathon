import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white h-auto">
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
      {/* main  */}
      <div className="flex justify-center items-center mt-[90px] gap-x-[40px]">
        {/* right image  */}
        <div className="">
          <Image src={"/Group 73.png"} alt="" width={570} height={409} />
        </div>
        {/* left text  */}
        <div>
          <h1 className="font-[JosefinSans] text-[36px] font-bold text-[#151875] w-[522px] h-[96px] mb-5">
            {" "}
            Know About Our Ecommerce Business,History
          </h1>
          <p className="w-[550px] h-[150px] text-[#8A8FB9] text-[16px] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ea
            eaque. Quidem ab laborum laudantium voluptatibus, ipsum aliquid
            minus in ullam distinctio culpa numquam id quod pariatur accusamus
            veritatis aperiam.
          </p>

          <button className="text-white bg-pink-500 text-lg px-4 py-2">
            Contact Us
          </button>
        </div>
      </div>

      {/* 2nd row */}
      <div className="mt-28">
        <h2 className="text-center font-[JosefinSans] text-4xl font-bold mb-8 text-black">
          Our Features
        </h2>

        {/* Offers Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-lg max-w-screen-xl mx-auto"
          style={{ margin: "0 auto" }} // Ensures the content is centered
        >
          {/* Offer 1 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
          >
            <div className="mt-12">
              <Image
                src="/free-delivery 1.png"
                alt="Offer 1"
                width={400}
                height={400}
                className="w-16 h-16 mx-auto "
              />
            </div>
            <div className="mt-6 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6 w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>

          {/* Offer 2 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
          >
            <div className="mt-12">
              <Image
                src="/cashback 1.png"
                alt="Offer 2"
                width={400}
                height={400}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="mt-6 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold mb-1">100% Cash Back</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6 w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>

          {/* Offer 3 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
          >
            <div className="mt-12">
              <Image
                src="/premium-quality 1.png"
                alt="Offer 3"
                width={400}
                height={400}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="mt-6 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6 w-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>

          {/* Offer 4 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: "transform 0.3s ease",
            }}
          >
            <div className="mt-12">
              <Image
                src="/24-hours-support 1.png"
                alt="Offer 4"
                width={400}
                height={400}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <div className="mt-6 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6 w-[200px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
        {/* 3rd row  */}
        <div className="w-full mt-44 mb-60 bg-[#FBFBFF] h-[503px] flex flex-col justify-center items-center">
          <div className="mt-2">
            <h2 className="text-center w-[304px] h-[26px] font-[JosefinSans] text-[42px] font-bold mb-20 text-black">
              Our Client Say!
            </h2>
          </div>
          {/* main  */}
          <div className="w-[689px] h-[265px] flex flex-col justify-center items-center">
            {/* image  */}
            <div>
                <Image src={'/Group 200.png'} alt=" " width={191} height={64}/>
            </div>
            <h1 className="font-semibold mt-7 text-[27px] font-[Lato]">Selina Gomez</h1>
            <h2 className="font-semibold mb-5 text-[10px] text-[#8A8FB9] font-[Lato]">Ceo At Webecy Digital</h2>
            <p className="font-bold mb-7 text-[16px] w-[689px] h-[97px] text-center text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            <div>
            <Image src={'/Group 89.png'} alt="" width={100} height={100}/>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
