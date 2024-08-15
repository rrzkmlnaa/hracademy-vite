import React, { useState } from "react";
import Jumbotron from "components/jumbo/benner";
import { FaUserCircle, FaStar, FaThumbsUp, FaEllipsisV } from "react-icons/fa";

// Definisikan tipe untuk testimonial
interface Testimonial {
  id: number;
  username: string;
  date: string;
  rating: number;
  content: string;
  translatedContent: string; // Teks terjemahan
  isNew: boolean; // Menandakan testimonial baru
  reviewsCount?: number; // Jumlah ulasan
  photosCount?: number; // Jumlah foto
  guide?: string; // Menandakan guide lokal
}

// Array untuk konten testimonial
const testimonials: Testimonial[] = [
  {
    id: 1,
    username: "Hafiz",
    date: "5 hours ago",
    rating: 5,
    content:
      "Materinya sesuai dan akurat dengan standar kebutuhan tenaga kerja dan uji sertifikasi. Dan ada bantuan pengerjaan praktisnya. Saya jadi bisa lulus uji kompetensi bnsp.",
    translatedContent:
      "The material is appropriate and accurate to the standards of labor needs and certification tests. And there is practical work help. I was able to pass the bnsp competency test.",
    isNew: true,
  },
  {
    id: 2,
    username: "Lonita Lorensa",
    date: "4 hours ago",
    rating: 5,
    content:
      "HR Academy memberikan pelatihan HRM yang komprehensif dan up-to-date. Materinya sangat membantu saya dalam menerapkan strategi HRM yang efektif di perusahaan. Trainernya juga sangat berpengalaman dan mamou menyampaikan materi dengan sangat baik. Sukses terus HR Academy!",
    translatedContent:
      "HR Academy provides comprehensive and up-to-date HRM training. The material really helped me in implementing effective HRM strategies in the company. The trainers are also very experienced and deliver the material very well. Keep up the good work HR Academy!",
    isNew: true,
    reviewsCount: 3, // Jumlah ulasan
  },
  {
    id: 3,
    username: "Rielo Lakwij",
    date: "2 years ago",
    rating: 5,
    content:
      "Penjelasan yang disampaikan terstruktur dan mudah dipahami. Sangat bisa diaplikasikan dan disesuaikan ke kebutuhan masing-masing perusahaan. Pelayanan juga ramah. Sukses selalu HRA",
    translatedContent: "The service provided was very good and satisfying.",
    isNew: false,
    reviewsCount: 18, // Jumlah ulasan
    photosCount: 4, // Jumlah foto
    guide: "Local Guide",
  },
  {
    id: 4,
    username: "Giana Hadi",
    date: "a month ago",
    rating: 5,
    content:
      "Alhamdulillah dapat menimba ilmu di HR Academy, tempatnya cozy dan adem bet sehingga bisa fokus belajar... trainner dengan background profesional banyak memberikan inspirasi. Terimakasih HR Academy",
    translatedContent:
      "Alhamdulillah for gaining knowledge at HR Academy, the place is cozy and cool so I can focus on learning... trainers with professional backgrounds provide a lot of inspiration. Thank you HR Academy",
    isNew: false,
    reviewsCount: 4, // Jumlah ulasan
    photosCount: 2, // Jumlah foto
  },
  // Tambahkan lebih banyak testimonial jika diperlukan
];

const Modul = () => {
  const [isTranslated, setIsTranslated] = useState<{ [key: number]: boolean }>({});

  const handleTranslate = (id: number) => {
    setIsTranslated((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
      <Jumbotron imageName="background3.jpeg">
        <div className="p-6">
          <div className="text-right mb-6">
            <h1 className="text-6xl font-bold" style={{ color: "#bfdbfe" }}>
              Apa kata alumni?
            </h1>
          </div>
        </div>
      <div className="p-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6 w-full mb-4">
            <div className="flex items-center justify-between">
              <FaUserCircle size={40} className="text-gray-400" />
              <div className="flex flex-col ml-4">
                <div className="flex items-center">
                  <h3 className="text-lg text-black font-semibold">{testimonial.username}</h3>
                </div>
                <p className="text-sm text-black flex items-center space-x-1">
                  {testimonial.guide && (
                    <>
                      <span className="font-bold">{testimonial.guide}</span>
                      <span className="w-[3px] h-[3px] bg-black rounded-full block"></span>
                    </>
                  )}
                  {testimonial.reviewsCount && (
                    <>
                      <span>{testimonial.reviewsCount} reviews</span>
                      {testimonial.photosCount && (
                        <>
                          <span className="w-[3px] h-[3px] bg-black rounded-full block"></span>
                          <span>{testimonial.photosCount} photos</span>
                        </>
                      )}
                    </>
                  )}
                </p>
                <div className="flex items-center mt-1">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                  <p className="text-sm ml-3 text-gray-500">{testimonial.date}</p>
                  {testimonial.isNew && (
                    <span className="ml-2 text-xs text-gray-700 border border-gray-300 px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                </div>
              </div>
              <FaEllipsisV size={20} className="text-gray-500 ml-auto" />
            </div>
            <div className="mt-4">
              <p className="text-gray-700 mt-2">
                {isTranslated[testimonial.id] ? testimonial.translatedContent : testimonial.content}
              </p>
            </div>
            <button
              className="text-blue-500 mt-2 underline"
              onClick={() => handleTranslate(testimonial.id)}
            >
              {isTranslated[testimonial.id] ? "See Original" : "See Translate (English)"}
            </button>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <FaThumbsUp className="text-gray-600 text-[24px]" />
                <span className="ml-2 text-gray-600 mt-2">Likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Jumbotron>
  );
};

export default Modul;
