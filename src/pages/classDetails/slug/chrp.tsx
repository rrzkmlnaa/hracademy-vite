import React from "react";
import DetailCourse from "../components/detailCourse";
import Menfaat from "../components/benefit";
import Topik from "../components/topik";
import Target from "../components/target";
import Syarat from "../components/syarat";
import Ujian from "../components/ujian";
import JadwalProgram from "../components/jadwal";
import BiayaProgram from "../components/BiayaProgram";
import Button from "../components/Buttons";
import Course from "../components/course";

const chrp: React.FC = () => {
  const courseTitle = "Certified Human Resource Professional HR Academy (CHRP)";
  const imageSrc = "/images/chrp.jpg"; // Path relatif dari folder public

  // Deskripsi sebagai array paragraf
  const description = [
    "Certified Human Resource Professional HR Academy (CHRP) adalah program pelatihan yang dirancang untuk membekali peserta dengan keterampilan dan pengetahuan yang mendalam dalam manajemen sumber daya manusia. Program ini meliputi berbagai aspek penting dalam pengelolaan SDM yang efektif, dari strategi rekrutmen hingga pengembangan karyawan.",
    "Dengan mengikuti pelatihan ini, peserta akan memperoleh pemahaman yang komprehensif tentang praktek terbaik dalam manajemen SDM. Kursus ini juga mencakup studi kasus dan simulasi yang dirancang untuk memberikan pengalaman praktis yang relevan dengan tantangan nyata di dunia kerja.",
    "Setelah menyelesaikan program ini, peserta akan siap untuk menghadapi tantangan dalam peran manajerial SDM dengan percaya diri dan kompetensi yang diperlukan. Sertifikasi yang diberikan akan menjadi nilai tambah yang signifikan dalam karir profesional mereka.",
  ];

  // Daftar manfaat pelatihan
  const benefits = [
    "Mendapatkan konsep yang komprehensif dibidang Manajemen SDM yang terkait dengan 15 unit kompetensi yang akan diujikan.",
    "Memastikan diri bahwa kompetensi manajer manajemen SDM yang dimiliki sesuai dengan Standar Nasional yang berlaku.",
    "Memiliki added value sebagai professional bidang SDM.",
  ];

  const daftarTopik = [
    " Menyusun Uraian Jabatan.",
    "Analisis beban Kerja.",
    "Menyusun Standar Operasional Prosedur (SOP) MSDM.",
    "Grading Jabatan.",
    "Proses Perumusan Indikator Kinerja Individu.",
    "Kebutuhan Pembelajaran dan Pengembangan.",
    "Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM).",
    "Proses Bisnis serta Tugas dan Fungsi dalam Organisasi.",
    "Menyusun kebutuhan SDM.",
    "Sistem Remunerasi.",
    "Menentukan Upah pekerja.",
    " Merancang Program Pembelajaran dan Pengembangan.",
    "Mengelola Program suksesi.",
    "Menyusun Peraturan perusahaan dan/ atau perjanjian Kerja Bersama.",
    "membangun Komunikasi Organisasi yang efektif.",
  ];

  const daftarSyarat = [
    "Minimal S1.",
    "Minimal 3 Tahun sebagai Supervisor/Analis SDM, atau",
    "Minimal 2 Tahun sebagai Kepala Bagian/ Analis Senior SDM, atau",
    "Minimal 1 Tahun sebagai Manajer SDM.",
    "Memiliki sertifikat pelatihan berbasis kompetensi.",
  ];

  const daftarJadwal = [
    "05 - 08 & 21 Mar 2024",
    "14 - 17 & 30 May 2024",
    "02 - 05 & 25 Jul 2024",
    "13 - 16 & 22 Aug 2024",
    "24 - 27 Sep & 24 Oct 2024",
    "05 -08 & 21 Nov 2024",
    "03 - 06 & 19 Dec 2024",
  ];

  const daftarBiaya = ["Rp 7.500.000,-"];

  const courses = [
    {
      imageUrl: "/images/SH.jpg",
      link: "hr-staff",
    },
    {
      imageUrl: "/images/chrs.jpg",
      link: "chrs",
    },
    {
      imageUrl: "/images/chcgm.jpg",
      link: "chcgm",
    },
  ];

  return (
    <>
      <div>
        {/* Other content for Staff HR page */}
        <DetailCourse
          title={courseTitle}
          imageSrc={imageSrc}
          description={description}
        />
      </div>
      <Menfaat benefits={benefits} />
      <Topik topik={daftarTopik} />
      <Target />
      {/* Komponen Syarat */}
      <Syarat syarat={daftarSyarat} />
      <Ujian />

      {/* Komponen Jadwal Program */}
      <JadwalProgram jadwal={daftarJadwal} />

      {/* Komponen Biaya Program */}
      <BiayaProgram biaya={daftarBiaya} />

      {/* Komponen Buttons */}
      <Button />

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap ">
            {courses.map((course, index) => (
              <Course
                key={index}
                imageUrl={course.imageUrl}
                link={`../../classDetails/${course.link}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default chrp;
