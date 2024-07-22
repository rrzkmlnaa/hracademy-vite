'use client';

import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Modal from 'components/modals/Modal';

export default function Success() {
    const Success = [
        {
            testimonial: "Wonsulting really tailored my resume and highlighted my strengths. They added a lot of metrics and facts into my resume and made my achievements sound more substantial. I was offered many interviews at large corporations and eventually landed a job at Yelp!",
            name: "Jonathan Budning",
            jobTitle: "Engineering Manager",
            imageUrl: "/images/profile-testimonial.jpeg",
            companyLogoUrl: "/images/zahir.webp"
        },
        {
            testimonial: "The resume and LinkedIn review have been extremely helpful in guiding me in the right direction towards my job search process and networking efforts. Could never get around to using the interview prep but I’m sure it must’ve been helpful.",
            name: "Meher Kaur",
            jobTitle: "Market Development Representative Intern",
            imageUrl: "/images/profile-testimonial.jpeg",
            companyLogoUrl: "/images/deloitte.webp"
        },
        {
            testimonial: "I followed Wonsulting's advice about networking messages to land the interview at Toast. Then the advice on how to interview and ask proper questions helped a ton! I also used the resume rewrite and I believe my updated resume along with the other factors are 100% the reason I landed the Job at Toast!",
            name: "Josh Jurgenson",
            jobTitle: "Capital Operations Specialist",
            imageUrl: "/images/profile-testimonial.jpeg",
            companyLogoUrl: "/images/dbs-Logo.webp"
        },
        {
            testimonial: "Wonsulting helped with the content on social media about how to do my resume, then I also bought the interview prep service. I felt super prepared and confident because of it. Wonsulting helped me refine my answers and make them more impactful and it was super helpful.",
            name: "Nicole Hunt",
            jobTitle: "UX Researcher",
            imageUrl: "/images/profile-testimonial.jpeg",
            companyLogoUrl: "/images/bukopin-syariah.webp"
        },
        {
            testimonial: "Wonsulting helped me tailor my resume, by helping me find the words that best describe my previous and how they translated to my current role. They helped me tremendously with networking and talking to others.",
            name: "Joshua Koster",
            jobTitle: "Application Developer",
            imageUrl: "/images/profile-testimonial.jpeg",
            companyLogoUrl: "/images/tvri.webp"
        },
    ];

    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [selectedName, setSelectedName] = useState(null);

    const handleReadMore = (testimonial, name) => {
        const selected = Success.find(item => item.name === name);
        if (selected) {
            setSelectedTestimonial(selected);
            setSelectedName(name);
        }
    };

    const closeModal = () => {
        setSelectedTestimonial(null);
        setSelectedName(null);
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    return (
        <section className="container mx-auto w-full h-auto py-16">
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={20}
                mousewheel={{
                    forceToAxis: true,
                }}
                modules={[Mousewheel]}
                className="mySwiper mt-8"
            >
                {Success.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-6 mx-auto max-w-sm">
                            <div className="flex items-center justify-center mb-4 relative">
                                <ImQuotesLeft size={22} className="text-primary absolute left-16 -top-0" />
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-center text-gray-700 leading-relaxed mb-2">{truncateText(item.testimonial, 25)}{' '}
                                {item.testimonial.split(' ').length > 25 && (
                                    <button onClick={() => handleReadMore(item.testimonial, item.name)} className="text-primary underline">Selengkapnya</button>
                                )}
                            </p>
                            <div className="text-center">
                                <h4 className="text-primary text-lg font-semibold mb-1">{item.name}</h4>
                                <p className="text-gray-600 text-sm">{item.jobTitle}</p>
                                <div className="flex items-center justify-center mt-6">
                                    <img
                                        src={item.companyLogoUrl}
                                        alt={`${item.name}'s company logo`}
                                        width={120}
                                        height={120}
                                        className="mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {selectedTestimonial && (
                <Modal onClose={closeModal}>
                    <div className='text-black'>
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src={selectedTestimonial.imageUrl}
                                alt={selectedTestimonial.name}
                                width={100}
                                height={100}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                        <h6 className="text-xl text-center mb-4">{selectedName}</h6>
                        <p className="mb-4 text-center">{selectedTestimonial.testimonial}</p>
                    </div>
                </Modal>
            )}
        </section>
    );
}
