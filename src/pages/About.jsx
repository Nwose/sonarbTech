import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import Lottie from "lottie-react";
import educationAnimation from "../assets/educationAnimation.json";

const About = () => {
  const timeline = [
    {
      year: "2018",
      description:
        "SonarB Tech Institute was founded with a vision to democratize advanced technology education.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Expanded to online learning platforms, reaching students globally during the pandemic.",
    },
    {
      year: "2022",
      title: "Industry Partnerships",
      description:
        "Established partnerships with leading tech companies for internships and job placements.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description:
        "Launched AI-powered personalized learning paths and career guidance systems.",
    },
  ];

  const values = [
    {
      icon: <FaRocket className="text-yellow-500 text-4xl mb-4" />,
      title: "Innovation",
      description:
        "We continuously evolve our teaching methods and curriculum to stay ahead of industry trends.",
    },
    {
      icon: <FaUsers className="text-yellow-500 text-4xl mb-4" />,
      title: "Inclusivity",
      description:
        "We foster an inclusive learning environment where everyone can thrive regardless of their background.",
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl mb-4" />,
      title: "Empowerment",
      description:
        "We empower our students with the knowledge and skills needed to succeed in their chosen careers.",
    },
    {
      icon: <FaHandshake className="text-yellow-500 text-4xl mb-4" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from curriculum design to student support.",
    },
  ];

  return (
    <div className="text-gray-900">
      {/* Hero Section with Lottie and Fullscreen Height */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Lottie animationData={educationAnimation} loop autoPlay />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About SonarB Tech Institute
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Empowering young minds through fun, accessible, and modern tech
            education.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition transform hover:scale-105">
            Explore Courses
          </button>
        </motion.div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative border-l-4 border-gray-200 pl-8 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-6 top-13 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow"></div>
                <div className="bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                  <h3 className="font-bold text-xl mb-1">{item.year}</h3>
                  {item.title && (
                    <p className="text-lg font-semibold">{item.title}</p>
                  )}
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl text-center"
              >
                <div className="flex justify-center">{val.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{val.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{val.description}</p>
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
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-8">
            Be part of the future of technology education. Start your journey
            with us today.
          </p>
          <button className="animated-cta px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-white">
            Get Started <FaArrowRight className="inline ml-2" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
