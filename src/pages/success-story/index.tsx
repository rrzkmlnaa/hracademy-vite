'use client'

import Banner from 'components/benners/Banner';
import Button from "components/buttons/Button";
import Client, { clients } from 'components/Client';
import Jumbotron from "components/Jumbotron";
import UnstyledLink, { UnstyledLinkProps } from 'components/links/UnstyledLink';

import ActualCareer from "./partials/ActualCareer";
import VideoTestimoni from "./partials/VideoTestimoni";

export default function Index() {
  const selectedClients = clients.slice(0, 11);
  const imagUrls = selectedClients.map(client => client.src);
  const alts = selectedClients.map(client => client.alt);

  return (
    <>
      <Jumbotron imageName='career-dev-banner.webp'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          Cerita Sukses
        </h1>
        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          BAGAIMANA KAMI MEMBANTU KLIEN, PEMIMPIN ORGANISASI, DAN PERUSAHAAN KAMI 
        </p>
      </Jumbotron>

      <Client
        bgColor='bg-slate-100 py-20 md:py-32'
        title='Klien kami sekarang bekerja di'
        imagUrls={imagUrls}
        alts={alts}
        readMore='hidden'
      />

      <ActualCareer />

      <VideoTestimoni />

      <Banner
        colorstyle='bg-slate-100 text-white pt-10'
      >
        <h1 className='text-center text-primary px-6 text-4xl font-bold'>Siap untuk meningkatkan kesuksesan Anda? </h1>
        <div className='my-5 flex flex-wrap justify-center'>
          <UnstyledLink to='/about-us/contact-us'>
            <Button
              isLoading={false}
              variant='light'
              size='base'
              className='bg-white text-primary hover:text-primary border-0 rounded-l-md rounded-r-none py-3 px-10'
            >
              Hubungi Kami
            </Button>
          </UnstyledLink>
          <UnstyledLink to='/#role'>
            <Button
              isLoading={false}
              variant='primary'
              className='text-white bg-primary border-0 rounded-r-md rounded-l-none py-3 px-6'
            >
              Kunjungi Layanan Kami
            </Button>
          </UnstyledLink>
        </div>
      </Banner>
    </>
  );
}
