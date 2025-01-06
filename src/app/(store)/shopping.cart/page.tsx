import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "Ut diam consequat",
    color: "Brown",
    size: "Xl",
    price: 32.0,
    total: 32.0,
    image: "/Rectangle 34.png",
  },
  {
    id: 2,
    name: "Vel faucibus posuere",
    color: "Black",
    size: "Xl",
    price: 32.0,
    total: 32.0,
    image: "/Rectangle 35.png",
  },
  {
    id: 3,
    name: "Ac vitae vestibulum",
    color: "Red",
    size: "Xl",
    price: 32.0,
    total: 32.0,
    image: "/Rectangle 36.png",
  },
  {
    id: 4,
    name: "Elit massa diam",
    color: "White",
    size: "Xl",
    price: 32.0,
    total: 32.0,
    image: "/Rectangle 37.png",
  },
  {
    id: 5,
    name: "Proin pharetra elementum",
    color: "Orange",
    size: "Xl",
    price: 32.0,
    total: 32.0,
    image: "/Rectangle 38.png",
  },
];

const Cart = () => {
  return (
    <div className="min-h-screen bg-white p-4  md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Table Section */}
        <div className="col-span-2 bg-white ">
          <div className="overflow-x-auto">
            <table className="w-full text-left mt-16 mb-14   border-collapse">
              <thead className="">
                <tr className=" uppercase text-[20px] text-[#1D3178] leading-normal">
                  <th className="py-3 px-6">Product</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6">Quantity</th>
                  <th className="py-3 px-6">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm   divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="py-4 px-6 flex items-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={83}
                        height={87}
                        className="w-[83px] h-[87px] rounded-md mr-4"
                      />
                      <div>
                        <p className="font-semibold text-[14px]">{product.name}</p>
                        <p className="text-gray-400 text-[14px]">
                          Color: {product.color} <br /> Size: {product.size}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <input
                        type="number"
                        className="w-16 border border-gray-300 rounded-md text-center focus:ring focus:ring-blue-200"
                        defaultValue={1}
                      />
                    </td>
                    <td className="py-4 px-6">${product.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Buttons Section */}
          <div className="flex justify-between items-center px-6 py-4">
            <button className="bg-pink-500 text-white px-6 py-2  hover:bg-pink-600">
              Update Cart
            </button>
            <button className="bg-pink-500 text-white px-6 py-2  hover:bg-pink-600">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals and Shipping Section */}
        <div className="flex flex-col space-y-16 md:col-span-1">
          {/* Cart Totals */}
          <div className="flex flex-col justify-center mt-16 items-center">
            <h2 className="text-[25px] font-bold mb-6 text-[#1D3178] items-center">
              Cart Totals
            </h2>
            <div className="bg-[#F4F4FC] shadow-sm rounded-md p-6 w-[371px] h-[284px] border border-gray-200">
              <div className="flex justify-between items-center text-gray-600 mb-4 pb-4  border-b border-gray-400">
                <span className="text-lg font-bold text-[#1D3178]">
                  Subtotals:
                </span>
                <span className="font-medium text-[#1D3178] ">£219.00</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 mb-7  pb-4 border-b border-gray-400">
                <span className="text-lg font-bold text-[#1D3178] ">
                  Totals:
                </span>
                <span className="font-medium text-[#1D3178] ">£325.00</span>
              </div>
              <div className="text-sm text-gray-500  flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Shipping & taxes calculated at checkout
              </div>
              <button className="w-full  bg-green-500 text-white py-3  mt-7 text-lg font-semibold hover:bg-green-600 transition duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Calculate Shipping */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[25px] text-[#1D3178]  font-bold mb-4">
              Calculate Shipping
            </h2>
            <div className="w-[371px] h-[284px] mt-5 bg-[#f2f1f6] shadow-sm rounded-md p-6 ">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full mb-4 border-b bg-[#f2f1f6] border-gray-400  p-2 focus:ring focus:ring-white"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full mb-4 border-b bg-[#f2f1f6] border-gray-400  p-2 focus:ring focus:ring-white"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full mb-4 border-b bg-[#f2f1f6] border-gray-400  p-2 focus:ring focus:ring-white"
              />
              <button className="w-[179px] h-[41px] bg-pink-500 text-white py-2 mt-7 hover:bg-pink-600">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
