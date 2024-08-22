// pages/Modul.tsx
import React from "react";
import Jumbotron from "components/jumbo/Ready";

const content = [
  "Menyusun Uraian Jabatan",
  "Melaksanakan Analisis Beban Kerja",
  "Menyusun Standar Operasional Prosedur (SOP) MSDM",
  "Penyusunan Salary Grade (Grading Jabatan)",
  "Menyusun Sistem Remunerasi",
  "Menyusun Kebutuhan Pembelajaran dan Pengembangan",
  "Merancang Program Pembelajaran dan Pengembangan",
  "Mengelola Proses Perumusan Indikator Kinerja Individu",
  "Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)",
  "Merumuskan Proses Bisnis Serta Tugas dan Fungsi dalam Organisasi",
  "Membangun Komunikasi yang Efektif",
  "Menyusun Kebutuhan SDM",
  "Menentukan Upah Pekerja",
  "Mengelola Program Suksesi",
  "Menyusun Peraturan Perusahaan dan/atau Perjanjian Kerja Bersama",
  "Fundamental Human Resources Management and Human Capital Management",
  "Menghitung Return of Investment Training",
  "Melaksanakan Behavioral Event Interview",
  "Melaksanakan Human Resources Audit",
  "Merancang Jalur Karir Pekerja",
  "Mengelola Proses Monitoring Pencapaian Kinerja Individu",
  "Mengembangkan Sistem Informasi Pekerja"
];

export default function Modul() {
  return (
    <Jumbotron imageName="background2.jpeg">
      <div className="p-6">
        <div className="text-right mb-6">
          <h1 className="text-3xl font-bold" style={{ color: "#bfdbfe" }}>Modul Pelatihan</h1>
          <p className="text-lg">SKKNI No. 149 Tahun 2020 untuk bidang HR + Materi eksklusif HR Academy berdasarkan standar degree global</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left lg:mt-10">
          {content.map((item, index) => (
            <p key={index} >
              {index + 1}. {item}
            </p>
          ))}
        </div>
      </div>
    </Jumbotron>
  );
}
