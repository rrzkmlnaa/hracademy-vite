import { Autoplay, Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

export default function Course() {
  const courses = [
    {
      title: 'Staff HR',
      imageUrl: '/images/SH.jpg',
      price: 'Rp. 2.700.000',
      link: '#'
    },
    {
      title: 'Certified Human Resources Supervisor HR Academy',
      imageUrl: '/images/chrs.jpg',
      price: 'Rp. 5.500.000',
      link: '#'
    },
    {
      title: 'Certified Human Resource Professional HR Academy',
      imageUrl: '/images/chrp.jpg',
      price: 'Rp. 7.500.000',
      link: '#'
    },
    {
      title: 'Certified Human Capital General Manager HR Academy',
      imageUrl: '/images/chcgm.jpg',
      price: 'Rp. 12.000.000',
      link: '#'
    }
  ]

  return (
    <section
      id="course"
      className="mx-auto min-h-96 max-w-screen-xl content-center px-6 pb-16 pt-24 md:px-0"
    >
      <div className="text-primary text-center">
        <div className="flex flex-nowrap items-center justify-center pb-5">
          <img
            src="/images/LPK.webp"
            width={140}
            height={50}
            alt="LPK Image"
            loading="lazy"
            className="h-auto w-32 object-cover duration-150 hover:scale-110"
          />
          <img
            src="/images/BNSP.webp"
            width={90}
            height={50}
            alt="BNSP Image"
            loading="lazy"
            className="h-auto w-20 object-cover duration-150 hover:scale-110"
          />
        </div>
        <a href="#course">PROGRAM PELATIHAN DAN SERTIFIKASI</a>
        <h6 className="p-5 text-4xl font-bold">
          Tingkatkan Keterampilan Anda
          <br />
          Jadilah Pemimpin yang Dihormati
        </h6>
        <p className="">
          Program pelatihan oleh praktisi berpengalaman dan dilengkapi dengan
          sertifikasi berlisensi BNSP
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 4
          }
        }}
        spaceBetween={30}
        navigation={true}
        mousewheel={{
          forceToAxis: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        modules={[Navigation, Mousewheel, Autoplay]}
        className="mt-12"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className="pb-5">
            <div className="h-max w-full overflow-hidden rounded-lg bg-white shadow">
              <img
                src={course.imageUrl}
                className="h-auto w-full object-cover"
                alt={course.title}
                title={course.title}
                width={320}
                height={240}
                loading="lazy"
              />
              <div className="p-4">
                <span className="mt-3 border-slate-300 pb-4 text-lg font-bold">
                  <Link to={course.link}>{course.title}</Link>
                </span>
                <div className="my-3">
                  <p>Harga</p>
                  <span className="font-bold">{course.price}</span>
                </div>
                {/* <Button
                  isLoading={false}
                  variant='primary'
                  size='base'
                  className='w-full uppercase flex justify-center border-none'
                >
                  lihat detail
                </Button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
