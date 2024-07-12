'use client'
import Jumbotron from "../../../components/Jumbotron";

import Role, { roles } from "../../home/partials/role";
import Featured from "./partials/Featured";
import Learning from "./partials/Learning";
import Testimonial from "./partials/Testimonial";

import NeedInfo from "./partials/NeedInfo";

export default function Index() {
  const selectedRoles = roles.slice(3, 6);
  return (
    <>
      <Jumbotron
        imageName="training-sertif-banner.webp"
      >
        <h1 className='text-4xl md:text-5xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          Pelatihan & Sertifikasi
        </h1>

        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          INGIN MENJADI PRAKTISI SDM? TINGKATKAN KEMAMPUAN ANDA DENGAN PROGRAM PELATIHAN DI HR ACADEMY YANG DIPIMPIN OLEH PRAKTISI BERPENGALAMAN DAN TERAKREDITASI BNSP
        </p>
      </Jumbotron>
      <Featured />
      <Role
        title="PROGRAM PELATIHAN YANG DIRANCANG UNTUK ANDA"
        bgColor="bg-white"
        titleStyle="mt-4"
        roles={selectedRoles}
      />
      <Learning />
      <Testimonial />
      <NeedInfo />
    </>
  )
}
