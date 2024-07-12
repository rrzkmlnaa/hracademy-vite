'use client'

import Button from 'components/buttons/Button';
import UnderlineLink from 'components/links/UnderlineLink';
import UnstyledLink from 'components/links/UnstyledLink';

export default function bundleService() {
    return (
        <section id="bundleservice" className="container mx-auto w-full h-auto px-6 py-20">
            <div className="flex flex-col justify-center items-center">
                <UnderlineLink to='#bundleservice' className='uppercase text-gray-500'>
                    Layanan paket
                </UnderlineLink>
                <h1 className='text-5xl text-primary font-bold py-5'>Dapatkan seluruh paket karier</h1>
                <p className='text-xl text-gray-500'>Berikut adalah cara untuk mendapatkan pekerjaan impian Anda dengan layanan bundel kami</p>
                <img
                    src='/images/dummy.png'
                    width={850}
                    height={250}
                    alt="dummy"
                    className='hidden xl:block pt-10 object-cover w-10/12 h-auto'
                />
                <div className="flex flex-wrap md:justify-center xl:justify-evenly items-center gap-5 md:gap-10 xl:gap-20 mb-10 my-10 font-bold">
                    <p>Orientasi & Konsultasig</p>
                    <p>Optimalisasi Karier & Jaringan   </p>
                    <p>Persiapan Wawancara Sukses </p>
                    <p>Dukungan Berkelanjutan</p>
                </div>
                <UnstyledLink to='https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0'>
                    <Button
                        variant='yellow'
                        size='base'
                    >
                        Mendaftar untuk Layanan Paket
                    </Button>
                </UnstyledLink>
            </div>
        </section>
    )
}
