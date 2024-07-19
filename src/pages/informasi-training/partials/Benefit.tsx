import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 

import Modal from '../../../components/modals/Modal';
import Jumbotron from '../../../components/jumbo/Jumbotron';

interface CareerService {
  title: string;
  description: string;
  link: string;
}

interface CareerSectionProps {
  services: CareerService[];
  setSelectedCard: (card: CareerService | null) => void;
}

const CareerSection = ({ services, setSelectedCard }: CareerSectionProps) => {
  return (
    <div className='flex flex-col gap-5 md:gap-10'>
      {services.map((service, index) => (
        <Link key={index} to={service.link} onClick={() => setSelectedCard(service)}>
          <div className='w-full max-w-md p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
            <div className='grid grid-cols-[auto,1fr] gap-2 items-center'>
              <FaCheckCircle className='hidden md:block text-white bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-full mr-5' /> {/* Menggunakan FaCheckCircle dengan ukuran responsif */}
              <div className="block">
                <h4 className='text-center md:text-start font-bold text-[26px] md:text-[20px]'>{service.title}</h4>
                <p className='hidden md:block text-center md:text-start text-sm md:text-base'>{service.description}</p> {/* Deskripsi disembunyikan pada layar kecil */}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const services = [
  {
    title: 'Pengakuan Profesional Tertinggi',
    description: 'Butuh bimbingan profesional untuk meningkatkan karier Anda? Mari kita hubungkan Anda dengan mentor yang tepat.',
    link: '#scrollLimitations'
  },
  {
    title: 'Peningkatan Keterampilan dan Pengetahuan',
    description: 'Optimalkan pencarian kerja Anda dengan panduan strategis kami. Biarkan kami membantu Anda menavigasi jalan menuju karier ideal Anda.',
    link: '#scrollLimitations'
  },
  {
    title: 'Peluang Karier yang Lebih Baik',
    description: 'Siapkan diri untuk sukses dengan coaching wawancara kami. Dapatkan kepercayaan diri dan asah keterampilan Anda.',
    link: '#scrollLimitations'
  },
  {
    title: 'Jaringan Profesional Yang Terpercaya',
    description: 'Kami akan menerjemahkan pengalaman kerja relevan Anda untuk membuat surat lamaran kerja yang sempurna dan meningkatkan peluang Anda.',
    link: '#scrollLimitations'
  }
];

export default function Career() {
  const [selectedCard, setSelectedCard] = useState<CareerService | null>(null);

  const mainServices = services.slice(0, 2); 
  const additionalServices = services.slice(2, 4); 

  return (
    <Jumbotron imageName='training-sertif-banner.webp'>
      <section id='career' className='text-white'>
        <div className='mx-auto max-w-screen-xl pt-24 pb-16 md:py-40 text-left'>
          <div className='mb-8 px-6 md:px-8'>
            <h3 id='scrollLimitations' className='text-center font-bold text-3xl md:text-2xl text-balance'>
              Manfaat Sertifikasi HR
            </h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-7 md:px-3 mt-10 lg:px-6 py-y'>
            <div className='flex flex-col gap-5'>
              <CareerSection services={mainServices} setSelectedCard={setSelectedCard} />
            </div>
            <div className='flex flex-col gap-5'>
              <CareerSection services={additionalServices} setSelectedCard={setSelectedCard} />
            </div>
          </div>
        </div>
        {selectedCard && (
          <Modal onClose={() => setSelectedCard(null)}>
            <div className='text-black'>
              <h3 className="text-lg md:text-xl font-semibold text-center pb-3 text-primary-500">
                {selectedCard.title}
              </h3>
              {selectedCard.description && (
                <div dangerouslySetInnerHTML={{ __html: selectedCard.description }} />
              )}
            </div>
          </Modal>
        )}
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
