import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-yellow-100 via-yellow-100 to-pink-100 shadow-md z-50">
      {/* Nav Container */}
      <div className="w-full flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <img src={logo} alt="SonarB Logo" className="w-12 h-12" />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-md font-medium text-gray-700">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Service</li>
          <li className="hover:text-gray-900 cursor-pointer">Courses</li>
          <li className="hover:text-gray-900 cursor-pointer">Blog</li>
        </ul>

        {/* Desktop CTA Button */}
        <button className="hidden md:block animated-cta px-5 py-2 font-semibold rounded-full text-white shadow-md">
          Get Started
        </button>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 px-6 pb-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-gray-700">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Service</li>
          <li className="hover:text-gray-900 cursor-pointer">Courses</li>
          <li className="hover:text-gray-900 cursor-pointer">Blog</li>
        </ul>
        <button className="mt-4 w-full animated-cta py-2 font-semibold rounded-full text-white shadow-md">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
