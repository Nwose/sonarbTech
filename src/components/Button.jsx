import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 hover:from-purple-700 hover:to-indigo-700 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
