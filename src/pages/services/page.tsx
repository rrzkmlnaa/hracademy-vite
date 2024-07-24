'use client'

import Jumbotron from "components/Jumbotron"
import UnstyledLink from "components/links/UnstyledLink"

const data = [
    { title: 'Career Development', linkUrl: '/services/career-development', imageUrl: '/images/lms.webp' },
    { title: 'Training & Certification', linkUrl: '/services/training-and-certification', imageUrl: '/images/lms.webp' },
    { title: 'Solutions', linkUrl: '/services/solutions', imageUrl: '/images/lms.webp' },
]

export default function Page() {
    return (
        <>
            <Jumbotron
                imageName="banner-aboutus.webp"
            >
                <h1 className='text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
                    Services
                </h1>

                <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aut non nobis corrupti, cupiditate illum! Esse, harum animi! Qui quam veritatis magni tempora expedita quasi dolores iusto impedit! Magnam, ullam.
                </p>
            </Jumbotron>
            <section className="bg-white py-24">
                <div className="container mx-auto w-full h-auto">
                    <h1 className="text-center text-primary-500 capitalize pb-5">Our HR Services </h1>
                    <div className="flex flex-wrap justify-center items-center gap-10 py-5 px-6 xl:px-0 ">
                        {data.map((item, index) => (
                            <UnstyledLink key={index} to ={`${item.linkUrl}`} className="relative">
                                <img
                                    src={item.imageUrl}
                                    width={350}
                                    height={350}
                                    alt={`${item.title} Images`}
                                    // classNames={{ image: 'object-cover w-full h-auto rounded-md', blur: 'blur' }}
                                />
                                <div className="absolute bottom-0 w-full h-auto bg-primary p-5 rounded-md">
                                    <h3 className="capitalize text-white text-center">{item.title}</h3>
                                </div>
                            </UnstyledLink>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
