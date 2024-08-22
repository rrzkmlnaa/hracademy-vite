// pages/Modul.tsx
import React from "react";
import Jumbotron from "components/jumbo/Ready";

const content = [
  "Menyusun Uraian Jabatan",
  "Menyusun Standar Operasional Prosedur (SOP) MSDM",
  "Menyusun Sistem Remunerasi",
  "Menyusun Kebutuhan Pembelajaran dan Pengembangan",
  "Membuat Kesepakatan Kerja",
  "Melakukan Orientasi Karyawan",
  "Mengelola Masalah Perselisihan Hubungan Industrial Antar Pemangku Kepentingan di Organisasi",
  "Menangani Keluhan Pekerja",
  "Fundamental HR: Human Resources Management VS Human Capital Management ",
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
            Academy berdasarkan standar degree global{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-10 lg:mt-10">
          {content.map((item, index) => (
            <p key={index}>
              {index + 1}. {item}
            </p>
          ))}
        </div>
      </div>
    </Jumbotron>
  );
}
