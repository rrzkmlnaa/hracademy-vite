import React from "react";
import Jumbotron from "components/jumbo/Ready";
import { FaCheckCircle } from "react-icons/fa";

export default function Level() {
  const sections = [
    {
      text: (
        <div className="flex items-center">
          <FaCheckCircle className="text-primary text-3xl mr-4" />
          <div className="flex-1">
            Cakupan
            <span className="font-bold"> materi </span>
            Standar Kompetensi Kerja Nasional Indonesia{" "}
            <span className="font-bold">(SKKNI) dan Standar CHRS</span>{" "}
            international degree dari HR Academy
          </div>
        </div>
      ),
    },
    {
      text: (
        <div className="flex items-center">
          <FaCheckCircle className="text-primary text-3xl mr-4" />
          <div className="flex-1">
            <span className="font-extrabold ">Biaya Terjangkau</span>
            <br />
            Dibandingkan dengan lembaga lainnya, kami menawarkan harga yang
            lebih kompetitif dengan nilai yang jauh lebih tinggi dari investasi
            anda
          </div>
        </div>
      ),
    },
    {
      text: (
        <div className="flex items-center">
          <FaCheckCircle className="text-primary text-3xl mr-4" />
          <div className="flex-1">
            <span className="font-extrabold">Sertifikasi Ganda </span>
            <br />
            Peserta menerima sertifikasi BNSP (Badan Nasional Sertifikasi
            Profesi) dan kredensial SDM CHRS yang memvalidasi keahlian di
            industri HR nasional dan meningkatkan pengakuan secara global
          </div>
        </div>
      ),
    },
    {
      text: (
        <div className="flex items-center">
          <FaCheckCircle className="text-primary text-3xl mr-4" />
          <div className="flex-1">
            <span className="font-extrabold text-[16px]">Mentor Expert</span>
            <br /> Selain berpengalaman, mentor kami terampil dalam menyampaikan
            materi dengan cara yang mudah dipahami bagi setiap peserta
          </div>
        </div>
      ),
    },
    {
      text: (
        <div className="flex items-center">
          <FaCheckCircle className="text-primary text-3xl mr-4" />
          <div className="flex-1">
            <span className="font-extrabold text-[16px]">
              {" "}
              Template, Tools HR, dan HRIS{" "}
            </span>
            <br />
            Dapatkan template dan tools dengan format yang mudah dipahami dan
            mendukung kinerja yang lebih optimal. Ditambah dengan materi dan
            praktek menggunakan sistem HRIS HR Academy
          </div>
        </div>
      ),
    },
    {
      text: (
        <div className="flex items-center">
          <FaCheckCircle className="text-primary text-3xl mr-4" />
          <div className="flex-1">
            <span className="font-extrabold text-[16px]">Jaringan HR</span>
            <br />
            Dengan komunitas alumni, banyak informasi eksklusif yang tersedia
            komunikasi dengan mentor, ongoing support, pembaruan ilmu, hingga
            informasi lowongan pekerjaan
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Jumbotron imageName="background3.jpeg">
        <section className="mx-auto max-w-screen-xl pb-20 mt-14">
          <div className="pt-20">
            <h5 className="text-3xl font-bold text-center">
              Kenapa sertifikasi di HR Academy?
            </h5>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-[40px] shadow-lg p-6 flex flex-col items-start"
              >
                <p className="mt-2 text-[15px] leading-6 font-medium text-gray-700 text-left">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Jumbotron>
    </>
  );
}
