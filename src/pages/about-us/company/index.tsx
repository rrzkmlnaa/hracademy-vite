import Ready from 'components/benners/Banner';
import Button from 'components/buttons/Button';
import Banners from 'components/Jumbotron';
import UnstyledLink from 'components/links/UnstyledLink';

import Hra from './partials/about-hra';
import Chart from './partials/Chart';
import Coach from './partials/coach';
import Join from './partials/join';
import VisiMisi from './partials/visi-misi';

export default function Companys() {
  return (
    <>
      <Banners
        imageName='banner-aboutus.webp'
      >
        <h1 className='text-2xl font-extrabold md:text-5xl'>
          Di HR Academy, kami percaya pada
          pentingnya meningkatkan
          aspek sumber daya manusia untuk
          membentuk masa depan yang lebih cerah bagi
          organisasi, individu, dan
          masyarakat secara keseluruhan.
        </h1>
      </Banners>
      <Hra />
      <Chart />
      <VisiMisi />
      <Join />
      <Coach />
      <Ready
        colorstyle='bg-blue-800 text-white p-10'
      >
        <h2 className='text-center font-bold text-4xl'>Siap untuk meningkatkan kesuksesan Anda?</h2>
        <div className='my-5 flex flex-wrap justify-center'>
          <UnstyledLink to ='/about-us/contact-us'>
            <Button
              isLoading={false}
              variant='light'
              size='base'
              className='border-0 rounded-l-md rounded-r-none p-3'
            >
              Get In Touch
            </Button>
          </UnstyledLink>
          <UnstyledLink to ='/#role'>
            <Button
              isLoading={false}
              variant='dark'
              size='base'
              className='border-0 rounded-r-md rounded-l-none p-3'
            >
              Visit Our Services
            </Button>
          </UnstyledLink>
        </div>
      </Ready>
    </>
  )
}