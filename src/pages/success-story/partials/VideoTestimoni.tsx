import React, { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

const data = [
    {
        videoSrc: 'https://www.youtube.com/watch?v=J6933_V6b1o&feature=youtu.be',
        thumbnail: '',
        name: '...',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=qVqwllLYwf0&feature=youtu.be',
        thumbnail: '',
        name: 'Pak Gean',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=8AQG0iaHdvI&feature=youtu.be',
        thumbnail: '',
        name: 'Pak Dimas',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=49LlUscMjUg',
        thumbnail: '',
        name: 'Pak Ongky',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=g3EH65K8NP0&feature=youtu.be',
        thumbnail: '',
        name: 'Pak Robby',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=xMm5PkeQx9Q',
        thumbnail: '',
        name: 'Pak Cepi',
        pelatihan: 'Pelatihan dan Sertifikasi Manager HR SDM Level 6',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=FOXT3eipBzM',
        thumbnail: '',
        name: 'Ibu Wiwik',
        pelatihan: 'Pelatihan dan Sertifikasi Supervisor SDM Level 4',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=MPC6gC5Oh78',
        thumbnail: '',
        name: 'Pak Budi',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=AOAH7nq--mI',
        thumbnail: ' ',
        name: 'Pak Hari',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=nl5YPyEF9gg',
        thumbnail: '/videos/thumbnail-rumi.png',
        name: 'Ibu Rumi',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=2zJN8gNWolM',
        thumbnail: '',
        name: 'Ibu Gina',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=boYWXGaWPNo',
        thumbnail: '',
        name: 'Ibu Wiwiek',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=roZfM7f-IVQ',
        thumbnail: '',
        name: 'Ibu Lina',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=JbRW_HgBmzQ',
        thumbnail: '',
        name: 'Ibu Lonita',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=JteaOWPC1ZU',
        thumbnail: '',
        name: 'Pak Hafidz',
        pelatihan: '',
    },
    {
        videoSrc: 'https://www.youtube.com/watch?v=mWsDz5XyUZo',
        thumbnail: '',
        name: 'Ibu Annieza',
        pelatihan: '',
    },
    // Menambahkan video YouTube
    {
        videoSrc: 'https://www.youtube.com/watch?v=Rrp4N5Uzaco',
        thumbnail: '',
        name: 'Pak Eko',
        pelatihan: '',
    }
];

const mobileData = {
    videoSrc: 'https://www.youtube.com/watch?v=qVqwllLYwf0',
    thumbnail: '',
};

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

const VideoMobile = () => {
    const isYouTube = mobileData.videoSrc.includes('youtube.com') || mobileData.videoSrc.includes('youtu.be');
    const videoId = isYouTube ? new URL(mobileData.videoSrc).searchParams.get('v') : '';

    return (
        <section className="lg:hidden w-full h-screen relative">
            {isYouTube ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                    title="Video Testimonial"
                ></iframe>
            ) : (
                <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    poster={mobileData.thumbnail}
                >
                    <source src={mobileData.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </section>
    );
};

export default function VideoTestimoni() {
    return (
        <>
            <VideoDesktop />
            <VideoMobile />
        </>
    );
}
