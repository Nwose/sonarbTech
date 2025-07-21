import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Lottie from "lottie-react";
import exploreAnimation from "../assets/exploreAnimation.json";

const Badge = ({ children, variant = "primary" }) => {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2";
  const styles =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800"
      : "bg-white text-gray-900 border border-gray-900";

  return <span className={`${base} ${styles}`}>{children}</span>;
};

const levelColorMap = {
  Beginner: "bg-green-600",
  Intermediate: "bg-yellow-600",
  Advanced: "bg-red-600",
};

const CourseCard = ({
  title,
  description,
  image,
  duration,
  level,
  price,
  tags,
  category,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-pink-100 shadow-md rounded-2xl overflow-hidden flex flex-col h-full border border-yellow-200"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span
          className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${
            levelColorMap[level] || "bg-gray-500"
          }`}
        >
          {level}
        </span>
        <span className="absolute top-2 right-2 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded shadow">
          {price}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4 flex-1">{description}</p>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{duration}</span>
        </div>

        <div className="mb-2">
          <Badge variant="secondary">{category}</Badge>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              className="bg-white text-gray-700 border border-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <button className="mt-auto px-4 py-2 animated-cta text-white rounded-full font-semibold shadow hover:opacity-90 transition duration-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const categories = [
    "All",
    "Web Development",
    "Data Science",
    "Mobile Development",
    "DevOps",
    "AI/ML",
  ];

  const courses = [
    {
      title: "Advanced JavaScript Development",
      description:
        "Master modern JavaScript concepts, ES6+, async programming, and advanced patterns used in professional development.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      duration: "12 weeks",
      level: "Advanced",
      price: "$299",
      tags: ["JavaScript", "ES6+", "Async", "Professional"],
      category: "Web Development",
    },
    {
      title: "React & TypeScript Mastery",
      description:
        "Build scalable web applications using React with TypeScript, including hooks, context, and advanced patterns.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      duration: "10 weeks",
      level: "Intermediate",
      price: "$249",
      tags: ["React", "TypeScript", "Hooks", "Web Development"],
      category: "Web Development",
    },
    {
      title: "Machine Learning Fundamentals",
      description:
        "Introduction to machine learning concepts, algorithms, and practical implementation using Python and popular frameworks.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      duration: "8 weeks",
      level: "Beginner",
      price: "$199",
      tags: ["ML", "Python", "AI", "Data Science"],
      category: "Data Science",
    },
    {
      title: "iOS App Development with Swift",
      description:
        "Learn to build professional iOS applications using Swift and the latest iOS development frameworks.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      duration: "14 weeks",
      level: "Intermediate",
      price: "$349",
      tags: ["Swift", "iOS", "Mobile", "App Store"],
      category: "Mobile Development",
    },
    {
      title: "DevOps and Cloud Infrastructure",
      description:
        "Master cloud deployment, CI/CD pipelines, containerization with Docker, and Kubernetes orchestration.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      duration: "16 weeks",
      level: "Advanced",
      price: "$399",
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      category: "DevOps",
    },
    {
      title: "Data Science with Python",
      description:
        "Comprehensive data science course covering pandas, numpy, matplotlib, and machine learning libraries.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$279",
      tags: ["Python", "Pandas", "Data Analysis", "ML"],
      category: "Data Science",
    },
    {
      title: "Full-Stack Web Development",
      description:
        "Complete web development bootcamp covering frontend, backend, databases, and deployment strategies.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      duration: "20 weeks",
      level: "Beginner",
      price: "$499",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
      category: "Web Development",
    },
    {
      title: "Android Development with Kotlin",
      description:
        "Build modern Android applications using Kotlin, Jetpack Compose, and the latest Android development tools.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      duration: "12 weeks",
      level: "Intermediate",
      price: "$329",
      tags: ["Kotlin", "Android", "Jetpack Compose", "Mobile"],
      category: "Mobile Development",
    },
    {
      title: "Deep Learning with TensorFlow",
      description:
        "Advanced deep learning course covering neural networks, CNNs, RNNs, and practical TensorFlow implementation.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      duration: "10 weeks",
      level: "Advanced",
      price: "$379",
      tags: ["TensorFlow", "Deep Learning", "Neural Networks", "AI"],
      category: "AI/ML",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const levelMatch =
      selectedLevel === "All" || course.level === selectedLevel;
    const categoryMatch =
      selectedCategory === "All" || course.category === selectedCategory;
    return levelMatch && categoryMatch;
  });

  return (
    <div className="text-gray-900">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100">
        {/* Lottie Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Lottie animationData={exploreAnimation} loop={true} />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Unlock your tech career with hands-on, project-based learning led by
            experts.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition transform hover:scale-105">
            Browse Catalog
          </button>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-700">Filter by Level:</span>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 shadow ${
                  selectedLevel === level
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-yellow-100"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-700">
              Filter by Category:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 shadow ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to see more courses.
              </p>
              <button
                onClick={() => {
                  setSelectedLevel("All");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold shadow hover:bg-gray-700 transition duration-300"
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-lg mb-8">
            Dive into the world of tech with confidence and a community behind
            you.
          </p>
          <button className="animated-cta text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Enroll Now <FaArrowRight className="inline ml-2" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Courses;
