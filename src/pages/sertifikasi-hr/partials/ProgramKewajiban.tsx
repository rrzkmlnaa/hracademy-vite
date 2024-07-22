'use client';
import { useState } from 'react';

export default function ProgramKewajiban() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const sections = [
    {
      title: '1. Sertifikasi untuk Staf SDM / Staf HR',
      text: `Sertifikasi HR Staff merupakan program sertifikasi HR yang diberikan untuk level staf dan mereka yang belum ada pengalaman karir di HR. Program ini bertujuan untuk meningkatkan kompetensi personil dalam melaksanakan tugas administrasi MSDM. Program ini berlisensi Badan Nasional Sertifikasi Profesi (BNSP), rujukan di Indonesia untuk mengambil sertifikasi profesi bersertifikasi yang berlaku hingga level Asia Tenggara.`,
      list: [
        'Sertifikat Staf SDM/Staff HR BNSP (KKNI Level 3)',
        'Investasi: Rp2.700.000'
      ]
    },
    {
      title: '2. Sertifikasi untuk Supervisor SDM / Supervisor HR',
      text: `Sertifikasi Supervisor SDM Double Degree Program Certified Human Resource Supervisor (CHRS) di HR Academy adalah program sertifikasi yang dirancang untuk tenaga supervisor SDM untuk meningkatkan kompetensi dalam mengelola sumber daya manusia dengan efektif. Program ini melibatkan pembelajaran 5 unit kompetensi yang meliputi penyusunan uraian jabatan, SOP, remunerasi, pembelajaran dan pengembangan, serta penyusunan kesepakatan kerja, memberikan landasan yang kokoh bagi para supervisor SDM.`,
      list: [
        'Sertifikat Supervisor SDM / Supervisor HR BNSP (KKNI Level 4)',
        'Sertifikat Certified Human Resource Supervisor (CHRS) dari HR Academy',
        'Investasi: Rp5.500.000'
      ]
    },
    {
      title: '3. Sertifikasi untuk Manager SDM / Manager HR',
      text: `Sertifikasi Manajer SDM Double Degree Program Certified Human Resources Professional (CHRP) HR Academy adalah program sertifikasi yang dirancang untuk membekali para profesional SDM dengan keterampilan dan pengetahuan mendalam dalam mengelola aspek-aspek kritis, termasuk rekrutmen, pelatihan, dan manajemen kinerja. Program ini memastikan bahwa tenaga manajer SDM memiliki kompetensi tinggi untuk memastikan keberlanjutan operasional dan pertumbuhan yang sehat dalam organisasi.`,
      list: [
        'Sertifikat Manager SDM/Manager HR BNSP (KKNI Level 6)',
        'Sertifikat Certified Human Resource Professional (CHRP) dari HR Academy',
        'Investasi: Rp7.500.000'
      ]
    },
    {
      title: '4. Sertifikasi untuk General Manager SDM / General Manager HR',
      text: `Sertifikasi General Manager SDM Double Degree Program Certified Human Capital General Manager (CHCGM) dirancang untuk tenaga profesional manajemen SDM level general manager, jajaran direksi, hingga komisaris. Program ini bertujuan memastikan keberlanjutan strategi SDM dan pengetahuan yang mendalam pada manajemen bisnis dan organisasi sesuai standar nasional SKKNI BNSP dan internasional C.HCGM.`,
      list: [
        'Sertifikat General Manager SDM/General Manager HR BNSP (KKNI Level 7)',
        'Sertifikat Certified Human Capital General Manager (CHCGM) dari HR Academy',
        'Investasi: Rp12.000.000'
      ]
    }
  ];

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl content-center pb-20">
          <div className="flex flex-wrap justify-evenly items-center gap-5">
          <h3 className='pt-20 text-primary font-bold text-3xl text-start'>
          Program Sertifikasi HR di HR Academy
        </h3>
            {sections.slice(0, 2).map((section, index) => (
              <div className='pl-11 pr-11 mt-8' key={index}>
                <h4 className='text-primary text-xl font-normal'>{section.title}</h4>
                <p className='text-lg leading-8'>{section.text}</p>
                <ul className="list-disc ml-12 text-lg leading-8">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {showMore && sections.slice(2).map((section, index) => (
              <div className='pl-11 pr-11 mt-8' key={index + 2}>
                <h4 className='text-primary font-normal'>{section.title}</h4>
                <p className='text-lg leading-8'>{section.text}</p>
                <ul className="list-disc ml-12 text-lg leading-8">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='ml-12 mt-8'>
            <a onClick={toggleShowMore} className="cursor-pointer text-blue-500 underline">
              {showMore ? 'Lihat Lebih Sedikit' : 'Selengkapnya'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
