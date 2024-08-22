'use client'

import React from 'react';
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
    }
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

const VideoDesktop = () => (
    <section className="bg-primary text-white py-20 hidden md:block">
        <div className="container mx-auto w-full h-auto">
            <div className="px-6 text-white text-center flex flex-col gap-4">
                <h1 className='text-4xl font-bold'>Pelatihan dan Sertifikasi SDM</h1>
                <h4 className='font-bold'>Testimoni Video</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-5 gap-5">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <VideoPlayer
                            videoSrc={item.videoSrc}
                            thumbnail={item.thumbnail}
                        />
                        <h3 className='text-center text-3xl font-bold'>{item.name}</h3>
                        <p className='text-center'>{item.pelatihan}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

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
