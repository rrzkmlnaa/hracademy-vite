import React from "react";
import Jumbotron from "../../../components/Jumbotron";

export default function Comp2() {
  return (
    <Jumbotron imageName="background2.jpeg">
      <h5 className="capitalize text-start text-4xl md:text-5xl lg:text-6xl font-normal p-5 overflow-wrap break-word">
        <span className="font-bold text-5xl md:text-5xl">
          {" "}
          Double Degree Program:{" "}
        </span>
        <br />
        Transformasi Karir Profesional HR dengan Sertifikasi Ganda
      </h5>

      <p className="text-[20px] md:text-xl p-5 lg:text-2xl">
        <span className="font-bold">Double Degree Program</span> dari HR Academy
        adalah pelatihan HR di Indonesia pertama yang menawarkan{" "}
        <span className="font-bold">dua sertifikasi profesi</span> dan{" "}
        <span className="font-bold">titel non-akademik.</span>
        Peserta akan menerima sertifikasi BNSP HR Supervisor dan kredensial SDM
        C.HRS (Certified Human Resources Supervisor).
      </p>
    </Jumbotron>
  );
}
