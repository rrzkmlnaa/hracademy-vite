import { useState } from 'react';

import Banner from 'components/benners/Banner';
import Button from 'components/buttons/Button';
import Jumbotron from 'components/Jumbotron';
import UnstyledLink from 'components/links/UnstyledLink';

import Card from '../components/Card';

export const detail = [
  {
    title: 'less than a year',
    details: [
      {
        name: 'Send your CV',
        description: 'Send us your CV along with your career objectives to help us understand how best to assist you!',
      },
      {
        name: 'We Fix Your CV',
        description: 'We’ll refine your CV to highlight why you’re the ideal candidate for the job in 1-3 days. ',
      },
      {
        name: 'Feedback Session',
        description: 'Personalized session where we discuss your CV to ensure it aligns perfectly with your goals.',
      },
      {
        name: 'Receive your CV',
        description: 'We will send your revised CV along with personalized comments to enchance and helped you get your dream job. ',
      },
      {
        name: 'Closing and Follow-Up',
        description: 'This session aims to review your assignment results, identify any gaps, and determine the next steps to help you secure your dream career.',
      }
    ],
  },
];

export default function Index() {
  const [price, setPrice] = useState('Select the year above to display the price');

  const handlePriceChange = (newPrice: string) => {
    setPrice(newPrice);
  };

  return (
    <>
      <Jumbotron
        imageName='cv-revision.png'
      >
        <h1 className='text-4xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          CV Revision
        </h1>
        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          CRAFT A RESUME THAT LANDS YOUR DREAM JOB. LET US TRANSFORM YOUR CV AND PAVE THE WAY TO A BRIGHTER FUTURE.
        </p>
      </Jumbotron>

      <section className="bg-[#f8f8f8]">
        <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full h-auto mx-auto py-40">
          <h1 className='text-center'>What services is best for you?</h1>
          <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 md:gap-50 text-white pt-10">
            <UnstyledLink to='#priceView'>
              <Button onClick={() => { handlePriceChange('Price is Rp. 25.000') }} className='relative py-5 px-8' variant='primary'>
                <span className="animate-ping absolute -top-2 -right-2 h-5 w-5 rounded-full bg-yellow-500 opacity-75"></span>
                Revision Only
              </Button>
            </UnstyledLink>
            <UnstyledLink to='#priceView'>
              <Button onClick={() => { handlePriceChange('Price is Rp. 100.000') }} className='relative py-5 px-8' variant='primary'>
                <span className="animate-ping absolute -top-2 -right-2 h-5 w-5 rounded-full bg-yellow-500 opacity-75"></span>
                Schedule a Call
              </Button>
            </UnstyledLink>
            <UnstyledLink to='#priceView'>
              <Button onClick={() => { handlePriceChange('Price is Rp. 50.000') }} className='relative py-5 px-8' variant='primary'>
                <span className="animate-ping absolute -top-2 -right-2 h-5 w-5 rounded-full bg-yellow-500 opacity-75"></span>
                Create an “ATS” CV
              </Button>
            </UnstyledLink>
          </div>
        </div>
      </section>

      <section id="priceView" className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full h-auto mx-auto pt-40 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="place-self-center">
            <img
              src='/images/ilustration-web.png'
              alt='Ilustration Image'
              className='w-full h-auto object-cover hover:scale-110 duration-150'
            />
          </div>
          <div className="place-self-center w-full md:w-4/5 h-auto px-5">
            <Card
              imageUrl='/images/career-coacing-icon.png'
              title='CV Revision'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum ratione, officia animi commodi aut veritatis in asperiores impedit nemo.'
            >
              <p className="text-primary-500 font-bold text-center">{price}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full h-auto mx-auto py-20">
        <h1 className='text-primary-500 pb-10 text-center'>How It Works</h1>

        <div className="flex flex-wrap justify-center items-center gap-10 pt-10">
          {detail[0].details.map((detailItem, detailIndex) => (
            <div key={detailIndex} className="w-full md:w-1/3 h-auto rounded-xl shadow-md px-5 md:px-0">
              <Card
                imageUrl='/images/career-coacing-icon.png'
                title={detailItem.name}
                description={detailItem.description}
              />
            </div>
          ))}
        </div>

        <div className="w-full h-auto flex justify-center items-center pt-10">
          <Button className='px-14 y-6 text-xl' variant='yellow'>Register Now</Button>
        </div>
      </section>

      <Banner
        colorstyle='bg-blue-700 text-white p-10'
      >
        <div className="flex flex-wrap justify-between items-center px-6">
          <div className="block">
            <h2 className='text-3xl'>Questions about our services?</h2>
            <h5 className='pb-5 pt-2 text-xl'>Chat with our Success Team.</h5>
            <UnstyledLink to='https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0'>
              <Button
                variant='yellow'
              >
                Chat Now
              </Button>
            </UnstyledLink>
          </div>
          <img
            src='/images/dummy2.png'
            alt="dummy"
            className='object-cover w-full h-auto hidden lg:block'
          />
        </div>
      </Banner>
    </>
  );
}
