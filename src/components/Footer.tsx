import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="bg-[#EEEFFB] text-[#8A8FB9] ">
      <div className="max-w-[1920px]   mx-auto p-8 lg:p-16 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Sign-Up */}
        <div>
          {/* Replace with your logo */}
          <div className="mb-4">
            <Image
                src={'/Hekto.png'} // Replace with your logo path
              alt="logo"
              width={110}
              height={38}
            />
          </div>
          <div className="flex items-center  mb-4">
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="p-2 rounded bg-white text-[#8A8FB9] focus:ring-2 focus:ring-blue-500 outline-none flex-1"
            />
            <button
              type="submit"
              className="py-2 px-4 text-white font-bold bg-[#FB2E86] rounded-md hover:bg-[#fb2e87be] transition"
            >
              Sign Up
            </button>
          </div>
          <h4 className="text-sm font-bold mb-1">Contact Info</h4>
          <p className="text-sm">
          17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Column 2: Categories */}
        <div>
          <h3 className="text-lg text-black font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/makeup" className="hover:underline">
              Laptops & Computers
              </Link>
            </li>
            <li>
              <Link href="/skincare" className="hover:underline">
              Cameras & Photography
              </Link>
            </li>
            <li>
              <Link href="/haircare" className="hover:underline">
              Smart Phones & Tablets
              </Link>
            </li>
            <li>
              <Link href="/fragrances" className="hover:underline">
              Video Games & Consoles
              </Link>
            </li>
            <li>
              <Link href="/fragrances" className="hover:underline">
              Waterproof Headphones
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div>
          <h3 className="text-lg text-black font-bold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:underline">
              My Account
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="hover:underline">
              Discount
              </Link>
            </li>
            <li>
              <Link href="/return-policy" className="hover:underline">
                Return 
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:underline">
              Orders History
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:underline">
              Order Tracking
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Pages */}
        <div>
          <h3 className="text-lg text-black font-bold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#E7E4F8] flex flex-col md:flex-row items-center justify-around px-8 py-4">
        {/* Left Side: Text */}
        <p className=" text-[#8A8FB9]">&copy;Webecy - All Rights Reserved</p>
        {/* Right Side: Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://facebook.com" aria-label="Facebook">
          <FontAwesomeIcon icon={faInstagram} className='w-[19.42px] h-[19.42px] bg-blue-800 rounded text-white' />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
           
          <FontAwesomeIcon icon={faFacebookF} className='w-[19.42px] h-[19.42px] bg-blue-800 rounded text-white' />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} className='w-[19.42px] h-[19.42px] bg-blue-800 rounded text-white' />
          </Link>
        </div>
      </div>
    </footer>
  );
}

