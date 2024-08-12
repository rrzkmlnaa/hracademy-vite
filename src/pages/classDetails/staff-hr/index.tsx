import React from "react";
import DetailCourse from "../partials/detailCourse";
import Menfaat from "../partials/benefit";
import Topik from "../partials/topik";
import Target from "../partials/target";
import Syarat from "../partials/syarat";
import Ujian from "../partials/ujian";
import JadwalProgram from "../partials/jadwal";
import BiayaProgram from "../partials/BiayaProgram";
import Button from "../partials/Buttons";
import Course from "../partials/course";

const StaffHR: React.FC = () => {
  const courseTitle = "Staff - HR";
  const imageSrc = "/images/SH.jpg"; // Path relatif dari folder public

  // Deskripsi sebagai array paragraf
  const description = [
    "Staff - HR adalah program pelatihan yang dirancang untuk membekali peserta dengan keterampilan dan pengetahuan yang mendalam dalam manajemen sumber daya manusia. Program ini meliputi berbagai aspek penting dalam pengelolaan SDM yang efektif, dari strategi rekrutmen hingga pengembangan karyawan.",
    "Dengan mengikuti pelatihan ini, peserta akan memperoleh pemahaman yang komprehensif tentang praktek terbaik dalam manajemen SDM. Kursus ini juga mencakup studi kasus dan simulasi yang dirancang untuk memberikan pengalaman praktis yang relevan dengan tantangan nyata di dunia kerja.",
    "Setelah menyelesaikan program ini, peserta akan siap untuk menghadapi tantangan dalam peran manajerial SDM dengan percaya diri dan kompetensi yang diperlukan. Sertifikasi yang diberikan akan menjadi nilai tambah yang signifikan dalam karir profesional mereka."
  ];

    // Daftar manfaat pelatihan
    const benefits = [
        "Mendapatkan konsep yang komprehensif dibidang Manajemen SDM yang terkait dengan 15 unit kompetensi yang akan diujikan.",
        "Memastikan diri bahwa kompetensi manajer manajemen SDM yang dimiliki sesuai dengan Standar Nasional yang berlaku.",
        "Memiliki added value sebagai professional bidang SDM."
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
        "membangun Komunikasi Organisasi yang efektif."
    ];  

    const daftarSyarat = [
        "Minimal S1.",
        "Minimal 3 Tahun sebagai Supervisor/Analis SDM, atau",
        "Minimal 2 Tahun sebagai Kepala Bagian/ Analis Senior SDM, atau",
        "Minimal 1 Tahun sebagai Manajer SDM.",
        "Memiliki sertifikat pelatihan berbasis kompetensi."
      ];

      const daftarJadwal = [
        "05 - 08 & 21 Mar 2024",
        "14 - 17 & 30 May 2024",
        "02 - 05 & 25 Jul 2024",
        "13 - 16 & 22 Aug 2024",
        "24 - 27 Sep & 24 Oct 2024",
        "05 -08 & 21 Nov 2024",
        "03 - 06 & 19 Dec 2024"
      ];

      const daftarBiaya = [
        "Rp 2.700.000,-"
      ];


      const courses = [
        {
          imageUrl: "/images/chrs.jpg",
          link: "/classDetails/chrs"
        },
        {
          imageUrl: "/images/chrp.jpg",
          link: "/classDetails/chrp"
        },
        {
          imageUrl: "/images/chcgm.jpg",
          link: "/classDetails/chcgm"
        }
      ];


  return (
    <>
        <div>
        {/* Other content for Staff HR page */}
            <DetailCourse title={courseTitle} imageSrc={imageSrc} description={description} />
        </div>
        <Menfaat benefits={benefits} />
        <Topik topik ={daftarTopik} />
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
                <div className="flex flex-wrap gap-4 md:gap-6">
                {courses.map((course, index) => (
                    <Course
                    key={index}
                    imageUrl={course.imageUrl}
                    link={course.link}
                    />
                ))}
                </div>
            </div>
        </section>
    </>
  );
};

export default StaffHR;
