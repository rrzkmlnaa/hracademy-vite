import React from 'react';

const CertificationAdvantages = () => {
    return (
        <section className='text-center mt-10'>
            <h3 className='uppercase text-primary font-bold text-2xl py-5 mb-10'>Keunggulan Sertifikasi HR di HR Academy </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-auto lg:h-80'>
                <div className='flex flex-col justify-center bg-blue-600 p-5'>
                    <h4 className='text-gray-200 font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl text-wrap mb-4 lg:mb-10'>Double Degree</h4>
                    <p className='text-white text-base sm:text-lg md:text-xl lg:text-base leading-relaxed mb-5 lg:mb-7'>
                        Dapatkan sertifikasi ganda, yaitu sertifikasi BNSP dan sertifikasi CHRS/CHRP/CHCGM dari HR Academy.
                    </p>
                </div>
                <div className='flex flex-col justify-center bg-sky-100 p-5'>
                    <h4 className='text-blue-900 text-xl font-bold sm:text-2xl md:text-3xl lg:text-2xl text-wrap mb-4 lg:mb-10'>Pengakuan Nasional dan Internasional</h4>
                    <p className='text-black text-base sm:text-lg md:text-xl lg:text-base leading-relaxed mb-5 lg:mb-10'>
                        Sertifikasi dan gelar yang diakui di seluruh dunia, memberikan keunggulan kompetitif di pasar kerja nasional bahkan global.
                    </p>
                </div>
                <div className='flex flex-col justify-center bg-[#004AAD] p-5'>
                    <h4 className='text-white text-xl font-bold sm:text-2xl md:text-3xl lg:text-2xl text-wrap mb-4 lg:mb-10'>Instruktur Berpengalaman</h4>
                    <p className='text-white text-base sm:text-lg md:text-xl lg:text-base leading-relaxed mb-5 lg:mb-5'>
                        Memiliki tim trainer berpengalaman dengan pengetahuan mendalam dan puluhan tahun pengalaman praktis di posisi C-Level.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CertificationAdvantages;
