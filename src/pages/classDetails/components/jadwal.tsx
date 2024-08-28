import React from "react";

interface JadwalProgramProps {
  jadwal: string[];
}

const JadwalProgram: React.FC<JadwalProgramProps> = ({ jadwal }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-8 px-5" >
          <h2 className="text-xl font-semibold text-[#38bdf8] uppercase">
            Jadwal Program
          </h2>
          <div className="flex items-center my-5">
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-24 h-1 bg-blue-500 rounded-[12px] mr-4"></div>
          </div>
        </div>
        
        {/* Jadwal List */}
        <ul className="list-disc list-inside space-y-3 px-5">
          {jadwal.map((tanggal, index) => (
            <li key={index} className="text-[17px] font-normal text-primary">
              {tanggal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JadwalProgram;
