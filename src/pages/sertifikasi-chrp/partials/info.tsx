import React from "react";
import Jumbotron from "../../../components/Jumbotron";

export default function Comp2() {
  return (
    <Jumbotron imageName="background2.jpeg">
      <p className="text-[28px] text-center md:text-xl p-5 lg:text-2xl">
        HR Academy memiliki tim trainer berpengalaman dengan pengalaman praktis
        puluhan tahun di posisi C- Level, siap berbagi untuk memperkaya
        <span className="font-bold">pemahaman </span> dan
        <span className="font-bold">
          penerapan konsep praktikal yang disesuaikan{" "}
        </span>{" "}
        untuk setiap{" "}
        <span className="font-bold">
          background diri dan perusahaan peserta
        </span>
      </p>
    </Jumbotron>
  );
}
