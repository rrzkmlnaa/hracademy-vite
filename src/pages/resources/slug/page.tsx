'use client'

import React from 'react';
import { useParams } from 'react-router-dom';

import ArrowLink from 'components/links/ArrowLink';
import { ResourceData } from 'constant/index';
import ContactForm from './Form';

interface Workshop {
  slug: string;
  link: string;
  title: string;
  description: string;
  category: string;
  buttonText: string;
  documentPATH: string;
}

const ResourceDetail = () => {
  const { slug } = useParams<{ slug: string }>(); // Mengambil slug dari URL

  // Mencari workshop yang sesuai dengan slug
  const selectedWorkshop: Workshop | undefined = ResourceData.find(
    (item) => item.slug === slug
  );

  if (!selectedWorkshop) {
    return <div>Page Not Found</div>;
  }

  return (
    <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full h-auto">
      <h1 className='text-center font-bold text-4xl mt-5'>HR Academy Resume Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 xl:px-0 py-10 md:py-20">
        <div className="relative flex flex-col gap-2">
          <h4 className='text-primary font-bold text-lg'>JOB SEARCH RESOURCES</h4>
          <h5 className='font-bold text-3xl'>Get your free resource</h5>
          <p className='w-5/6'>Get your free resource The famous Wonsulting resume template! It's landed tons of jobs. Take control of your career today, or work with one of our career consultants to get hired.</p>
          <div className="block">
            <ArrowLink to ='/' direction='right' className='text-primary'>
              Go Back
            </ArrowLink>
          </div>
          <div className="relative flex justify-center mt-4">
            <img
              src='/images/resume-testing.png' 
              alt={selectedWorkshop.title}
              className="w-auto h-96 object-cover"
            />
            <div className="absolute pointer-events-none"></div>
          </div>
        </div>
        <div className="max-w-screen-xl w-full border-2 border-primary bg-sky-50 rounded-xl shadow-[16px_0_40px_#e4e4e4] p-5 h-auto">
          <h4 className='pt-10 pb-5 font-bold text-3xl'>HR Academy</h4>
          <p>Just a few details before we send you our resume template!</p>
          <ContactForm fileDownload={selectedWorkshop.documentPATH} />
        </div>
      </div>
    </section>
  );
};

export default ResourceDetail;
