import React from "react";

interface BiayaProgramProps {
  biaya: string[];
}

const BiayaProgram: React.FC<BiayaProgramProps> = ({ biaya }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-8 px-5">
          <h2 className="text-xl font-semibold text-[#38bdf8] uppercase">
            Biaya Program
          </h2>
          <div className="flex items-center my-5">
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-24 h-1 bg-blue-500 rounded-[12px] mr-4"></div>
          </div>
        </div>
        
        {/* Biaya Program */}
        <div className="space-y-4 px-5">
          {biaya.map((item) => (
            <p className="text-3xl font-bold text-black">
              {item}
            </p>
          ))}
        </div>

        <div className="space-y-4 px-5 py-2">
            <p className="text-md font-normal text-primary">
                In-Class Training
            </p>

            <p className="text-md font-normal text-primary">
                (EXCLUDE PPN 11%) - (Termasuk biaya Ujian) - (Include Exam Fees) 
            </p>
        </div>
      </div>
    </section>
  );
};

export default BiayaProgram;
