import React from "react";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

const BlogCard = ({ title, excerpt, image, author, date, readTime, tags }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{excerpt}</p>

        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-4">
          <div className="flex items-center gap-1">
            <FaUser className="text-purple-600" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-pink-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-yellow-500" />
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gradient-to-br from-yellow-200 to-pink-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
