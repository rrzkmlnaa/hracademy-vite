'use client'

import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from 'components/buttons/Button';
import UnderlineLink from 'components/links/UnderlineLink';
import UnstyledLink from 'components/links/UnstyledLink';
import { FeaturedData } from 'constant/index';

interface FeaturedItemProps {
  title: string;
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
  slug: string;
}

interface StyledCustomProps {
  head: string;
  headColor: string;
  sectionStyled: string;
}

const FeaturedItem = ({ title, imageUrl, alt, children, slug }: FeaturedItemProps) => {
  return (
    <div className='flex flex-col p-3 gap-3'>
      <img
        src={imageUrl}
        alt={alt}
        className='w-full h-auto object-cover rounded-md'
      />
      <div className="w-full h-auto">
        <h4 className={`text-primary text-lg font-semibold mb-2`}>{title}</h4>
        <p className="text-base">{children}</p>
      </div>
      <div className='text-start mt-2'>
        <UnderlineLink to ={`/featured/${slug}`}>Read more</UnderlineLink>
      </div>
    </div>
  );
};

export default function Featured({ head, headColor, sectionStyled }: StyledCustomProps) {
  return (
    <section className={`${sectionStyled}`}>
      <div className='mx-auto max-w-screen-xl py-16 px-6'>
        <h1 className={`py-5 ${headColor} text-center md:text-start px-3 text-3xl font-bold`}>
          {head}
        </h1>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Mousewheel]}
          className="mySwiper"
        >
          {FeaturedData.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedItem {...item}>
                {item.shortDescription}
              </FeaturedItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <UnstyledLink to ='/featured' className="w-full flex justify-center items-center pb-10">
        <Button variant='yellow' className='px-10'>
          View More
        </Button>
      </UnstyledLink>
    </section>
  );
};
