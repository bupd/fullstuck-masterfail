"use client";

import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="p-5 bg-black text-white shadow lg:flex lg:items-center lg:justify-between z-50 relative">
      <div className="flex flex-row lg:flex-row justify-between items-center ">
        <a
          href="/"
          className="text-2xl font-sans cursor-pointer flex items-center"
        >
          <img alt="logo" className="lg:h-14 h-10 inline" src="/favicon.ico" />
          <p className="font-extrabold text-2xl">Nirmal</p>
        </a>

        <div className="flex flex-row lg:hidden">
          <div className="mx-4 my-6 lg:my-0 lg:hidden">
            <SignedOut>
              <button className="bg-[#BD54FF] text-white font-sans duration-500 px-5 py-4 hover:bg-blue-500 rounded-full text-nowrap">
                <SignInButton />
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-3xl cursor-pointer px-2 block lg:hidden z-50" // Added z-index to ensure it's clickable
          >
            {isOpen ? (
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
                ></path>
              </svg>
            ) : (
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"
                ></path>
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`menu transition-all ease-in-out duration-500 lg:flex lg:ml-5 lg:items-center lg:z-auto lg:mx-2 lg:static absolute w-full left-0 lg:w-fit lg:gap-3 xl:gap-10 lg:flex-row lg:py-0 py-4 lg:pl-0 pl-7 bg-black lg:bg-transparent z-40 ${
          isOpen ? "top-[80px] opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
        <li className="mx-4 my-6 lg:m-0">
          <a href="/" className="text-xl hover:text-cyan-500 duration-500">
            Home
          </a>
        </li>
        <li className="mx-4 my-6 lg:m-0">
          <a
            href="#services"
            className="text-xl hover:text-cyan-500 duration-500"
          >
            Our Services
          </a>
        </li>
        <li className="mx-4 my-6 lg:m-0">
          <a href="#whyus" className="text-xl hover:text-cyan-500 duration-500">
            Why Choose Us
          </a>
        </li>
        <li className="mx-4 my-6 lg:m-0">
          <a
            href="#industry"
            className="text-xl hover:text-cyan-500 duration-500"
          >
            Industry
          </a>
        </li>
        <li className="mx-4 my-6 lg:m-0">
          <a
            href="#testimonial"
            className="text-xl hover:text-cyan-500 duration-500"
          >
            Testimonials
          </a>
        </li>
        <li className="mx-4 my-6 lg:m-0">
          <a
            href="#contact"
            className="text-xl hover:text-cyan-500 duration-500"
          >
            Contact Us
          </a>
        </li>

        {/* "Sign In /Up" button for mobile view */}
      </ul>

      {/* "Sign In /Up" button for desktop view */}
      <li className="mx-4 my-6 lg:m-0 hidden lg:block font-bold">
        <SignedOut>
          <button className="bg-[#BD54FF] text-white font-sans duration-500 px-5 py-3 hover:bg-slate-500 rounded-full text-nowrap">
            <SignInButton />
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </li>
    </div>
  );
};

export default Navbar;
