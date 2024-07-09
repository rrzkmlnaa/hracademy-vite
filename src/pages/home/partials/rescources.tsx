import Button from 'components/Button'

export default function Resource() {
  return (
    <section
      id="resource"
      className="mx-auto min-h-96 max-w-screen-xl content-center py-16"
    >
      <div className="text-balance text-center">
        <a href="#resource" className="text-gray-500">
          Sumber Daya
        </a>
        <h2 className="text-primary py-5 text-4xl font-bold">
          Sumber Daya Gratis
        </h2>
        <p className="pb-2 md:pb-10">
          Temukan templat resume, surat lamaran, & jaringan HR Academy di bawah
          ini
        </p>
      </div>
      <div className="relative grid grid-cols-1 pt-5 md:grid-cols-3">
        {/* Background line */}
        <img
          src="/images/garis.webp"
          width={400}
          height={90}
          loading="lazy"
          alt="line"
          className="left-[18%] top-[20%] -z-10 hidden h-auto w-full md:absolute lg:block lg:w-2/6"
        />
        <img
          src="/images/garis-mirror.webp"
          width={400}
          height={90}
          loading="lazy"
          alt="line"
          className="left-[51%] top-[20%] -z-10 hidden h-auto w-full md:absolute lg:block lg:w-2/6"
        />
        <div className="flex flex-col items-center justify-center p-6">
          <img
            src="/images/resume.webp"
            alt="Resume UI"
            loading="lazy"
            className="h-[400] w-[290px] object-cover"
          />
          <p className="py-4 text-2xl font-bold">Resume</p>
          <p className="text-balance text-center">
            Gunakan templat resume ramah ATS dari HR Academy yang telah membantu
            yang tidak diunggulkan mendapatkan wawancara di
            perusahaan-perusahaan Fortune 500
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-6">
          <img
            src="/images/networking.webp"
            alt="Resume UI"
            loading="lazy"
            className="h-[400] w-[290px] object-cover"
          />
          <p className="py-4 text-2xl font-bold">Networking</p>
          <p className="text-center">
            Gunakan templat jaringan HR Academy untuk meningkatkan peluang Anda
            terhubung dengan perekrut & manajer perekrutan
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-6">
          <img
            src="/images/interview.webp"
            alt="Resume UI"
            loading="lazy"
            className="h-[400] w-[290px] object-cover"
          />
          <p className="py-4 text-2xl font-bold">Interview</p>
          <p className="text-balance text-center">
            Gunakan sumber daya persiapan wawancara HR Academy untuk membantu
            Anda lulus wawancara & mendapatkan tawaran
          </p>
        </div>
      </div>
      <div className="text-balance pt-10 text-center">
        <Button
          type="link"
          to="/resources"
          text="Dapatkan Secara Gratis"
          rounded
        />
      </div>
    </section>
  )
}
