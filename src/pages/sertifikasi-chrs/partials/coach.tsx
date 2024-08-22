import React from "react";

export default function Coach() {
  const listContent = [
    "Head Trainer/Founder HR Academy",
    "20+ HR Practitioner Experience",
    "Former HR Director of Mattel Asia Pacific, SC Johnson, and AJE",
    "Certified by the International Coach Federation (ICF) as Business and Career Coach",
    "Certified BNSP Master Trainer",
    "Certified CHRP and CHCGM"
  ];

  return (
    <div className="relative bg-[url(/images/background2.jpeg)] bg-cover bg-center lg:px-56">
      <section className="flex flex-col h-full relative">
        <div className="flex-1 flex items-start justify-end p-4 text-right bg-opacity-75">
          <div className="lg:mt-16 lg:px-5">
            <h3
              className="text-6xl mt-5 font-bold mb-1 max-w-xs"
              style={{ color: "#bfdbfe" }}
            >
              Diajar oleh Expert
            </h3>
            <p className="text-[18px] lg:text-[24px] text-white mt-4">Praktisi Profesional</p>
            <h5 className="text-[19px] lg:text-[26px] font-bold text-white">(Level HR Direktur)</h5>
          </div>
        </div>

        <div className="absolute bottom-10 lg:bottom-20 left-5 z-10">
          <h3 className="text-white underline font-bold text-xl lg:text-[26px] ">
            Sri Wulandari, EPC. S.IP, MBA
          </h3>
          <ul className="list-disc list-inside p-0 mx-2 w-[300px] lg:w-[550px] ">
            {listContent.map((item, index) => (
              <li key={index} className="text-white text-[15px] lg:text-[20px] ">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex items-end justify-end p-0 relative">
          <div>
            <img
              src="/images/ibu2.png"
              alt="coach wulan"
              className="w-[280px] lg:w-[380px] h-auto grayscale"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
