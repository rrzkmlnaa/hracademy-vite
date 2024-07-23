import React from 'react';
import Jumbotron from 'components/jumbo/Ready';

export default function Level() {
    const sections = [
        {
            title: '1. Pelatihan dan Sertifikasi Staf HR',
            text: `BNSP (KKNI Level 3)`
        },
        {
            title: '2. Pelatihan dan Sertifikasi Supervisor HR',
            text: `BNSP - Double Degree Program Certified Human Resource Supervisor (CHRS)`
        },
        {
            title: '3. Pelatihan dan Sertifikasi Manager HR BNSP',
            text: `Double Degree Program Certified Human Resources Professional (CHRP)`
        },
        {
            title: '4. Pelatihan dan Sertifikasi General Manager HR',
            text: `BNSP - Double Degree Program Certified Human Capital General Manager (CHCGM)`
        }
    ];

    return (
        <>
            <Jumbotron imageName='job-search.png'>
                <section className="mx-auto max-w-screen-xl pb-20 mt-14">
                    <div className="pt-20 ">
                        <h5 className='text-3xl font-bold'>
                            Program Sertifikasi HR di HR Academy
                        </h5>
                    </div>
                    <div className="mt-8">
                        {sections.map((section, index) => (
                            <div className='mt-6' key={index}>
                                <h6 className=' text-xl font-normal'>{section.title}</h6>
                                <p className='mt-2 text-lg leading-8 font-bold'>{section.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Jumbotron>
        </>
    );
}
