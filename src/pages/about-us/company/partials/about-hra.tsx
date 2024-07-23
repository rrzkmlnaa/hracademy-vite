'use client'

import Button from 'components/Button';

export default function HRACademy() {
  return (
    <section className="mx-auto max-w-screen-xl min-h-96 py-14 md:pt-40 px-6 md:px-10">
      <h1 className="text-2xl font-extrabold md:text-5xl">
        Jalan Anda Menuju Sukses Dimulai dari Sini
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 my-10 items-center">
        <div className='flex flex-col gap-10 justify-center col-span-2' >
          <p>
            HR Academy adalah mitra berdedikasi Anda dalam pengembangan karier dan konsultasi SDM. Melalui{' '}
            <span className="font-bold">layanan kami</span>, kami memberdayakan para profesional dan bisnis untuk menjadi lebih unggul. Bukti kemahiran kami adalah rekam jejak kami dalam membimbing para profesional SDM untuk mencapai sertifikasi CHRP di bawah skema SKKNI nomor 149 tahun 2020.
          </p>
          <p>
            Bentuk kelembagaan kami meliputi <span className="font-bold">Lembaga Pelatihan Kerja (LPK)</span> No:
            01/G2/31.75.01.1001/016R5/3/-1.837/2020, dan <span className="font-bold">Sertifikasi Profesional
            Lembaga (LSP P1)</span> dengan penekanan pada Lembaga Konsultasi Manajemen, Lembaga Pendidikan Kejuruan dan
            Lembaga Pendidikan Kejuruan dan Profesi, Lembaga Pelatihan Kerja Swasta, Lembaga Seleksi dan
            Lembaga Penempatan Tenaga Kerja Dalam dan Luar Negeri, Lembaga Pelatihan Kerja Bisnis dan Manajemen.
            Lembaga Pelatihan Bisnis dan Manajemen.
          </p>
        </div>
        <div className="md:border-l-2 md:border-black grid grid-rows-2 place-items-center">
          <div className="flex justify-start items-center">
            <img
              src="/images/LPK.webp"
              width={320}
              height={350}
              alt="LPK Image"
              className='w-full lg:w-96 h-auto'
            />
          </div>
          <div className="text-black px-6 md:px-10">
            <h2 className="font-bold">Program LSP kami mengacu pada SKKNI sebagai berikut:</h2>
            <ul className="list-disc pl-10">
              <li>SKKNI 149 tahun. 2020 (HRM)</li>
              <li>SKKNI 55 tahun. 2009 (Tour Guide)</li>
              <li>SKKNI 389 tahun. 2013 (Entrepreneurship)</li>
              <li>SKKNI 247 tahun. 2007 (Export)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center text-center md:justify-start">
          <Button
            type="link"
            to="/about-us/contact-us"
            color="warning"
            text="Jelajahi program Di Sini"
            rounded
          />
        </div>
    </section>
  );
}
