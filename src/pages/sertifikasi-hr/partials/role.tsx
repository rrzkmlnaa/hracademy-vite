import UnstyledLink from 'components/links/UnstyledLink';

interface RoleTypes {
  title: string;
  subtitle: string;
  bgColor: string;
  titleStyle: string;
  roles: {
    titleActivity: string;
    subtitle: string;
    link: string;
    imageUrl: string;
  }[];
}

export const roles = [
  { titleActivity: 'individual', subtitle: 'Individu yang baru ingin memulai karier di dunia HR', link: 'career', imageUrl: 'individual.webp' },
  { titleActivity: 'hr-professionals', subtitle: 'HR staff, HR Supervisor, HR Manager, Direktur HR dan CEO', link: 'course', imageUrl: 'hr-professionals.webp' },
  { titleActivity: 'corporate', subtitle: 'Mengembangkan kompetensi tim SDM untuk mendukung perusahaan', link: 'solution', imageUrl: 'corporate.webp' },
];

export default function Roles({ title = '', subtitle = '', bgColor = '', titleStyle = '', roles = [] }: RoleTypes) {
  return (
    <section id='role' className={`${bgColor} py-20`}>
      <div className="max-w-screen-xl mx-auto">
        <h5 className='text-[#004AAD] text-2xl lg:text-5xl p-3 uppercase font-bold text-center'>{title}</h5>
        <p className='text-base text-gray-500 text-center'>{subtitle}</p>
        <div className='flex flex-wrap justify-center gap-5 mt-14'>
          {roles.map((role, index) => (
            <UnstyledLink to ={`#${role.link}`} key={index} className='relative'>
              <img
                src={`/images/${role.imageUrl}`}
                width={400}
                height={320}
                alt={`${role.titleActivity} Role`}
                className='w-96 h-auto px-5 relative'
              />
              <div className={`absolute left-0 bottom-0 ${titleStyle} bg-[#004AAD] mx-5 w-[70%] max-w-[300px] text-white p-3 rounded-md`}>
                <p className='uppercase text-sm px-1'>{role.titleActivity}</p>
                <p className='px-1 text-sm font-normal text-[12px]'>{role.subtitle}</p>
              </div>
            </UnstyledLink>
          ))}
        </div>
      </div>
    </section>
  );
}
