import React from "react";
import { Link } from "react-router-dom";

interface CourseProps {
  imageUrl: string;
  link: string;
}

const Course: React.FC<CourseProps> = ({ imageUrl, link }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:w-1/3 mb-4 md:mb-6">
      <Link to={link}>
        <img
          src={imageUrl}
          alt="Course"
          className="w-full h-auto object-cover"
        />
      </Link>
    </div>
  );
};

export default Course;
