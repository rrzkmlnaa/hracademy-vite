'use client';

export default function VisiMisi() {
  return (
    <section className="relative bg-blue-800">
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl text-white">
        <img
          src='/images/contact.webp'
          width={600}
          height={500}
          alt='Mockup visi & misi'
          className="w-96 md:w-2/5 object-cover absolute h-screen left-0 rounded-r-[14rem] hidden md:block "
        />
        <div className="w-full content-center h-screen">
          <div className="grid grid-cols-1 md:grid-cols-4 content-center px-6 md:px-10">
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
            <div className='flex flex-col gap-5 md:gap-10 md:col-span-2'>
              <h4 className='text-3xl md:text-4xl text-center md:text-start'>Misi & Visi Kami</h4>
              <p className='text-base md:text-lg text-left'>HR Academy digerakkan oleh misi untuk mengembangkan pemimpin-pemimpin luar biasa yang akan membuka jalan bagi masa depan Indonesia yang lebih maju.</p>
              <p className='text-base md:text-lg text-left'>Visi kami adalah mengubah pemikiran kritis menjadi solusi praktis untuk masalah yang ada. Kami berkolaborasi dengan banyak komunitas, organisasi, mitra pendidikan, institusi, dan bahkan lintas negara untuk dapat memperoleh beragam keterampilan, menciptakan lapangan kerja baru, menghasilkan lulusan yang siap kerja, menginspirasi generasi muda, dan memberikan dampak positif bagi masyarakat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
