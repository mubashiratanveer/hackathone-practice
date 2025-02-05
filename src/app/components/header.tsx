"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions


import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <header className="flex bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide relative z-50">
      <div className="flex  mx-auto w-full">
        <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full font-bold">
          <button onClick={toggleDropdown}><IoReorderThree  className="w-10 h-10"/> </button>
          {" "}
          {isOpen && (
            <div
              className="origin-top-left absolute  mt-2 w-56 top-10
           rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href={`#${category.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {" "}
                    {category}{" "}
                  </a>
                ))}
              </div>{" "}
            </div>
          )}
          <h3 className="font-bold text-2xl">Exclusive</h3>
          <ul className="lg:flex lg:gap-x-3 text-right  md:ml-auto flex flex-wrap  ">
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="hero"
                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                Home{" "}
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="contact"
                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                Contact
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="about"
                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                About
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                href="sign-up"
                className="text-[#333] hover:text-[#007bff] text-[15px] block font-semibold"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
            <div
              className='flex  bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden'>
              <input type='text' placeholder='what are you looking for?' className='w-full text-sm bg-transparent outline-none pr-2' />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                className="cursor-pointer fill-gray-600">
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div>


          <div className="flex items-center sm:space-x-8 space-x-6">
            <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer fill-[#333] inline w-5 h-5"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  />
                </svg>
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  0
                </span>
              </div>
              <span className="text-[13px] font-semibold text-[#333]">
                Wishlist
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  className="cursor-pointer fill-[#333] inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  0
                </span>
              </div>
              <span className="text-[13px] font-semibold text-[#333]">
                Cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
