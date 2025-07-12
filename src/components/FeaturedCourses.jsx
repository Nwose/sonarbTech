import React from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaRocket, FaBriefcase } from "react-icons/fa";

const highlights = [
  {
    icon: <FaChalkboardTeacher className="text-white text-2xl" />,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with real-world experience.",
    delay: 0,
  },
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "Cutting-edge Curriculum",
    description: "Stay ahead with the latest technologies and best practices.",
    delay: 0.15,
  },
  {
    icon: <FaBriefcase className="text-white text-2xl" />,
    title: "Career Guidance",
    description: "Comprehensive support to help you reach your goals.",
    delay: 0.3,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-pink-100 to-blue-100 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute top-0 left-[-50px] w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-[-60px] w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 animate-ping" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Why Choose SonarB Tech?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12"
        >
          We combine engaging tech education with expert guidance to launch your
          future.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-700 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
