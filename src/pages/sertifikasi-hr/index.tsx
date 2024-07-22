'use client'

import Button from 'components/buttons/Button'
import Jumbotron from 'components/Jumbotron'

import Sertifikasi from './partials/sertifikasi'
import Kewajiban from './partials/kewajiban'
import ProgramSertifikasi from './partials/ProgramKewajiban'
import Keunggulan from './partials/Keunggulan'
import Benefit from './partials/benefit'
import Role, { roles } from './partials/role'
import Testimonial from './partials/testimonial'
import Success from './partials/SuccessStories' 
import Prosess from './partials/Prosess'
import Faq from './partials/Faq'
import Coach from './partials/coach'
import UnstyledLink from 'components/links/UnstyledLink'

export default function Index() {
  return (
    <>
      <Jumbotron imageName='banner-landingpage.webp'>
        <h1 className='text-5xl font-extrabold text-center md:text-start'>
          Sertifikasi HR Terbaik di Indonesia
        </h1>

        <p className='mt-4 max-w-lg text-xl/relaxed text-center md:text-start'>
          Dapatkan sertifikasi HR yang diakui secara internasional dan BNSP dari HR Academy.
          Mulai dari staff hingga GENERAL MANAGER HR, tingkatkan karier Anda dengan program kami.
        </p>

        <div className='mt-8 flex flex-wrap text-center justify-center md:justify-start'>
          <UnstyledLink to ='/about-us/contact-us'>
            <Button isLoading={false} variant='yellow' className='border-0 rounded-none font-bold'>
              Daftar Sekarang
            </Button>
          </UnstyledLink>
        </div>
      </Jumbotron>

      <Sertifikasi />

      <div className="mb-16 mx-auto w-3/4 h-px bg-gray-300"></div>

      <Kewajiban />

      <div className=" mx-auto w-3/4 h-px bg-gray-300"></div>

      <ProgramSertifikasi />

      <Keunggulan />

      <Benefit />

      <Role 
        title="Untuk Siapa HR Academy Hadir? " 
        bgColor="bg-gray-50" 
        titleStyle="text-xl font-bold" 
        roles={roles} 
      />


      <Testimonial />

      <Success />

      <Prosess />

      <Faq />

      <Coach />

      <div className='flex justify-center items-center mb-20'>
      <UnstyledLink to ='/about-us/contact-us'>
            <Button
              isLoading={false}
              variant='primary'
              size='base'
              className='border-0 rounded-l-md rounded-r-none p-5'
            >
              Daftar Sertifikasi HR Sekarang
            </Button>
          </UnstyledLink>
          <UnstyledLink to ='/#role'>
            <Button
              isLoading={false}
              variant='dark'
              size='base'
              className='border-0 rounded-r-md p-5 rounded-l-none'
            >
              Unduh Katalog Program Sertifikasi HR
            </Button>
          </UnstyledLink>
          </div>

    </>
  )
}
