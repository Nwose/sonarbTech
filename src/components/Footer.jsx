import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // Update path if necessary

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 text-gray-800 pt-16 pb-8 px-6 md:px-16 mt-0 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-[-30px] left-[-40px] w-40 h-40 bg-pink-200 rounded-full blur-2xl opacity-30 animate-ping" />
      <div className="absolute bottom-[-30px] right-[-40px] w-44 h-44 bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About with logo */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="SonarB Logo" className="w-16 h-16 mb-4" />
          <p className="text-sm text-gray-700">
            Inspiring the next generation with playful, powerful tech education
            designed to spark creativity and build real-world skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-700">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-purple-600 cursor-pointer">Home</li>
            <li className="hover:text-purple-600 cursor-pointer">Courses</li>
            <li className="hover:text-purple-600 cursor-pointer">About</li>
            <li className="hover:text-purple-600 cursor-pointer">Blog</li>
            <li className="hover:text-purple-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-700">
            Stay Connected
          </h4>
          <p className="text-sm text-gray-700 mb-4">
            Reach out to our friendly support team or follow us online.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xl hover:text-purple-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl hover:text-purple-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-purple-600">
              <FaInstagram />
            </a>
            <a
              href="mailto:info@sonarb.com"
              className="text-xl hover:text-purple-600"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} SonarB Tech Institute. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
