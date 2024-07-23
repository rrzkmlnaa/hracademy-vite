'use client'

import Ready from 'components/benners/Banner';
import Button from 'components/Button';
import Jumbotron from 'components/Jumbotron'
// import UnstyledLink from 'components/links/UnstyledLink';

import BundleService from './components/BundleService';
import CareerDevelopment from './components/CareerDevelopment';

export default function index() {
  return (
    <>
      <Jumbotron
        imageName='career-dev-banner.webp'
      >
        <h1 className='text-4xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          Pengembangan Karier
        </h1>

        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          MEMBERDAYAKAN INDIVIDU DALAM MENCAPAI ASPIRASI KARIR MEREKA DENGAN
          PELATIHAN DAN SUMBER DAYA PENTING
        </p>
      </Jumbotron>
      <BundleService />
      <Ready
        colorstyle='bg-blue-700 text-white p-10'
      >
        <h1 className='text-center text-2xl md:text-5xl'>Rata-rata 3 Bulan <br />waktu untuk mendapatkan pekerjaan</h1>
      </Ready>
      <CareerDevelopment />
      <Ready
        colorstyle='bg-blue-700 text-white p-10'
      >
        <div className="flex flex-wrap justify-between items-center px-6">
          <div className="block">
            <h2 className='text-3xl'>Ada pertanyaan tentang layanan kami?</h2>
            <h5 className='pb-5 pt-2 text-xl'>Mengobrol dengan Tim Sukses kami.</h5>
            {/* <UnstyledLink to='https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0'>
              <Button
                variant='yellow'
              >
                Chat Now
              </Button>
            </UnstyledLink> */}
            <div className="mt-8 flex flex-wrap justify-center text-center md:justify-start">
              <Button
                type="link"
                to="https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0"
                color="warning"
                text="Chat Now"
                rounded
              />
            </div>
          </div>
          <img
            src='/images/dummy2.png'
            width={240}
            height={240}
            alt="dummy"
            // classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
            className='hidden lg:block'
          />
        </div>
      </Ready>
    </>
  )
}
