'use client';

import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Modal from 'components/modals/Modal';

export default function ActualCareer() {
    const ActualCareer = [
        {
            testimonial: "The process of editing sentences and grammar in the CV is really good and detailed. The response is fast and very professional. My CV passed the selection of one of the BigFour KAPs. The suggestions given by the editor are also very useful!!🙌🏻🙌🏻",
            name: "Alya",
            jobTitle: "Auditor",
        },
        {
            testimonial: "The career guidance and consulting was one of the best decisions I made. The CV review by Coach Wulan is thorough and insightful. I not only secured interviews but also landed my dream job. I'm grateful for the support in advancing my career!",
            name: "Kania",
            jobTitle: "Financial Advisor",
        },
        {
            testimonial: "After the consultation session, I became clearer and knew that I was suitable for the job I wanted, Sis. I can also find out where my weaknesses are and I can also find out the strategies or paths that I have to take to overcome my weaknesses and help me to achieve my desires.",
            name: "Jovita",
            jobTitle: "News Editor",
        },
        {
            testimonial: "Working with the CV editing service was exceptional. Their attention to detail and insightful suggestions provided were invaluable in refining my document. Highly recommended for anyone seeking career legal!",
            name: "Amal",
            jobTitle: "Corporate Legal",
        },
        {
            testimonial: "My consultation session with Coach Wulan was transformative. She also provided invaluable insights on interview techniques. I'm grateful for her personalized approach and comprehensive support in advancing my career. Highly recommend for anyone seeking professional coaching and interview preparation!",
            name: "Risjad",
            jobTitle: "Business Development",
        },
    ];

    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [selectedName, setSelectedName] = useState(null);

    const handleReadMore = (testimonial, name) => {
        setSelectedTestimonial(testimonial);
        setSelectedName(name);
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
        <section className="container mx-auto w-full h-auto py-16 ">
            <h5 className="text-center font-bold text-2xl lg:text-5xl mb-12 px-6">Apa Kata Mereka?</h5>
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
                navigation={true}
                mousewheel={{
                    forceToAxis: true,
                }}
                modules={[Navigation, Mousewheel]}
                className="mySwiper mt-8"
            >
                {ActualCareer.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-3 p-2 md:p-0 mr-20">
                            <div className="flex justify-center">
                                <ImQuotesLeft size={34} className="ml-5 text-primary" />
                            </div>
                            <div className="col-span-2 flex flex-col gap-2 pr-4 md:pr-0">
                                <p>
                                    {truncateText(item.testimonial, 39)}{' '}
                                    {item.testimonial.split(' ').length >= 39 && (
                                        <button onClick={() => handleReadMore(item.testimonial, item.name)} className="text-primary underline">Read More</button>
                                    )}
                                </p>
                                <div className="text-center mt-5">
                                    <h5 className="text-primary-500">{item.name}</h5>
                                    <h5>{item.jobTitle}</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {selectedTestimonial && (
                <Modal onClose={closeModal}>
                    <h6 className="text-xl mb-4">{selectedName}</h6>
                    <p className="mb-4">{selectedTestimonial}</p>
                </Modal>
            )}
        </section>
    );
}
