export default function LMS() {
  return (
    <section className="bg-blue-200 py-10 md:px-6">
      <div className="text-primary mx-auto max-w-screen-xl content-center px-6 py-16 text-center md:px-0">
        <h2 className="text-4xl font-bold">
          Belajar Lebih Mudah dengan LMS HR Academy
        </h2>
        <p className="py-5">
          Dapatkan akses mudah ke materi, pembayaran yang sederhana, dan fitur
          interaktif
          <br />
          Meningkatkan efisiensi dan kelengkapan pembelajaran.
        </p>
        <a href="https://campus.hracademy.id" target="_blank" rel="noreferrer">
          <div className="flex justify-center">
            <img
              src="/images/mockup.webp"
              alt="mockup-lms"
              className="h-auto w-3/5 rounded-md object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
