import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaReact, FaRobot, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Advanced JavaScript Development",
    description: "Master modern JS, async programming & patterns.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    duration: "12 weeks",
    level: "Advanced",
    price: "$299",
    tags: ["JavaScript", "ES6+", "Async", "Professional"],
    icon: <FaLaptopCode />,
  },
  {
    title: "React & TypeScript Mastery",
    description: "Build scalable apps with React, TS, Hooks.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    duration: "10 weeks",
    level: "Intermediate",
    price: "$249",
    tags: ["React", "TypeScript", "Hooks"],
    icon: <FaReact />,
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Intro to ML using Python & real-world examples.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    duration: "8 weeks",
    level: "Beginner",
    price: "$199",
    tags: ["ML", "Python", "AI"],
    icon: <FaRobot />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const DisplayedCourses = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-pink-100 to-blue-100 py-20 px-6 md:px-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-30px] left-[-40px] w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-[-30px] right-[-40px] w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40 animate-ping" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-700">
              Explore our most popular learning adventures
            </p>
          </div>

          <Link to="/courses">
            <button className="animated-cta mt-4 md:mt-0 px-5 py-2 font-semibold rounded-full text-white flex items-center gap-2">
              View All Courses <FaArrowRight />
            </button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayedCourses;
