import { useState } from 'react';

import UnderlineLink from 'components/links/UnderlineLink';
import Modal from 'components/modals/Modal';

import Card from './Card';

export interface SingleServiceType {
    slug: string;
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    tag?: string;
    body?: string;
}

export const dummyData: SingleServiceType[] = [
    {
        slug: 'career-coacing',
        imageUrl: '/images/career-coacing-icon.png',
        title: 'Career Coacing',
        description: 'Butuh bimbingan profesional untuk meningkatkan karier Anda? Kami akan menghubungkan Anda dengan mentor yang tepat.',
        price: 'Rp. 300.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Dapatkan bimbingan pribadi untuk mengungkap pekerjaan impian Anda.</strong></p><p><strong>Pelajari apa yang harus dicari dalam sebuah pekerjaan</strong><br>Rancang jalur karier Anda dan pahami industri, perusahaan, dan peran apa yang paling cocok untuk Anda sebagai individu.</p><p><strong>Rencanakan langkah karier Anda selanjutnya</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'cv-revision',
        imageUrl: '/images/resume-revision-icon.png',
        title: 'CV Revision',
        description: 'Siap untuk memenangkan perang resume? CV kami dirancang untuk menarik perhatian perekrut.',
        price: 'Rp. 25.000',
        tag: 'Most Popular',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Dapatkan bimbingan pribadi untuk mengungkap pekerjaan impian Anda.</strong></p><p><strong>Pelajari apa yang harus dicari dalam sebuah pekerjaan</strong><br>Rancang jalur karier Anda dan pahami industri, perusahaan, dan peran apa yang paling cocok untuk Anda sebagai individu.</p><p><strong>Rencanakan langkah karier Anda selanjutnya</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'linkedin-revision',
        imageUrl: '/images/linkedin-icon.png',
        title: 'Linkedin Revision',
        description: 'Tingkatkan profil LinkedIn Anda. Tampil menonjol secara profesional dan menarik peluang potensial.',
        price: 'Rp. 50.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Dapatkan bimbingan pribadi untuk mengungkap pekerjaan impian Anda.</strong></p><p><strong>Pelajari apa yang harus dicari dalam sebuah pekerjaan</strong><br>Rancang jalur karier Anda dan pahami industri, perusahaan, dan peran apa yang paling cocok untuk Anda sebagai individu.</p><p><strong>Rencanakan langkah karier Anda selanjutnya</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'job-search-strategy',
        imageUrl: '/images/job-search-icon.png',
        title: 'Job Search Strategy',
        description: 'Optimalkan strategi jaringan Anda untuk mendapatkan referensi terbaik.',
        price: 'Rp. 5.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Dapatkan bimbingan pribadi untuk mengungkap pekerjaan impian Anda.</strong></p><p><strong>Pelajari apa yang harus dicari dalam sebuah pekerjaan</strong><br>Rancang jalur karier Anda dan pahami industri, perusahaan, dan peran apa yang paling cocok untuk Anda sebagai individu.</p><p><strong>Rencanakan langkah karier Anda selanjutnya</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'interview-prep',
        imageUrl: '/images/interview-prep-icon.png',
        title: 'Interview Prep',
        description: 'Bersiaplah untuk sukses dengan pelatihan wawancara kami. Dapatkan kepercayaan diri dan asah kemampuan Anda untuk menjadi yang terbaik dalam wawancara yang akan datang.',
        price: 'Rp. 300.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Dapatkan bimbingan pribadi untuk mengungkap pekerjaan impian Anda.</strong></p><p><strong>Pelajari apa yang harus dicari dalam sebuah pekerjaan</strong><br>Rancang jalur karier Anda dan pahami industri, perusahaan, dan peran apa yang paling cocok untuk Anda sebagai individu.</p><p><strong>Rencanakan langkah karier Anda selanjutnya</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'cover-letter-revision',
        imageUrl: '/images/cv-icon.png',
        title: 'Cover Letter Revision',
        description: 'Kami akan menggunakan pengalaman kerja Anda yang relevan untuk membuat surat lamaran yang sempurna untuk mendapatkan pekerjaan impian Anda.',
        price: 'Rp. 50.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Dapatkan bimbingan pribadi untuk mengungkap pekerjaan impian Anda.</strong></p><p><strong>Pelajari apa yang harus dicari dalam sebuah pekerjaan</strong><br>Rancang jalur karier Anda dan pahami industri, perusahaan, dan peran apa yang paling cocok untuk Anda sebagai individu.</p><p><strong>Rencanakan langkah karier Anda selanjutnya</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },

];

export default function CareerDevelopment() {
    const [selectedCard, setSelectedCard] = useState<SingleServiceType | null>(null);

    return (
        <section id='careerDevelopment' className="container mx-auto w-full h-auto px-6 py-20">
            <div className="text-center">
                <UnderlineLink to='#careerDevelopment' className='text-base uppercase '>
                    Pengembangan karir
                </UnderlineLink>
                <h1 className='text-primary text-3xl font-bold py-5'>Perbaikan cepat dengan layanan tunggal kami</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-15 py-14 text-center">
                    {dummyData.map((item, index) => (
                        <Card
                            key={index}
                            imageUrl={item.imageUrl}
                            tag={item.tag}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            onClick={() => setSelectedCard(item)}
                            slug={item.slug}
                        />
                    ))}
                </div>
            </div>
            {selectedCard && (
                <Modal onClose={() => setSelectedCard(null)}>
                    <>
                        <h3 className="text-xl font-semibold text-center pb-3">{selectedCard.title}</h3>
                        {selectedCard.body && <div dangerouslySetInnerHTML={{ __html: selectedCard.body }} />}
                    </>
                </Modal>
            )}
        </section>
    );
}
