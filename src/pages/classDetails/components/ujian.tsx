import React from "react";


const ujian: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-8 px-5">
          <h2 className="text-xl font-semibold text-[#38bdf8] uppercase">
              Ujian Sertifikasi
          </h2>
          <div className="flex items-center my-5">
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-24 h-1 bg-blue-500 rounded-[12px] mr-4"></div>
          </div>
        </div>
        
        <div className="mb-6 text-lg text-primary px-5">
          <p>
              Observasi & wawancara atas portofolio/bukti kerja yang dimiliki selama 2-3 jam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ujian;
