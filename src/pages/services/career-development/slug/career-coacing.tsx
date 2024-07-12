import { useState } from 'react';

import Ready from 'components/benners/Banner';
import Button from 'components/buttons/Button';
import Jumbotron from 'components/Jumbotron';
import UnstyledLink from 'components/links/UnstyledLink';

import Card from '../components/Card';

export const detail = [
  {
    title: 'less than a year',
    details: [
      {
        name: 'Get In Touch',
        description: 'Complete a questionnaire to share information about yourself, your career goals, experience, and skills. This helps us understand how to assist you better!',
      },
      {
        name: 'Schedule Consultation',
        description: 'After reviewing your questionnaire, we\'ll contact you to set up the first coaching schedule.',
      },
      {
        name: 'Initial Coaching Session',
        description: 'In your first coaching session, we\'ll delve into your background, assess your issues, understand your expectations, and set a goal for you.',
      },
      {
        name: 'CV and Linkedin Review',
        description: 'We\'ll review your CV and LinkedIn profile to ensure they effectively highlight your skills and experiences.',
      },
      {
        name: 'Closing and Follow-Up',
        description: 'This session aims to review your assignment results, identify any gaps, and determine the next steps to help you secure your dream career.',
      }
    ],
  },
  {
    title: 'more than a year',
    details: [
      {
        name: 'Get In Touch',
        description: 'Complete a questionnaire to share information about yourself, your career goals, experience, and skills. This helps us understand how to assist you better!',
      },
      {
        name: 'Schedule Consultation',
        description: 'Complete a questionnaire to share information about yourself, your career goals, experience, and skills. This helps us understand how to assist you better!',
      },
      {
        name: 'Calibration Session',
        description: 'In your first coaching session, we align the goals, expectations, and the current situation to ensure the coaching process meets your needs effectively.',
      },
      {
        name: 'Coaching Session',
        description: 'You, guided by the coach, work to find solutions to your challenges.',
      },
      {
        name: 'CV and Linkedin Review',
        description: 'We\'ll review your CV and LinkedIn profile to ensure they effectively highlight your skills and experiences.',
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
  const [showLessThanYearDetails, setShowLessThanYearDetails] = useState(false);
  const [showMoreThanYearDetails, setShowMoreThanYearDetails] = useState(false);

  const handlePriceChange = (newPrice: string) => {
    setPrice(newPrice);
  };

  return (
    <>
      <Jumbotron imageName='career-coaching.png'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          Career Coaching
        </h1>
        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          LET’S FIND AND BUILD YOUR PERFECT CAREER
        </p>
      </Jumbotron>

      <Ready colorstyle='bg-slate-50'>
        <div className="text-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full h-auto">
          <h1 className='text-center text-primary-500'>What is Coaching?</h1>
          <h3 className='pt-5 pb-10 md:pb-8'>Training &ne; Coaching</h3>
          <div className="flex flex-col items-center justify-center gap-5 w-full px-4">
            <p className='text-base w-full md:w-1/2'>Coaching is a <strong>partnership with individuals</strong> in a creative process, to encourage and support someone, or even a team to achieve a goal in a measurable manner, and provide opportunities for coachees to develop or master certain skills</p>
            <p className='text-base w-full md:w-1/2'><strong>The purpose of coaching is a to guide</strong> the coachee, where in the process a coach assists the coachee in achieving self-determined goals by facilitating thought, generating insights, structuring thinking, and ensuring follow-through on actions.</p>
          </div>
        </div>
      </Ready>

      <section className="bg-[#f8f8f8]">
        <div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full h-auto mx-auto py-40">
          <h1 className='text-center'>How many years have you worked full-time?</h1>
          <div className="w-full h-auto flex flex-wrap justify-center items-center gap-5 md:gap-50 text-white pt-10">
            <UnstyledLink to='#priceView'>
              <Button onClick={() => { handlePriceChange('Price is Rp. 300.000'); setShowLessThanYearDetails(true); setShowMoreThanYearDetails(false); }} className='relative py-5 px-8' variant='primary'>
                <span className="animate-ping absolute -top-2 -right-2 h-5 w-5 rounded-full bg-yellow-500 opacity-75"></span>
                {'< 1 Year'}
              </Button>
            </UnstyledLink>
            <UnstyledLink to='#priceView'>
              <Button onClick={() => { handlePriceChange('Price is Rp. 500.000'); setShowLessThanYearDetails(false); setShowMoreThanYearDetails(true); }} className='relative py-5 px-8' variant='primary'>
                <span className="animate-ping absolute -top-2 -right-2 h-5 w-5 rounded-full bg-yellow-500 opacity-75"></span>
                1-7 Years
              </Button>
            </UnstyledLink>
            <UnstyledLink to='#priceView'>
              <Button onClick={() => { handlePriceChange('Price is Rp. 500.000'); setShowLessThanYearDetails(false); setShowMoreThanYearDetails(true); }} className='relative py-5 px-8' variant='primary'>
                <span className="animate-ping absolute -top-2 -right-2 h-5 w-5 rounded-full bg-yellow-500 opacity-75"></span>
                {'> 7 Years'}
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
              width={340}
              height={340}
              alt='Ilustration Image'
              className='w-full h-auto object-cover hover:scale-110 duration-150'
            />
          </div>
          <div className="place-self-center w-full md:w-4/5 h-auto px-5">
            <Card
              imageUrl='/images/career-coacing-icon.png'
              title='Career Coaching'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum ratione, officia animi commodi aut veritatis in asperiores impedit nemo.'
            >
              <p className="text-primary-500 font-bold text-center">{price}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full h-auto mx-auto py-20">
        {(showLessThanYearDetails || showMoreThanYearDetails) && (
          <h1 className='text-primary-500 pb-10 text-center'>How It Works</h1>
        )}

        {showLessThanYearDetails && (
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
        )}

        {showMoreThanYearDetails && (
          <div className="flex flex-wrap justify-center items-center gap-10 pt-10">
            {detail[1].details.map((detailItem, detailIndex) => (
              <div key={detailIndex} className="w-full md:w-1/3 h-auto rounded-xl shadow-md px-5 md:px-0">
                <Card                  imageUrl='/images/career-coacing-icon.png'
                  title={detailItem.name}
                  description={detailItem.description}
                />
              </div>
            ))}
          </div>
        )}

        {(showLessThanYearDetails || showMoreThanYearDetails) && (
          <div className="w-full h-auto flex justify-center items-center pt-10">
            <Button className='px-14 y-6 text-xl' variant='yellow'>Register Now</Button>
          </div>
        )}
      </section>

      <Ready
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
            width={240}
            height={240}
            alt="dummy"
            // classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
            className='hidden lg:block'
          />
        </div>
      </Ready>
    </>
  );
}

