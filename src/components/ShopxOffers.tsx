import React from 'react';
import Image from 'next/image';

const ShopexOffers = () => {
  return (
    <>
      {/* Shopex Offers Section */}
      <div
        className="relative"
        style={{
          padding: '40px 20px',
          width: '100%',
        }}
      >
        {/* Section Heading */}
        <h2 className="text-center font-[JosefinSans] text-4xl font-bold mb-8 text-[#151875]">
          What Shopex Offers!
        </h2>

        {/* Offers Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 shadow-lg max-w-screen-xl mx-auto"
          style={{ margin: '0 auto' }} // Ensures the content is centered
        >
          {/* Offer 1 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
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
            <div className='mt-6'>
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida. </p>
            </div>
          </div>

          {/* Offer 2 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
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
            <div className='mt-6'>
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>

          {/* Offer 3 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
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
            <div className='mt-6'>
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>

          {/* Offer 4 */}
          <div
            className="bg-white w-full h-[320px] border rounded-md shadow-md p-4 text-center"
            style={{
              transition: 'transform 0.3s ease',
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
            <div className='mt-6'>
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 mb-2 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopexOffers;
