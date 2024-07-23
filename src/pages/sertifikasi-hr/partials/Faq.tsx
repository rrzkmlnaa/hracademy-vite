'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "Berapa lama penerbitan dan masa berlaku sertifikat?",
        answer: "Sertifikat Lisensi BNSP diterbitkan 2-10 pekan setelah uji dan berlaku dalam 3 tahun. Sertifikat HR Academy diterbitkan 1-2 hari setelah uji dan berlaku seumur hidup."
    },
    {
        question: "Apakah kegiatan dapat dilakukan secara online?",
        answer: "Dapat dilakukan secara online."
    },
    {
        question: "Apakah sesi mentoring dapat tetap dilakukan di luar masa pelatihan?",
        answer: "Sesi mentoring untuk para peserta dapat dilakukan pada masa pelatihan dan setelah masa pelatihan."
    },
    {
        question: "Apakah ada penyaluran kerja setelah pelatihan bagi pencari kerja?",
        answer: "Penyaluran kerja tidak termasuk ke dalam fasilitas pelatihan kami namun alumni akan tergabung ke dalam komunitas HR dan dipersilakan melakukan diskusi dan menjalin relasi satu sama lain."
    }
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="container bg-[#BFDBFE] mt-10 lg:mx-auto md:mx-auto sm:mx-auto w-auto rounded-xl h-auto py-16">
            <h5 className="text-[#004AAD] font-bold text-2xl lg:text-5xl text-center px-6">Frequently Asked Questions (FAQ)</h5>
            <div className="mt-10 px-5 md:px-20">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-8">
                        <div
                            className="flex justify-between items-center font-normal text-[18px] md:text-xl cursor-pointer bg-white p-4 rounded-lg shadow-md"
                            onClick={() => toggleAccordion(index)}
                        >
                            <strong>Q: {faq.question}</strong>
                            <span>
                                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-inner">
                                <p>
                                    <strong>A:</strong> {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
