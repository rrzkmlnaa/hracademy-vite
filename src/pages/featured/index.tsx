'use client'

import UnderlineLink from "components/links/UnderlineLink";
import { FeaturedData } from 'constant/index';

// Definisi properti untuk FeaturedItem
interface FeaturedItemProps {
  title: string;
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
  slug: string;
}

// Komponen untuk menampilkan item featured
const FeaturedItem: React.FC<FeaturedItemProps> = ({ title, imageUrl, alt, children, slug }) => {
  return (
    <div className='flex flex-wrap flex-col p-3 gap-3'>
      <img
        src={imageUrl}
        alt={alt}
        className='place-self-center w-full h-auto rounded-md object-cover'
      />
      <div className="w-full h-52 overflow-hidden">
        <h4 className="w-full h-24 overflow-hidden font-bold text-lg">{title}</h4>
        <p className="w-full h-28 overflow-hidden">{children}</p>
      </div>
      <div className='text-start'>
        <UnderlineLink to ={`/featured/${slug}`}>Read more</UnderlineLink>
      </div>
    </div>
  );
};

// Komponen utama untuk menampilkan daftar featured items
export default function FeaturedView() {
  return (
    <section className="container mx-auto max-w-screen-xl min-h-96 py-10">
      <h1 className='py-5 text-center md:text-start font-bold text-5xl px-3'>Issues</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FeaturedData.map((item, index) => (
          <FeaturedItem key={index} {...item}>
            {item.shortDescription}
          </FeaturedItem>
        ))}
      </div>
    </section>
  )
}
