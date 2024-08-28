import React from "react";
import { FaRegFileAlt, FaDownload, FaWhatsapp } from "react-icons/fa";

const Buttons: React.FC = () => {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          {/* Register Button */}
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-4 md:px-12 md:py-5 rounded-md flex items-center hover:bg-blue-700 transition duration-300 text-sm md:text-base"
          >
            Register
            <FaRegFileAlt className="ml-2 text-sm md:text-lg" />
          </a>
          
          {/* Download Syllabus Button */}
          <a
            href="#"
            className="bg-blue-600 text-white px-6 py-4 md:px-6 md:py-3 rounded-md flex items-center hover:bg-blue-700 transition duration-300 text-sm md:text-base"
          >
            Download Syllabus
            <FaDownload className="ml-2 text-sm md:text-lg" />
          </a>
          
          {/* Chat with Us Button */}
          <a
            href="https://wa.me/yourwhatsappnumber" // ganti dengan nomor WhatsApp yang sesuai
            className="bg-[#25D366] text-white px-8 py-3 md:px-20 md:py-3 rounded-[40px] flex items-center hover:bg-green-500 transition duration-300 text-sm md:text-base"
          >
            <FaWhatsapp className="mr-2 text-sm md:text-lg" />
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Buttons;
