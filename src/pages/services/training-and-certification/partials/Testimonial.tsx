'use client'

import { ImQuotesLeft } from "react-icons/im";
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import UnderlineLink from "../../../../components/links/UnderlineLink";

const data = [
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'M.S. Sangaji',
        jobPosition: '',
        description: 'Dengan mengikuti training HR Academy ini saya sangat senang karena dapat menimba ilmu dari Coach Wulan dan sharing-sharing pengalaman dari beberapa bapak-bapak yang memiliki sejuta pengalaman di dunia HR.',
        companyLogo: ''
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Sugeng Setiyoso ',
        jobPosition: 'Business Owner',
        description: 'Kesan saya terkait training ini sangat menarik secara keseluruhan dan yang paling berkesan adalah sharing session bersama praktisi HR dari berbagai perusahaan di Indonesia.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Trisna Risani',
        jobPosition: 'Ina Bisnishack',
        description: 'Halo, aku Trisna Risani Karya mau ngucapin thank you banget untuk Coach Wulan dan HR Academy dimana telah diajarin banyak banget tentang HR dan di sini aku semakin semangat untuk belajar lagi untuk mendalami tentang people.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Wiwin Sunarti',
        jobPosition: 'Bionesia',
        description: 'Di sini saya dapat banyak hal terutama mengenai strategi organisasi komunikasi. Ini buat saya sangat berkesan karena banyak hal yan kadang terlihat sederhana tapi kita gak perhatikan. Di sini sangat membantu kita bagaimana kita menjadi jembatan antara karyawan dengan manajemen.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Eko Mei',
        jobPosition: '',
        description: 'Saya Eko Mei Purwanto dari Solo, kemarin saya sudah mengikuti Pendidikan Human Resource Professional di HR Academy (CHRP HRA) materinya mantap, dosen-dosennya oke, dosen tamu undangannya luar biasa dan berpengalaman semua, materi dan kurikulumnya sangat mengena di dunia HR.',
        companyLogo: ''
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Yoshi',
        jobPosition: '',
        description: 'Ini adalah materi yang sudah sangat baik, materi yang saya garisbawahi adalah mengenai manpower planning dan HR roadmap.',
        companyLogo: ''
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Andiwi Meifilina',
        jobPosition: '',
        description: 'Menurut saya, semua materi yang diberikan sangat penting, sangat bagus, sangat menarik karena dapat memberikan wawasan dan pengetahuan untuk saya di bidang Human Resources.',
        companyLogo: ''
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Rocky Panjaitan',
        jobPosition: '',
        description: 'Saya sangat berkesan di hari terakhir sesi tiga ada banyak hal yang membuat saya terbuka pikirannya sehingga ke depannya mungkin saya bisa meramu, meracik, dan menjadikan HR ini lebih baik dari yang sudah ada di perusahaan saat ini. Terima kasih HR Academy tetap jaya dan maju!',
        companyLogo: ''
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Anik',
        jobPosition: 'Business Owner',
        description: 'Saya sangat berterima kasih kepada HR Academy yang sudah mengadakan pelatihan CHRP dimana di sini saya sebgai pelaku usaha sangat beruntung sekali dan sangat bangga sekali karena dapat menambah ilmu dan wawasan lalu bagi saya pelaku usaha yang notabene tidak mengenal manajemen HR. Di sini dengan adanya pelatihan tadi sangat membantu sekali bagi para pelaku usaha.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Ade Rupawan',
        jobPosition: 'Consultant',
        description: 'Yang paling berkesan bagi saya mengikuti materi tersebut yaitu materi employee engagement. Pendekatan dilakukan perusahaan kepada karyawan agar mendorong karyawan melakukan lebih kepada perusahaan.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Bayu Abdiansyah',
        jobPosition: '',
        description: 'Di sini saya ingin menyampaikan terima kasih kepada Coach Wulan dan tim HR Academy yang telah memberikan pengetahuan dan wawasan tentang HR kepada kita semua. Sangat bermanfaat sekali dan semoga HR Academy semakin sukses, semakin berjaya, dan semakin memberikan dampak yang positif untuk masyarakat di Indonesia.',
        companyLogo: ''
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Cepi Anggara',
        jobPosition: 'HR Manager',
        description: 'Tentunya saya membutuhkan upgrade skill di bidang HR jadi butuh banyak ilmu. Kesan dari pelatihan sangat positif dan materi yang disampaikan cukup jelas dnegan coach yang kompeten di bidangnya. Setelah mengikuti pelatihan ini saya dapat banyak ilmu, terlepas dari sertifikasi yang saya dapat, ada banyak ilmu yang mudah-mudahan berguna bagi saya pribadi maupun orang lain.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Cepi Anggara',
        jobPosition: 'HR Manager',
        description: 'Tentunya saya membutuhkan upgrade skill di bidang HR jadi butuh banyak ilmu. Kesan dari pelatihan sangat positif dan materi yang disampaikan cukup jelas dnegan coach yang kompeten di bidangnya. Setelah mengikuti pelatihan ini saya dapat banyak ilmu, terlepas dari sertifikasi yang saya dapat, ada banyak ilmu yang mudah-mudahan berguna bagi saya pribadi maupun orang lain.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Budi',
        jobPosition: 'Aerotrans',
        description: 'Banyak belajar dari coach wulan yang kompeten di bidangnya dan juga sangat relevan dengan kebutuhan saya di bidang manajemen SDM ini. Saya jadi paham terkait dengan bagaimana kita membuat analisis jabatan, job grading, membuat SOP, membuat PKB, dan termasuk bagaimana kita membuat perencanaan training dan juga career management. Yang saya harap saya akan lebih professional lagi dalam menjalankan tugas dan karir saya juga bisa lebih berkembang lebih maju lagi.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Helmy Mahdiarrafif',
        jobPosition: 'Mahasiswa S2',
        description: 'Di sini saya bisa belajar pertama-tama dengan konsultasi yang lumayan care dan intensif dari pihak HRA. Saya merasa puas dengan HRA bisa belajar banyak dan suka dengan cara mereka bisa care dengan saya. Banyak yang didapatkan terutama dari ilmunya dan juga pengetahuan lain yang belum saya ketahui dari bagaimana cara melakukan dan prakteknya.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Wiwiek Sindarta',
        jobPosition: 'Talentvis Executive Search',
        description: 'Saya mengikuti pelatihan HR di HR Academy karena background saya 10 tahun di bidang HR kemudian saya sekarang di Executive Search saya ingin mengetahui lebih details mengenai HR Functions dan aturan-aturan baru dari pemerintah yang saya harap bisa membantu di perusahaan saya sekarang dan juga klien-klien saya yang kebanyakan pelaku human resources. Pelajarannya banyak sekali saya belajar sangat-sangat details sampai ke seluk beluk dari HR dan kesan saya sangat bagus sekali. Ibu Wulan sangat memberikan insight dan praktek-praktek dari pengalaman beliau selama 20 tahun di HR Indonesia saya sangat banyak belajar dari beliau.',
        companyLogo: '/images/company-example.png'
    },
    {
        profileUrl: '/images/profile-testimonial.jpeg',
        userName: 'Gina Salsabila',
        jobPosition: 'Job Seeker',
        description: 'Saya memiliki keinginan untuk menjadi HR namun tidak memiliki pengalaman, untuk itu saya mencoba mencari pelatihan bersama sertifikasi yang terdapat di HR Academy yang mungkin berguna bagi saya sebagai career starter. Selama saya mengikuti pelatihan ini saya diajarkan sekaligus dibimbing dalam praktik dunia kerja di bidang HR. Ini memberikan wawasan baru buat saya bagi individu yang belum memiliki pengalaman ini sangat berguna.',
        companyLogo: '/images/company-example.png'
    },
]

export default function Testimonial() {
    return (
        <section id='testimonial' className="container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-auto p-10">
            <div className="text-center">
                <UnderlineLink to ='#testimonial' className='capitalize text-gray-500 my-5'>
                    Testimonials
                </UnderlineLink>
            </div>
            <h1 className="text-primary text-4xl font-bold text-center">Pelajari tentang kisah sukses klien kami</h1>
            <div className="flex justify-center items-center gap-5">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                    }}
                    spaceBetween={30}
                    navigation={true}
                    mousewheel={{
                        forceToAxis: true,
                    }}
                    modules={[Navigation, Mousewheel]}
                    className="mySwiper my-5"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} className="w-full h-auto p-5">
                            <div className="w-full h-auto shadow-md bg-[#fdfeff] rounded-xl p-6">
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="flex gap-5 items-center">
                                            <img
                                                src={item.profileUrl}
                                                width={60}
                                                height={60}
                                                alt={`${item.userName} Profile`}
                                                className="object-cover w-16 h-16 rounded-full"
                                            />
                                            <div className="flex flex-col gap-1">
                                                <h4 className="capitalize text-primary-500">{item.userName}</h4>
                                                <p>{item.jobPosition}</p>
                                            </div>
                                        </div>
                                        {item.companyLogo && (
                                            <img
                                                src={item.companyLogo}
                                                width={50}
                                                height={50}
                                                alt={item.jobPosition}
                                                className="object-cover w-10 h-20 py-5"
                                            />
                                        )}
                                    </div>
                                    <div className="col-span-3 p-6 bg-blue-200 rounded-md min-h-[250px] flex items-center">
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <ImQuotesLeft size={44} color='#3B82F6' />
                                            <div className="text-justify">
                                                {item.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
