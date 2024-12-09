import React from "react";

const NewsletterBanner: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-64 md:h-72 lg:h-[462px] flex items-center justify-center"
      style={{
        backgroundImage: "url('/Rectangle 102.png')", // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative z-10 text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-[JosefinSans]  font-semibold text-blue-900 mb-4">
          Get Latest Update By Subscribe <br /> Our Newsletter
        </h2>
        <button className="bg-pink-500 mt-7 text-white px-6 py-2 text-sm md:text-base font-medium  hover:bg-pink-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default NewsletterBanner;
