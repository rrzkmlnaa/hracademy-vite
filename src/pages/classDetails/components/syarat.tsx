import React from "react";

interface SyaratProps {
  syarat: string[];
}

const Syarat: React.FC<SyaratProps> = ({ syarat }) => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-8 px-5">
          <h2 className="text-xl font-semibold text-[#38bdf8] uppercase">
            Persyaratan Peserta Ujian
          </h2>
          <div className="flex items-center my-5">
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-24 h-1 bg-blue-500 rounded-[12px] mr-4"></div>
          </div>
        </div>

        {/* Syarat List */}
        <ol className="list-decimal list-inside pl-5 space-y-4">
          {syarat.map((item, index) => (
            <li key={index} className="text-lg text-primary">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Syarat;
