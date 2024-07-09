import Button from 'components/Button'
import Modal from 'components/Modal'
import { useState } from 'react'
import { TbClover } from 'react-icons/tb'
import { Link } from 'react-router-dom'

interface CareerService {
  title: string
  description: string
  link: string
}

interface CareerSectionProps {
  services: CareerService[]
}

const CareerSection = ({
  services,
  setSelectedCard
}: CareerSectionProps & {
  setSelectedCard: (card: CareerService | null) => void
}) => {
  return (
    <div className="flex flex-wrap gap-5 md:gap-10">
      {services.map((service, index) => (
        <Link
          key={index}
          to={service.link}
          onClick={() => setSelectedCard(service)}
        >
          <div className="w-full rounded-xl p-3 hover:bg-[#fef148] hover:text-[#1075b8]">
            <div className="grid grid-cols-[auto,1fr] gap-2">
              <TbClover
                size="2rem"
                color="#38BDF8"
                className="size-fit rounded-full bg-white p-2"
              />
              <div className="block">
                <h3 className="text-start text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-start text-sm ">{service.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const services = [
  {
    title: 'Bimbingan Karier',
    description:
      'Butuh bimbingan profesional untuk meningkatkan karier Anda? Mari kita hubungkan Anda dengan mentor yang tepat.',
    link: '#scrollLimitations'
  },
  {
    title: 'Strategi Pencarian Kerja',
    description:
      'Optimalkan pencarian kerja Anda dengan panduan strategis kami. Biarkan kami membantu Anda menavigasi jalan menuju karier ideal Anda.',
    link: '#scrollLimitations'
  },
  {
    title: 'Persiapan Wawancara',
    description:
      'Persiapkan diri untuk sukses dengan bimbingan wawancara kami. Tingkatkan kepercayaan diri dan asah keterampilan Anda untuk sukses dalam wawancara mendatang Anda.',
    link: '#scrollLimitations'
  },
  {
    title: 'Revisi Surat Lamaran',
    description:
      'Kami akan menerjemahkan pengalaman kerja relevan Anda untuk membuat surat lamaran kerja yang sempurna dan meningkatkan peluang Anda untuk mendapatkan pekerjaan impian Anda.',
    link: '#scrollLimitations'
  },
  {
    title: 'Revisi CV',
    description:
      'Siap untuk lolos seleksi CV? Ayo buat CV Anda untuk menonjol.',
    link: '#scrollLimitations'
  },
  {
    title: 'Revisi LinkedIn',
    description:
      'Perbarui profil LinkedIn Anda. Berdiri secara profesional dan tarik peluang potensial.',
    link: '#scrollLimitations'
  },
  {
    title: 'Perencanaan Pengembangan Individu',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, labore nihil.',
    link: '#scrollLimitations'
  }
]

export default function Career() {
  const [selectedCard, setSelectedCard] = useState<CareerService | null>(null)

  const mainServices = services.slice(0, 3)
  const additionalServices = services.slice(3, 6)
  // const lastServices = services.slice(6, 7);

  return (
    <section id="career" className="bg-[#004AAD] text-white">
      <div className="mx-auto max-w-screen-xl pb-16 pt-24 text-center md:py-40">
        <a href="#career" className="text-base uppercase">
          Career development
        </a>
        <div className="mb-8 px-6 md:px-8">
          <p className="py-5 text-4xl font-bold">Butuh Peningkatan Karier?</p>
          <p id="scrollLimitations" className="text-balance text-center">
            Sementara beberapa orang terlahir dengan koneksi industri, banyak
            dari kita yang tidak seberuntung itu. Izinkan kami memandu Anda
            untuk mendapatkan pekerjaan impian Anda.
            <br />
            Itulah yang kami lakukan dengan sebaik-baiknya.
          </p>
        </div>
        <div className="mb-3 grid grid-cols-1 place-items-center px-3 py-5 md:px-3 lg:px-6 xl:grid-cols-3">
          <CareerSection
            services={mainServices}
            setSelectedCard={setSelectedCard}
          />
          <img
            src="/images/career.webp"
            width={350}
            height={350}
            loading="lazy"
            alt="Picture of the author"
            className="hidden content-center rounded-[8rem] object-cover duration-150 md:block xl:hover:scale-100"
          />
          <CareerSection
            services={additionalServices}
            setSelectedCard={setSelectedCard}
          />
        </div>
        {/* {lastServices.map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <div className='flex justify-start lg:justify-center gap-5 md:gap-10 my-5 p-3 xl:pl-14'>
              <div className='w-full xl:w-1/3 p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500 duration-150'>
                  <div className='flex justify-start gap-2'>
                    <TbClover size='2rem' color='#38BDF8' />
                    <h4 className='flex text-start xl:items-center'>{service.title}</h4>
                  </div>
                  <p className='text-sm text-left ml-10 md:ml-14'>{service.description}</p>
              </div>
            </div>
          </Link>
        ))} */}
        <a href="/services/career-development">
          <Button
            text="LIHAT SEMUA LAYANAN"
            type="link"
            color="warning"
            to="/services"
            rounded
          />
        </a>
      </div>
      {selectedCard && (
        <Modal onClose={() => setSelectedCard(null)}>
          <div className="text-black">
            <p className="text-primary pb-3 text-center text-xl font-semibold">
              {selectedCard.title}
            </p>
            {selectedCard.description && (
              <div
                dangerouslySetInnerHTML={{ __html: selectedCard.description }}
              />
            )}
          </div>
        </Modal>
      )}
    </section>
  )
}
