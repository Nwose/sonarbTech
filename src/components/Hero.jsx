import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaBook, FaGraduationCap } from "react-icons/fa";

import heroImage from "../assets/EduTech.jpg"; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 text-gray-900 min-h-screen px-6 md:px-16 py-8  overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-10 left-5 w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-40 animate-pulse" />
      <div className="absolute bottom-16 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-ping" />

      {/* Navbar */}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 py-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Learning Tech Made Fun at{" "}
            <span className="text-purple-600">SonarB Institute</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            Dive into tech adventures, guided by friendly instructors in an
            exciting and creative learning space designed just for young minds.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="animated-cta px-6 py-3 rounded-full flex items-center gap-3 text-white font-medium"
          >
            Learn <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Hero Image + Floating Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="rounded-[40px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-4 border-white">
            <img
              src={heroImage}
              alt="Kids learning"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            className="absolute top-[-30px] left-[-20px] bg-white p-4 rounded-xl shadow-xl flex items-center gap-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaBook className="text-yellow-500 text-xl" />
            <div>
              <p className="text-purple-600 font-bold text-lg">45+</p>
              <p className="text-sm text-gray-500">Tech Programs</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[-30px] right-[-20px] bg-white p-4 rounded-xl shadow-xl flex items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            <FaGraduationCap className="text-blue-500 text-xl" />
            <div>
              <p className="text-purple-600 font-bold text-lg">6.3K</p>
              <p className="text-sm text-gray-500">Happy Students</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
