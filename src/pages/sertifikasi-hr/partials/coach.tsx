'use client'

import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import UnderlineLink from 'components/links/UnderlineLink';
import UnstyledLink from 'components/links/UnstyledLink';
export default function Coach() {
  return (
    <section id='coach' className="mx-auto max-w-screen-xl py-24 px-6 md:px-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-10">
        <img
          src='/images/coachwulan.webp'
          width={450}
          height={450}
          alt='coach wulan'
          className='w-1/2 md:w-full px-auto hover:scale-110 duration-150'
        />
        <div className="flex flex-warp flex-col gap-3 justify-start">
          <UnderlineLink to ='#coach' className='text-gray-500 text-lg lg:text-xl w-fit'>
            CEO, PELATIH SENIOR
          </UnderlineLink>
          <h2 className='font-bold text-primary text-xl lg:text-3xl'>TEMUI PEMIMPIN KAMI</h2>
          <h3 className='font-bold text-primary text-2xl'>SRI WULANDARI, EPC, S.IP, MBA.</h3>
          <p className="text-justify">
            Coach Wulan, visioner di balik HR Academy, membawa
            lebih dari 25 tahun pengalaman yang luas sebagai pelatih,
            pembicara, dan praktisi SDM di perusahaan multinasional.
            multinasional. Bersertifikat oleh BNSP dan ICF, ia aktif
            aktif menjadi pelatih di bidang HRM, Kewirausahaan, dan Karier & Bisnis.
            Bisnis. Dengan keahlian yang mencakup pengembangan pribadi
            pengembangan diri, personal branding, dan keterampilan karir,
            Coach Wulan berkomitmen untuk memberdayakan individu
            untuk unggul dalam perjalanan profesional mereka.
          </p>
          <p className='font-bold mt-5 md:mt-24 ml-1'>Hubungi Coach Wulan</p>
          <div className="flex justify-start flex-nowrap gap-5 ml-1 text-primary">
            <UnstyledLink to ='https://www.facebook.com/hracademy1/'><FaFacebookSquare size='1.5em' /></UnstyledLink>
            <UnstyledLink to =''><FaTwitter size='1.5em'/></UnstyledLink>
            <UnstyledLink to ='https://www.instagram.com/coachwulan_/'><FaInstagram size='1.5em' /></UnstyledLink>
            <UnstyledLink to ='https://www.linkedin.com/in/sri-wulandari-epc-s-ip-mba-5b643aa/'><FaLinkedin size='1.5em' /></UnstyledLink>
          </div>
        </div>
      </div>
    </section>
  )
}