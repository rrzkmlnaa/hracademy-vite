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
    <section id="role" className={`${bgColor} py-20`}>
      <div className="mx-auto max-w-screen-xl text-center">
        <h2 className="text-primary p-3 text-4xl font-bold uppercase">
          {title}
        </h2>
        <p className="mb-6 text-base text-gray-500">Pilih peran Anda:</p>
        <div className="flex flex-wrap justify-center gap-5">
          {roles.map((role, index) => (
            <a href={`#${role.link}`} key={index} className="relative">
              <img
                src={`/images/${role.imageUrl}`}
                width={400}
                height={320}
                alt={`${role.titleActivity} Role`}
                loading="lazy"
                className="h-auto w-96 rounded-md object-cover object-center px-5 drop-shadow-md"
              />
              <div className={`${titleStyle} bg-primary mx-5 rounded-md`}>
                <p className="px-5 py-3 uppercase text-white">
                  {role.titleActivity}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
