'use client'

export default function Kewajiban() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl content-center pb-20">
          <div className="flex flex-wrap justify-evenly items-center gap-5">
          <h2 className='pt-20 text-primary font-bold text-2xl md:text-5xl text-start'>
          Kewajiban Sertifikasi HR
        </h2>
            <div className='pl-7 pr-7 mt-5 '>
              <p className='text-[20px] md:text-xl leading-6 md:leading-10'>
                Pentingnya sertifikasi HR tidak hanya diakui oleh industri, tetapi juga telah diatur oleh pemerintah Indonesia melalui peraturan-peraturan berikut:
              </p>
              <ol className="list-decimal mt-5 ml-12 md:text-xl text-[18px]  md:leading-10 leading-8">
                <li>
                  Surat Edaran Menakertrans RI No. M/5/HK.04.00/VII/2019 tentang Pemberlakuan Wajib Sertifikasi Kompetensi Terhadap Jabatan Bidang Manajemen Sumber Daya Manusia.
                </li>
                <li>
                  Surat Keputusan Menteri Ketenagakerjaan RI No. 115 tahun 2022 tentang Pemberlakuan Wajib Sertifikasi Kompetensi Kerja bagi Tenaga Kerja Bidang Manajemen Sumber Daya Manusia.
                </li>
              </ol>
              <p className='text-[20px] md:text-xl leading-6 md:leading-10 mt-4'>
                Dengan kewajiban sertifikasi ini, profesional SDM diharapkan dapat meningkatkan kualitas kerja dan memberikan kontribusi signifikan dalam organisasi.
                Sertifikasi HR membuktikan kemampuan dan pengetahuan di bidang SDM, 
                serta merupakan investasi jangka panjang untuk pengembangan karier dan kapabilitas individu dalam menghadapi dinamika dunia kerja.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
