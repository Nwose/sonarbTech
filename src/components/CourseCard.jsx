import React from "react";

const CourseCard = ({
  title,
  description,
  image,
  duration,
  level,
  price,
  tags,
  icon,
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {icon && (
          <div className="absolute top-3 left-3 bg-gradient-to-tr from-purple-700 to-indigo-600 p-3 rounded-xl shadow-md text-white text-xl">
            {icon}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        <div className="text-sm text-gray-500 mb-3 space-y-1">
          <p>
            <strong>Duration:</strong> {duration}
          </p>
          <p>
            <strong>Level:</strong> {level}
          </p>
          <p>
            <strong>Price:</strong> {price}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
