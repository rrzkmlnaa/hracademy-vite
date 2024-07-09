import Button from 'components/Button'
import { IconBaseProps } from 'react-icons'
import { FaCheckCircle } from 'react-icons/fa'

interface SolutionType {
  title: string
  icon: React.ElementType<IconBaseProps>
}

const data: SolutionType[] = [
  { title: 'Talent Recruitment', icon: FaCheckCircle },
  { title: 'Employee On-boarding & Off-boarding', icon: FaCheckCircle },
  { title: 'Performance & Career Management', icon: FaCheckCircle },
  { title: 'Payroll Management', icon: FaCheckCircle },
  { title: 'Human Resources System', icon: FaCheckCircle },
  { title: 'Ad-hoc Consulting Service', icon: FaCheckCircle },
  { title: 'Human Resources Strategy Management', icon: FaCheckCircle }
]

export default function Solution() {
  return (
    <section id="solution" className="bg-gray-100">
      <div className="mx-auto min-h-96 max-w-screen-sm content-center bg-gray-100 px-10 pb-16 pt-24 md:max-w-screen-xl md:px-0">
        <div className="flex flex-wrap items-center justify-between gap-5 md:gap-0 md:px-10">
          <div className="text-start">
            <a href="#solution" className="uppercase text-gray-500">
              Solutions
            </a>
            <p className="text-primary text-balance py-4 text-start text-4xl font-bold">
              Solusi Sumber Daya Manusia
              <br />
              untuk Era Digital
            </p>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-wrap gap-1 pb-2 pl-2 pt-5 sm:gap-3 md:pl-5"
              >
                <item.icon size="2rem" color="#EDB526" />
                <p className="place-self-center text-sm sm:text-base">
                  {item.title}
                </p>
              </div>
            ))}
            <div className="py-10">
              <Button
                type="link"
                to="/about-us/contact-us"
                text="Jadwalkan Kolsultasi Sekarang!"
                rounded
              />
            </div>
          </div>
          <img
            src="/images/solution.webp"
            alt="mockup solution"
            className="hidden h-auto w-full object-cover duration-150 hover:scale-110 lg:block lg:w-2/5"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
