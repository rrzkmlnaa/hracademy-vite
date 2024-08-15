// pages/Modul.tsx
import React from "react";
import Jumbotron from "components/jumbo/Ready";

const content = [
  "Menyusun Uraian Jabatan",
  "Melakukan Administrasi Jaminan Sosial",
  "Melakukan Administrasi Pengupahan",
  "Melakukan Administrasi Penerapan Kebijakan MSDM",
  "Fundamental HR: Human Resources Management VS Human Capital Management ",
];

const sertifikasi = [
  "Kompetensi BNSP Staf SDM (KKNI Level 3)",
  "Kompetensi Staff SDM HR Academy",
];

export default function Modul() {
  return (
    <Jumbotron imageName="background2.jpeg">
      <div className="p-6">
        <div className="text-right mb-6">
          <h1 className="text-3xl font-bold" style={{ color: "#bfdbfe" }}>
            Modul Pelatihan
          </h1>
          <p className="text-lg">
            SKKNI No. 149 Tahun 2020 untuk bidang HR + Materi eksklusif HR
            Academy
          </p>
        </div>
        <div className="text-left  text-[19px] font-extralight mt-10">
          {content.map((item, index) => (
            <p key={index} className="mb-2">
              {index + 1}. {item}
            </p>
          ))}
        </div>
        <div className="text-left text-[19px] font-extralight mt-10">
          <h1 className="text-3xl font-bold mb-5" style={{ color: "#bfdbfe" }}>
            Sertifikat yang didapatkan:
          </h1>
          {sertifikasi.map((item, index) => (
            <p key={index} className="mb-2">
              {index + 1}. {item}
            </p>
          ))}
        </div>
      </div>
    </Jumbotron>
  );
}
