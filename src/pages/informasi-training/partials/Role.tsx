import Jumbotron from "components/jumbo/Jumbotron";

interface RoleTypes {
  title: string
  bgColor: string
  titleStyle: string
  roles: {
    titleActivity: string
    link: string
    imageUrl: string
  }[]
}

export const roles = [
  { titleActivity: 'Perorangan', link: 'career', imageUrl: 'individual.webp' },
  {
    titleActivity: 'Profesional HR',
    link: 'course',
    imageUrl: 'hr-professionals.webp'
  },
  { titleActivity: 'Perusahaan', link: 'solution', imageUrl: 'corporate.webp' },

  {
    titleActivity: 'HR Generalis',
    link: 'career',
    imageUrl: 'hr-generalist.webp'
  },
  {
    titleActivity: 'HR Specialist',
    link: 'course',
    imageUrl: 'hr-professionals.webp'
  },
  { titleActivity: 'Business', link: 'solution', imageUrl: 'corporate.webp' }
]

export default function Roles({
  title,
  bgColor,
  titleStyle,
  roles
}: RoleTypes) {
  return (
    <Jumbotron imageName='training-sertif-banner.webp'>
    <section id="role" className={`${bgColor} py-20`}>
      <div className="mx-auto max-w-screen-xl text-center">
      <h2 className="text-white p-3 text-2xl md:text-4xl font-bold uppercase mb-5 mt-2 md:mb-10">
            {title}
          </h2>
        <br />
        <div className="flex flex-wrap justify-center gap-5">
          {roles.map((role, index) => (
            <a href={`#${role.link}`} key={index} className="relative">
              <img
                src={`/images/${role.imageUrl}`}
                width={400}
                height={320}
                alt={`${role.titleActivity} Role`}
                loading="lazy"
                className="w-80 h-48 md:w-96 md:h-auto place-self-center rounded-md drop-shadow-md object-cover filter grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
              />
              <div className={`${titleStyle} rounded-md bg-primary`}>
                <p className="px-10 py-4 uppercase text-white">
                  {role.titleActivity}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    </Jumbotron>
  )
}
