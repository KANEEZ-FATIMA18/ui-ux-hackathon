import Image from "next/image";
import RelatedProducts from "./related.products/page";
import DetailsSection from "./description/page";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FaHeart } from "react-icons/fa";

export default function ProductDetails() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-[36px] font-bold font-[JosefinSans] text-black">
            Products Details
          </h1>
          <p className="text-sm font-bold text-gray-500">
            Home / Pages /{" "}
            <span className="text-pink-500">Products Details</span>
          </p>
        </div>
      </header>
      {/* Product Details */}
      <div className="flex justify-center px-4">
        <div className="w-full lg:w-[1170px] mt-12 shadow-lg bg-white flex flex-col lg:flex-row lg:items-center p-4 lg:p-8 space-y-8 lg:space-y-0 lg:space-x-6">
          {/* Small Images */}
          <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 justify-center">
            <Image
              src={"/Rectangle 134.png"}
              alt=""
              width={151}
              height={155}
              className="object-cover"
            />
            <Image
              src={"/Rectangle 136.png"}
              alt=""
              width={151}
              height={155}
              className="object-cover"
            />
            <Image
              src={"/Rectangle 137.png"}
              alt=""
              width={151}
              height={155}
              className="object-cover"
            />
          </div>
          {/* Large Image */}
          <div className="flex justify-center">
            <Image
              src={"/Rectangle 138.png"}
              alt=""
              width={375}
              height={487}
              className="object-contain"
            />
          </div>
          {/* Product Details */}
          <div className="flex-1">
            <h1 className="font-[JosefinSans] font-semibold text-[28px] lg:text-[36px] text-[#0D134E]">
              Playwood Arm Chair
            </h1>
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-500">★★★★☆</div>
              <span className="text-gray-600 text-sm ml-2">(22)</span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-lg lg:text-xl font-bold text-gray-900 mr-2">
                $32.00
              </span>
              <span className="text-red-500 line-through">$32.00</span>
            </div>
            <h2 className="text-md text-black font-bold mb-2">Color</h2>
            <p className="text-gray-700 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <button className="text-[#151875] text-lg font-semibold  px-4 py-2 hover:bg-[#151875] hover:text-white transition">
                Add To Cart
              </button>
              <a
                href="/cart"
                className="flex items-center text-xl text-blue-700 gap-2 cursor-pointer hover:text-blue-800"
              >
                <FaHeart />
              </a>
            </div>
            <div className="text-lg text-[#151875] mb-2">
              <p className="font-medium">Categories:</p>
            </div>
            <div className="text-lg text-[#151875] mb-2">
              <p className="font-medium">Tags:</p>
            </div>
            <div className="text-lg text-[#151875] mb-2">
              <p className="font-medium">Share:</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-[19.42px] h-[19.42px] bg-blue-800 rounded-full p-2 text-white"
                />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[19.42px] h-[19.42px] bg-pink-500 rounded-full p-2 text-white"
                />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="w-[19.42px] h-[19.42px] bg-blue-800 rounded-full p-2 text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <DetailsSection />
      <RelatedProducts />
    </div>
  );
}
