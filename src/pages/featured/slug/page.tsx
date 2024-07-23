'use client'

import { FeaturedData } from 'constant/index';
import Featured from './Index';
import { useParams } from 'react-router-dom';

interface Featured {
  slug: string; // Menambahkan slug untuk pencarian
  date: string;
  creator: string;
  title: string;
  imageUrl: string;
  alt: string;
  content: string;
}

const FeaturedDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const featured: Featured | undefined = FeaturedData.find((item) => item.slug === slug);

  if (!featured) {
    return <div>Page Not Found</div>;
  }

  const htmlContent = featured.content;

  return (
    <>
      <div className='container mx-auto max-w-screen-xl min-h-96 py-10 px-5 md:px-10 xl:px-0'>
        <div className="flex gap-5 py-5">
          <h5 className='border-r-3 border-black pr-5'>{featured.date}</h5>
          <h5>{featured.creator}</h5>
        </div>
        <img
          src={featured.imageUrl}
          alt={featured.alt}
          className='w-full h-auto rounded-md object-cover'
        />
        <h1 className='text-xl md:text-4xl lg:text-5xl py-5'>{featured.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <Featured
        head='Our Latest Featured'
        headColor='text-black'
        sectionStyled='bg-white text-black'
      />
    </>
  );
};

export default FeaturedDetail;
