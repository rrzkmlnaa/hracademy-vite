'use client'

import { Link } from "react-router-dom";
import Button from "components/buttons/Button";

export default function Join() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl my-24 px-6 md:px-10">
        <h1 className="font-bold text-4xl">Bergabung dengan HRA UMKM</h1>
        <p className="py-5 text-justify">Kami juga berperan sebagai mitra pengembangan Usaha Kecil, Mikro, dan Menengah (UKM),
        inkubator terdaftar yang terakreditasi <br className='hidden md:block' /> oleh Kementerian Koperasi dan UKM Republik Indonesia di bawah
        Indonesia di bawah Inkubator Koperasi dan Usaha Mikro, Kecil, <br className='hidden md:block' />dan Usaha Menengah,
        dengan nomor sertifikat 202100131.
        </p>
        <Link to="https://api.whatsapp.com/send/?phone=6285942210575&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu%3F&type=phone_number&app_absent=0">
          <Button
            variant='yellow'
            className="border-none"
          >
            Gabung Sekarang
          </Button>
        </Link>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl content-center">
          <div className="flex flex-wrap justify-evenly items-center gap-10 py-10">
            <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4">
              <img
                src='/images/komunitas.webp'
                alt='Community UI'
                className="w-10/12 h-auto object-cover hover:scale-110 duration-150"
              />
              <p className='text-center p-5'>2000+ Anggota</p>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4">
              <img
                src='/images/mentor.webp'
                alt='Mentor UI'
                className="w-10/12 h-auto object-cover hover:scale-110 duration-150"
              />
              <p className='text-center p-5'>300+ Anggota</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
