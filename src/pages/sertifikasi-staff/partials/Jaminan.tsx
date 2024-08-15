import React from "react";
import Jumbotron from "../../../components/Jumbotron";

export default function Comp2() {
  return (
    <Jumbotron imageName="background2.jpeg">
      <h5 className="capitalize lg:text-start text-4xl md:text-5xl lg:text-6xl text-center text-[#bfdbfe] font-normal p-5 overflow-wrap break-word">
        <span className="font-bold text-5xl md:text-5xl">
          DIJAMIN LANGSUNG KOMPETEN!
        </span>
      </h5>

      <p className="text-[20px] md:text-xl p-5 lg:text-2xl lg:text-start text-center">
        Anda akan dibimbing <span className="font-extrabold"> untuk langsung bisa menjadi HR Staff </span>yang mampu
        menjalankan Human Resource Management secara komprehensif, mempraktekkan
        administrasi HRM dengan baik, dan efektif.
      </p>
    </Jumbotron>
  );
}
