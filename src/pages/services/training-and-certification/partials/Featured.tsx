'use client'

import React from 'react'; 
import UnderlineLink from "../../../../components/links/UnderlineLink";
import UnstyledLink from "../../../../components/links/UnstyledLink";

const data = [
    {
        imageUrl: '/images/training-calendar.jpg',
        title: 'Kalender Pelatihan',
        description: 'Lihat kursus kami yang akan datang',
        link: '/training-calendar',
    },
    {
        imageUrl: '/images/meetourfacilitator.webp',
        title: 'Temui Fasilitator Kami',
        description: 'Siapa kami dan apa yang kami lakukan',
        link: '#',
    },
    {
        imageUrl: '/images/inhouse-course.webp',
        title: 'Program Kursus Internal',
        description: 'Dirancang khusus untuk Anda',
        link: '#',
    },
    {
        imageUrl: '/images/lms.jpg',
        title: 'LMS HR Academy',
        description: 'Belajar Mudah dengan LMS HR Academy',
        link: 'https://campus.hracademy.id/',
    },
];

export default function Featured() {
    return (
        <section id="featured" className="container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-auto py-32">
            <div className="text-center md:text-start px-6 xl:px-4">
                <UnderlineLink to='#featured' className='uppercase text-gray-500 my-5'>
                    Featured
                </UnderlineLink>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <UnstyledLink to={item.link} key={index} className="flex flex-col items-center gap-2 w-full h-auto">
                        <div className="overflow-hidden w-full h-56">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="w-full h-auto bg-primary p-4 rounded-md text-white">
                            <h4 className="capitalize font-bold">{item.title}</h4>
                            <p className="normal-case text-sm">{item.description}</p>
                        </div>
                    </UnstyledLink>
                ))}
            </div>
        </section>
    );
}
