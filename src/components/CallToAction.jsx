import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 py-20 px-6 md:px-16 overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute top-[-20px] left-[-30px] w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-[-20px] right-[-30px] w-48 h-48 bg-purple-300 rounded-full blur-3xl opacity-30 animate-ping" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center gap-2 justify-center text-purple-700 text-sm font-semibold uppercase mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaRocket />
          Let’s Build the Future
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Ready to Launch Your Tech Journey?
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Join SonarB Tech Institute and explore a world of fun, learning, and
          future-ready skills with programs built just for curious minds.
        </p>

        <Button className="mx-auto flex items-center gap-2 px-6 py-3 text-lg">
          Get Started <FaArrowRight />
        </Button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
