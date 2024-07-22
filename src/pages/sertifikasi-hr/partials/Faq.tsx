'use client';

export default function Faq() {
    return (
        <section className="container bg-[#BFDBFE] mt-10 mx-auto w-9/12 h-auto py-16 ">
            <h5 className="text-[#004AAD] font-bold text-3xl text-center px-6">Frequently Asked Questions (FAQ)</h5>

            <div className="mt-10 px-20">
                <div className="mb-8">
                    <p className="font-normal text-xl"><strong>Q: Berapa lama penerbitan dan masa berlaku sertifikat?</strong></p>
                    <p className="ml-8"><strong>A:</strong> Sertifikat Lisensi BNSP diterbitkan 2-10 pekan setelah uji dan berlaku dalam 3 tahun. Sertifikat HR Academy diterbitkan 1-2 hari setelah uji dan berlaku seumur hidup.</p>
                </div>
                <div className="mb-8">
                    <p className="font-normal text-xl"><strong>Q: Apakah kegiatan dapat dilakukan secara online?</strong></p>
                    <p className="ml-8"><strong>A:</strong> Dapat dilakukan secara online.</p>
                </div>
                <div className="mb-8">
                    <p className="font-normal text-xl"><strong>Q: Apakah sesi mentoring dapat tetap dilakukan di luar masa pelatihan?</strong></p>
                    <p className="ml-8"><strong>A:</strong> Sesi mentoring untuk para peserta dapat dilakukan pada masa pelatihan dan setelah masa pelatihan.</p>
                </div>
                <div className="mb-8">
                    <p className="font-normal text-xl"><strong>Q: Apakah ada penyaluran kerja setelah pelatihan bagi pencari kerja?</strong></p>
                    <p className="ml-8"><strong>A:</strong> Penyaluran kerja tidak termasuk ke dalam fasilitas pelatihan kami namun alumni akan tergabung ke dalam komunitas HR dan dipersilakan melakukan diskusi dan menjalin relasi satu sama lain.</p>
                </div>
            </div>
        </section>
    );
}
