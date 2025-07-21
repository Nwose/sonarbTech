import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Lottie from "lottie-react";
import blogHeroAnimation from "../assets/blogHeroAnimation.json";

const blogPosts = [
  {
    title: "5 Fun Coding Projects for Kids",
    excerpt:
      "Discover exciting, age-appropriate programming activities that make learning fun and engaging.",
    image:
      "https://plus.unsplash.com/premium_photo-1661349780455-ac0ef87e7045?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "July 1, 2025",
  },
  {
    title: "Why Early Tech Education Matters",
    excerpt:
      "Explore how teaching kids to code fosters creativity, logical thinking, and problem-solving skills.",
    image:
      "https://plus.unsplash.com/premium_photo-1664104459228-067f1920ff90?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // ✅ new working image
    date: "June 15, 2025",
  },
  {
    title: "Top 10 Free Tools for Young Coders",
    excerpt:
      "A curated list of platforms and apps that help children learn programming in an interactive way.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // ✅ new working image
    date: "May 30, 2025",
  },
];

const Blog = () => {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100">
        {/* Lottie Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Lottie animationData={blogHeroAnimation} loop autoPlay />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
            SonarB Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Inspiring stories, fun projects, and tech updates for curious young
            minds.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition transform hover:scale-105">
            Read Our Posts
          </button>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 rounded-2xl shadow-md overflow-hidden border border-yellow-200"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-sm font-semibold text-yellow-700 hover:underline">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>
          <p className="text-lg mb-8">
            Be part of the SonarB Tech community. Share, learn, and grow with
            us.
          </p>
          <button className="animated-cta px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-white">
            Get Started <FaArrowRight className="inline ml-2" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
