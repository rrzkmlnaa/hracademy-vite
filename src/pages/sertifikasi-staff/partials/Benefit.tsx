import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Jumbotron from "../../../components/jumbo/Jumbotron";

interface CareerService {
  title: string;
  description: string;
}

interface CareerSectionProps {
  services: CareerService[];
}

const CareerSection = ({ services }: CareerSectionProps) => {
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-full max-w-md p-3 rounded-xl text-white"
        >
          <div className="grid grid-cols-[auto,1fr] gap-2 items-center">
            <FaCheckCircle className="hidden md:block text-white bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-full mr-5" />
            <div className="block">
              <h4 className="text-center md:text-start font-bold text-[26px] md:text-[20px]">
                {service.title}
              </h4>
              <p className="text-center md:text-start text-[16px] md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const services = [
  {
    title: "Peningkatan Gaji:",
    description:
      "Profesional HR yang memiliki sertifikasi seperti CHRP dapat melihat peningkatan gaji sebesar 9.6%",
  },
  {
    title: "Peluang Karir Lebih Baik:",
    description:
      "35.5% dari HR Manager dan 51.1% dari VP HR memiliki sertifikasi, menunjukkan bahwa sertifikasi dapat membantu dalam mencapai posisi yang lebih tinggi",
  },
  {
    title: "Keahlian yang Diakui:",
    description:
      "Sertifikasi HR menunjukkan bahwa Anda memiliki pengetahuan dan keterampilan yang diakui secara profesional.",
  },
  {
    title: "Peningkatan Peluang Karir: ",
    description:
      " Kandidat yang memiliki sertifikat kompetensi lima kali lebih besar kesempatannya untuk dipekerjakan.",
  },
];

export default function Career() {
  const mainServices = services.slice(0, 2);
  const additionalServices = services.slice(2, 4);

  return (
    <Jumbotron imageName="background3.jpeg">
      <section id="career" className="text-white">
        <div className="mx-auto max-w-screen-xl pt-24 pb-16 md:py-40 text-left">
          <div className="mb-8 md:px-8">
            <h3
              id="scrollLimitations"
              className="text-center font-bold text-3xl md:text-2xl text-balance"
            >
              Pentingnya sertifikasi HR
            </h3>
            <div className="w-11/12 h-[3px] rounded bg-[#FFFFFF] mx-auto my-2 "></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:px-3 lg:px-6 ">
            <div className="flex flex-col gap-5">
              <CareerSection services={mainServices} />
            </div>
            <div className="flex flex-col gap-5">
              <CareerSection services={additionalServices} />
            </div>
          </div>
        </div>
      </section>
    </Jumbotron>
  );
}



  // import Jumbotron from 'components/Jumbotron'
  // import { IconBaseProps } from 'react-icons'
  // import { FaCheckCircle } from 'react-icons/fa'

  // interface SolutionType {
  //   title: string
  //   icon: React.ElementType<IconBaseProps>
  // }

  // const data: SolutionType[] = [
  //   { title: 'Pengakuan Profesional Tertinggi', icon: FaCheckCircle },
  //   { title: 'Peningkatan Keterampilan & Pengetahuan', icon: FaCheckCircle },
  //   { title: 'Peluang Karier yang Lebih Baik', icon: FaCheckCircle },
  //   { title: 'Jaringan Profesional', icon: FaCheckCircle },
  // ]

  // export default function Manfaat() {
  //   return (
  //   <Jumbotron imageName='training-sertif-banner.webp'>
  //     <section id="Manfaat" className="">
  //       <div className="mx-auto min-h-96 max-w-screen-sm content-center px-10 pb-16 pt-24 md:max-w-screen-xl md:px-0">
  //         <div className="flex flex-wrap items-center justify-between gap-5 md:gap-0 md:px-10">
  //           <div className="text-start">
  //             <a href="#Manfaat" className="uppercase font-normal text-xl ml-6 ">
  //               Manfaat Sertifikasi HR
  //             </a>
  //             {data.map((item, index) => (
  //               <div
  //                 key={index}
  //                 className="flex flex-wrap gap-1 pb-2 pl-2 pt-5 sm:gap-3 md:pl-5"
  //               >
  //                 <item.icon size="2rem" color="#EDB526" />
  //                 <p className="place-self-center text-3xl font-semibold">
  //                   {item.title}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </Jumbotron>
  //   )
  // }
