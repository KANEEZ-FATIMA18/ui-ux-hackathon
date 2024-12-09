
'use client';
import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import necessary icons
import { useState } from 'react'; // To manage dropdown state

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-xs sm:text-sm flex items-center justify-center">
      {/* TopBar Container */}
      <div className="w-full max-w-[1200px] flex flex-wrap items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-2 sm:mb-0">
          {/* Email */}
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaEnvelope />
            <span className="truncate">mhhasanul@gmail.com</span>
          </a>
          {/* Phone */}
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span>(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Language Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-10">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-10">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Login */}
          <Link
            href="/my-account"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-200"
          >
            <FaUser />
            <span>Login</span>
          </Link>

          {/* Wishlist */}
          <a
            href="/wishlist"
            className="flex items-center gap-2 cursor-pointer hover:text-gray-200"
          >
            <FaHeart />
            <span>Wishlist</span>
          </a>

          {/* Cart */}
          <a href="/cart" className="cursor-pointer hover:text-gray-200">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;