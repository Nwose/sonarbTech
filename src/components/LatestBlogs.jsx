import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPenNib } from "react-icons/fa";
import BlogCard from "./BlogCard";
import Button from "./Button";

const blogs = [
  {
    title: "Future of Web Dev 2024",
    excerpt: "Trends & emerging tech shaping web dev.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
    author: "Dr. Sarah Chen",
    date: "Dec 1, 2024",
    readTime: "5",
    tags: ["Trends", "Web Dev"],
  },
  {
    title: "Scalable Apps with Microservices",
    excerpt: "Designing clean, modular systems with microservices.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
    author: "Mark Johnson",
    date: "Nov 28, 2024",
    readTime: "7",
    tags: ["Microservices", "Architecture"],
  },
];

const blogVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const LatestBlogs = () => (
  <section className="relative bg-gradient-to-br from-yellow-50 via-pink-100 to-blue-100 py-20 px-6 md:px-16 overflow-hidden">
    {/* Animated blobs */}
    <div className="absolute top-[-30px] left-[-30px] w-28 h-28 bg-yellow-300 rounded-full blur-2xl opacity-30 animate-ping" />
    <div className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse" />

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between mb-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <FaPenNib className="text-purple-600" />
            Latest Blogs
          </h2>
          <p className="text-lg text-gray-700">
            Insights, tips, and industry news
          </p>
        </div>

        <Link to="/blog">
          <Button className="mt-4 md:mt-0 flex items-center gap-2">
            View All Blogs <FaPenNib />
          </Button>
        </Link>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={blogVariants}
            whileHover={{ rotateZ: 1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <BlogCard {...blog} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestBlogs;
