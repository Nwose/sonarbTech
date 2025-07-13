import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import Button from "./Button";
import EventCard from "./EventCard";

const events = [
  {
    title: "Tech Innovation Summit 2024",
    description: "Latest tech trends & innovations with experts.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
    date: "Dec 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "SonarB Tech Campus",
    type: "Summit",
  },
  {
    title: "AI & ML Workshop",
    description: "Hands-on with AI & ML frameworks in Python.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
    date: "Dec 22, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual",
    type: "Workshop",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, rotateX: -10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const UpcomingEvents = () => (
  <section className="relative bg-gradient-to-br from-yellow-50 via-pink-100 to-blue-100 py-20 px-6 md:px-16 overflow-hidden">
    {/* Animated background blobs */}
    <div className="absolute top-[-30px] left-[-40px] w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse" />
    <div className="absolute bottom-[-30px] right-[-40px] w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40 animate-ping" />

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between mb-12"
      >
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <FaRocket className="text-purple-600" />
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-700">
            Join our community events and workshops
          </p>
        </div>

        <Link to="/events">
          <Button className="mt-4 md:mt-0 flex items-center gap-2">
            View All Events <FaRocket />
          </Button>
        </Link>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ rotateZ: 1.5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <EventCard {...event} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
