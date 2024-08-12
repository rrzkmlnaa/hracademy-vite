import React from "react";

interface BenefitProps {
  benefits: string[];
}

const Benefit: React.FC<BenefitProps> = ({ benefits }) => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="mb-8 px-5">
          <h2 className="text-xl font-semibold text-[#38bdf8] uppercase">
            Manfaat Pelatihan
          </h2>
          <div className="flex items-center my-5">
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-1 h-1 rounded-[100%] bg-blue-500 mr-2"></div>
            <div className="w-24 h-1 bg-blue-500 rounded-[12px] mr-4"></div>
          </div>
        </div>

        {/* Introductory Text */}
        <div className="mb-6 text-lg text-primary px-5">
          <p>Setelah selesai mengikuti program ini, peserta akan:</p>
        </div>

        {/* Benefits List */}
        <div className="space-y-6">
          <ol className="list-decimal list-inside pl-5">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg text-primary my-3">
                {benefit}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
