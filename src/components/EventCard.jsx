import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaLightbulb,
} from "react-icons/fa";

const EventCard = ({
  title,
  description,
  image,
  date,
  time,
  location,
  type,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
          {type}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" />
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-purple-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-pink-500" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
