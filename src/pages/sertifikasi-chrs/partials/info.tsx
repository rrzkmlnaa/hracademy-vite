import React from "react";
import Jumbotron from "../../../components/jumbo/Ready";

export default function Comp2() {
  return (
    <Jumbotron imageName="background2.jpeg">
      <p className="text-[28px] lg:text-left text-[#bfdbfe] text-center md:text-xl p-5 lg:text-2xl">
        Trainer berpengalaman dengan pengalaman praktis puluhan tahun di posisi
        C-Level, siap berbagi
        <span className="font-bold"> pemahaman </span>dan
        <span className="font-bold">
          {" "}
          penerapan konsep praktikal yang disesuaikan{" "}
        </span>{" "}
        untuk setiap{" "}
        <span className="font-bold">
          background diri dan perusahaan peserta,{""}
        </span>{" "}
        menjamin Anda<span className="font-bold"> kompeten</span> dalam
        melaksanakan pada penyusunan jabatan, SOP, remunerasi, pengembangan SDM,
        hubungan industrial, dan orientasi karyawan.
      </p>
    </Jumbotron>
  );
}
