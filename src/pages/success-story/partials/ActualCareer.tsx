import { ImQuotesLeft } from "react-icons/im";
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import DeloitteImage from "/images/deloitte.webp";
import BukopinImage from "/images/bukopin-syariah.webp";
import PwcImage from "/images/pwc.webp";
import TvriImage from "/images/tvri.webp";
import ParagonImage from "/images/paragon.webp";

export default function ActualCareer() {
    const ActualCareer = [
        {
            testimonial: "Proses pengeditan kalimat dan tata bahasa dalam CV sangat bagus dan detail. Responnya cepat dan sangat profesional. CV saya lolos seleksi salah satu KAP BigFour. Saran-saran yang diberikan oleh editor juga sangat berguna!!!🙌🏻🙌🏻",
            name: "Alya",
            jobTitle: "Auditor",
            imageUrl: DeloitteImage,
        },
        {
            testimonial: "Bekerja dengan layanan pengeditan CV sangat luar biasa. Perhatian mereka terhadap detail dan saran-saran berwawasan yang diberikan sangat berharga dalam menyempurnakan dokumen saya. Sangat direkomendasikan untuk siapa saja yang mencari karir legal!",
            name: "Amal",
            jobTitle: "Corporate Legal",
            imageUrl: BukopinImage,
        },
        {
            testimonial: "Bimbingan dan konsultasi karir adalah salah satu keputusan terbaik yang saya ambil. Review CV yang dilakukan oleh Coach Wulan sangat teliti dan mendalam. Saya tidak hanya mendapatkan panggilan wawancara tapi juga mendapatkan pekerjaan impian saya. Saya berterima kasih atas dukungannya dalam memajukan karir saya!",
            name: "Kania",
            jobTitle: "Financial Advisor",
            imageUrl: PwcImage,
        },
        {
            testimonial: "Setelah sesi konsultasi, saya menjadi lebih jelas dan tahu bahwa saya cocok untuk pekerjaan yang saya inginkan, Kak. Saya juga bisa mengetahui di mana letak kelemahan saya dan saya juga bisa mengetahui strategi atau jalan yang harus saya tempuh untuk mengatasi kelemahan saya dan membantu saya untuk mencapai keinginan saya.",
            name: "Jovita",
            jobTitle: "News Editor",
            imageUrl: TvriImage,
        },
        {
            testimonial: "Sesi konsultasi saya dengan Coach Wulan sangat transformatif. Dia juga memberikan wawasan yang sangat berharga tentang teknik wawancara. Saya berterima kasih atas pendekatannya yang personal dan dukungannya yang komprehensif dalam memajukan karir saya. Sangat merekomendasikan untuk siapa saja yang mencari pelatihan profesional dan persiapan wawancara!",
            name: "Risjad",
            jobTitle: "Business Development",
            imageUrl: ParagonImage,
        },
    ];
    
    return (
        <section className="container mx-auto w-full h-auto py-32">
            <h1 className="text-center px-6 font-bold text-4xl mb-5">Mengubah Mimpi Menjadi Karier yang Nyata</h1>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 4 },
                }}
                spaceBetween={30}
                navigation={true}
                mousewheel={{ forceToAxis: true }}
                modules={[Navigation, Mousewheel]}
                className="mySwiper mt-12"
            >
                {ActualCareer.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-3 p-6 md:p-0">
                            <div className="flex justify-center">
                                <ImQuotesLeft size={44} className="text-primary"/>
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <p>{item.testimonial}</p>
                                <div className="text-center">
                                    <h4 className="text-primary font-bold text-m">{item.name}</h4>
                                    <h5>{item.jobTitle}</h5>
                                </div>
                                <img
                                    src={item.imageUrl}
                                    alt={`Image ${item.jobTitle}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
