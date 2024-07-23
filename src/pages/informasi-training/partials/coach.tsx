import React from 'react';
import Jumbotron from 'components/jumbo/Jumbotron';

export default function Coach() {
    return (
        <Jumbotron imageName='job-search.png'>
            <section id='coach' className="mx-auto max-w-screen-xl py-12 md:py-24 px-6 md:px-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-6 md:gap-10">
                    <div className="relative w-full md:w-2/3 px-auto duration-300 transition-transform ease-in-out hover:scale-105">
                        <img
                            src='/images/coachwulan-transformed.webp'
                            width={250}
                            height={250}
                            alt='coach wulan'
                            className='w-10/12 md:w-full filter grayscale transition-all duration-500 ease-in-out hover:grayscale-0'
                        />
                        <h5 className="absolute bottom-0 bg-white bg-opacity-75 text-center font-bold text-primary text-lg md:text-xl py-2 transition-all duration-500 ease-in-out w-full md:w-11/12 mx-auto">
                            DIAJAR OLEH EXPERT
                        </h5>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5 justify-start">
                        <h6 className='font-bold text-white text-start text-2xl md:text-3xl underline'>SRI WULANDARI, EPC, S.IP, MBA.</h6>
                        <p className='font-normal text-justify text-sm md:text-base'>
                            Head Trainer/Founder
                            Former HR Director of Mattel Asia Pacific, SC Johnson, HERO Group, and AJE
                        </p>
                        <p className="text-justify text-base md:text-lg font-bold leading-normal">
                            HR Academy memiliki tim trainer berpengalaman di bidang HR dengan pengetahuan
                            mendalam dan pengalaman praktis puluhan tahun di posisi C-Level, 
                            siap berbagi untuk memperkaya pemahaman dan penerapan konsep.
                        </p>
                    </div>
                </div>
            </section>
        </Jumbotron>
    );
}
