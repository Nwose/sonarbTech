import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = "text-md font-medium transition hover:text-gray-900";
  const activeClass =
    "text-purple-700 font-semibold underline underline-offset-4";

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-100 via-yellow-100 to-pink-100 shadow-md z-50">
      {/* Nav Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="SonarB Logo" className="w-12 h-12" />
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
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
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${linkClass} ${isActive ? activeClass : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full animated-cta py-2 font-semibold rounded-full text-white shadow-md">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
