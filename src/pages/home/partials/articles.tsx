import { Mousewheel, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { FeaturedData } from 'constant/index'
import Button from 'components/Button'
import { Link } from 'react-router-dom'

interface FeaturedItemProps {
  title: string
  imageUrl: string
  alt: string
  children: React.ReactNode
  slug: string
}

interface styledCustomProps {
  head: string
  headColor: string
  sectionStyled: string
}

const FeaturedItem = ({ title, imageUrl, alt, slug }: FeaturedItemProps) => {
  return (
    <div className="flex flex-col flex-wrap gap-3 p-3">
      <img
        src={imageUrl}
        width={340}
        height={340}
        alt={alt}
        loading="lazy"
        className="h-auto w-full place-self-center rounded-md object-cover"
      />
      <div className="w-full overflow-hidden">
        <Link to={`/featured/${slug}`}>
          <h3 className="h-24 w-full overflow-hidden font-sans text-lg font-extrabold text-lime-200">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default function Featured({
  head,
  headColor,
  sectionStyled
}: styledCustomProps) {
  return (
    <section className={`${sectionStyled}`}>
      <div className="container mx-auto min-h-96 max-w-screen-xl content-center px-6 pt-6">
        <p
          className={`py-5 ${headColor} px-3 text-center text-4xl font-bold md:text-start`}
        >
          {head}
        </p>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 3
            }
          }}
          mousewheel={{
            forceToAxis: true
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Mousewheel]}
        >
          {FeaturedData.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedItem {...item}>{item.shortDescription}</FeaturedItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="pb-12 text-center">
        <Button
          type="link"
          to="/featured"
          text="Lihat Semua Artikel"
          color="warning"
          rounded
        />
      </div>
    </section>
  )
}
