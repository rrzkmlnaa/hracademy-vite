import React from "react";

interface DetailCourseProps {
  title: string;
  imageSrc: string;
  description: string[];
}

const DetailCourse: React.FC<DetailCourseProps> = ({ title, imageSrc, description }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Main Title */}
        <div className="mb-8 px-5">
          <h1 className="text-xl font-bold text-primary mb-2">
            HR ACADEMY PPM
          </h1>
          <div className="flex items-center my-5">
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-24 h-1 bg-blue-500 rounded-[12px] mr-4"></div>
          </div>
        </div>
        
        {/* Course Title */}
        <div className="mb-8 px-5">
          <h2 className="text-4xl font-semibold text-gray-800">
            {title}
          </h2>
        </div>

        {/* Image and Description Layout */}
        <div className="flex flex-wrap">
          {/* Image */}
          <div className="w-full md:w-1/3 p-4">
            <img
              src={imageSrc}
              alt="Course Image"
              className="w-[400px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Description */}
          <div className="w-full md:w-2/3 p-4">
            {description.map((para, index) => (
              <p key={index} className="text-[17px] text-primary mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
