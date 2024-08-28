'use client'

import React, { useRef } from 'react';
import VideoPlayer from './VideoTesti';

const data = [
    {
        videoSrc: '/videos/cepi.mp4',
        thumbnail: '/videos/thumbnail-cepi.png',
        name: 'Pak Cepi',
        pelatihan: 'Pelatihan dan Sertifikasi Manager HR SDM Level 6',
    },
    {
        videoSrc: '/videos/wiwik.mp4',
        thumbnail: '/videos/thumbnail-wiwik.png',
        name: 'Ibu Wiwik',
        pelatihan: 'Pelatihan dan Sertifikasi Supervisor SDM Level 4',
    },
    {
        videoSrc: '/videos/budi.mp4',
        thumbnail: '/videos/thumbnail-budi.png',
        name: 'Pak Budi',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/hari.mp4',
        thumbnail: '/videos/thumbnail-hari.png',
        name: 'Pak Hari',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/rumi.mp4',
        thumbnail: '/videos/thumbnail-rumi.png',
        name: 'Ibu Rumi',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/gina.mp4',
        thumbnail: '/videos/thumbnail-gina.png',
        name: 'Ibu Gina',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/wiwiek.mp4',
        thumbnail: '/videos/thumbnail-wiwiek.png',
        name: 'Ibu Wiwiek',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/lonita.mp4',
        thumbnail: '/videos/thumbnail-lonita.png',
        name: 'Ibu Lonita',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/onky.mp4',
        thumbnail: '/videos/thumbnail-onky.png',
        name: 'Pak Onky',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/robby.mp4',
        thumbnail: '/videos/thumbnail-robby.png',
        name: 'Pak Robby',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/eko.mp4',
        thumbnail: '/videos/thumbnail-eko.png',
        name: 'Pak Eko',
        pelatihan: '',
    },
    {
        videoSrc: '/videos/lina.mp4',
        thumbnail: '/videos/thumbnail-lina.png',
        name: 'Ibu Lina',
        pelatihan: '',
    },
    
];

const mobileData = [
    {
        videoSrc: '/videos/gean.mp4',
        thumbnail: '/videos/thumbnail-gean.png',
    },
    {
        videoSrc: '/videos/dimas.mp4',
        thumbnail: '/videos/thumbnail-dimas.png',
    }
];

const VideoDesktop = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const moveSlide = (direction: number) => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const slides = slider.children;
            const slideWidth = (slides[0] as HTMLElement).offsetWidth;
            const currentTransform = slider.style.transform ? parseInt(slider.style.transform.split('(')[1].split('px')[0]) : 0;
            let newTranslateX = currentTransform + direction * slideWidth;

            // Loop around if at the start or end
            if (newTranslateX > 0) newTranslateX = -slideWidth * (slides.length - 1);
            if (newTranslateX < -slideWidth * (slides.length - 1)) newTranslateX = 0;

            slider.style.transform = `translateX(${newTranslateX}px)`;
        }
    };

    return (
        <section className="bg-primary text-white py-20 hidden lg:block">
            <div className="container mx-auto w-full h-auto">
                <div className="px-6 text-white text-center flex flex-col gap-4">
                    <h1 className='text-4xl font-bold'>Pelatihan dan Sertifikasi SDM</h1>
                    <h4 className='font-bold'>Testimoni Video</h4>
                </div>
                <div className="relative overflow-hidden">
                    <div ref={sliderRef} className="flex transition-transform duration-500 ease-in-out">
                        {data.map((item, index) => (
                            <div key={index} className="w-1/3 px-2 flex-shrink-0">
                                <VideoPlayer
                                    videoSrc={item.videoSrc}
                                    thumbnail={item.thumbnail}
                                />
                                <h3 className='text-center text-3xl font-bold'>{item.name}</h3>
                                <p className='text-center'>{item.pelatihan}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-7xl text-white p-2 rounded-r-lg"
                        onClick={() => moveSlide(1)}
                    >
                        ‹
                    </button>
                    <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-7xl text-white p-2 rounded-l-lg"
                        onClick={() => moveSlide(-1)}
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

const VideoMobile = () => (
    <section className="md:hidden w-full">
        <div className="flex flex-col">
            {mobileData.map((video, index) => (
                <div key={index} className="relative w-full aspect-video">
                    <video
                        className="w-full h-[500px] object-cover"
                        controls
                        playsInline
                        poster={video.thumbnail}
                    >
                        <source src={video.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    </section>
);

export default function VideoTestimoni() {
    return (
        <>
            <VideoDesktop />
            <VideoMobile />
        </>
    );
}
