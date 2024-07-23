import ArrowLink from './links/ArrowLink';
import Button from './Button'

export interface propTypes {
  bgColor: string;
  title: string;
  imagUrls: string[]; // Tambahkan properti ini
  alts: string[];
  readMore?: string;
}

const clients = [
  { src: '/images/dbs-Logo.webp', alt: 'DBS Company' },
  { src: '/images/deloitte.webp', alt: 'Deloitte Company' },
  { src: '/images/pertamina.webp', alt: 'Pertamina Company' },
  { src: '/images/pwc.webp', alt: 'PWC Company' },
  { src: '/images/rsm.webp', alt: 'RSM Company' },
  { src: '/images/sc-johnson.webp', alt: 'SC Johnson Company' },
  { src: '/images/zahir.webp', alt: 'Zahir Company' },
  { src: '/images/bukopin-syariah.webp', alt: 'Bank Bukopin Company' },
  { src: '/images/paragon.webp', alt: 'Paragon Company' },
  { src: '/images/tvri.webp', alt: 'TVRI Company' },
];

const Client = ({ bgColor, title, imagUrls, alts, readMore }: propTypes) => {
  return (
    <section className={`${bgColor}`}>
      <div className="mx-auto max-w-screen-xl">
        <h1 className='text-center text-primary font-bold text-4xl mb-5'>{title}</h1>
        <div className='flex flex-wrap justify-center items-center gap-10 p-8'>
          {imagUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              width={100}
              height={80}
              alt={alts[index]}
              className='w-24 h-auto object-cover hover:scale-110 duration-150'
            />
          ))}
        </div>
        <div className={`text-center mt-10 ${readMore}`}>
        <Button type="link" text="Read Success Story" to="/success-story" />
      </div>
      </div>
    </section>
  );
};

export { clients }; // Ekspor clients di sini

export default Client;
