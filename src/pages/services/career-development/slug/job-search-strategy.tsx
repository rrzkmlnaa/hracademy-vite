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
        name: 'Get in Touch',
        description: 'Complete a questionnaire to share information about yourself, your career goals, experience, and skills. This helps us understand how to assist you better!',
      },
      {
        name: 'Schedule Consultation',
        description: 'After reviewing your questionnaire, we\'ll contact you to set up first coaching schedule.',
      },
      {
        name: 'First Consultation',
        description: 'We\'ll talk about your job search experience and our strategies in a call to help kick-start your journey.',
      },
      {
        name: 'We develop your strategy',
        description: 'We tailored presentation  strategy presentation addressing your questions and employment goals.',
      },
      {
        name: 'Receive your job search strategy deck',
        description: ' Receive a personalized strategy that guides you on networking, standing out, and securing a job in your desired industry.',
      },
    ],
  },
];

export default function Index() {

  return (
    <>
      <Jumbotron
        imageName='job-search.png'
      >
        <h1 className='text-4xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          Job Search Strategy
        </h1>
        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          JOB SEARCH IS CHALLENGING, BUT OUR NETWORKING STRATEGIES SIMPLIFY THE PROCESS. LEARN HOW TO FORGE VALUABLE CONNECTIONS AND SECURE TOP-NOTCH REFERRALS WITH OUR GUIDANCE.
        </p>
      </Jumbotron>

      <section id="priceView" className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full h-auto mx-auto pt-40 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="place-self-center">
            <img
              src='/images/ilustration-web.png'
              width={340}
              height={340}
              alt='Ilustration Image'
              className='w-full h-auto'
              // classNames={{ image: 'object-cover hover:scale-110 duration-150', blur: 'blur' }}
            />
          </div>
          <div className="place-self-center w-full md:w-4/5 h-auto px-5">
            <Card
              imageUrl='/images/career-coacing-icon.png'
              title='Job Search Strategy'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum ratione, officia animi commodi aut veritatis in asperiores impedit nemo.'
            >
              <p className="text-primary-500 font-bold text-center">Rp. 300.000</p>
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
            width={240}
            height={240}
            alt="dummy"
            // classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
            className='hidden lg:block'
          />
        </div>
      </Banner>
    </>
  );
}
