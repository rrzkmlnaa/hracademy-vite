'use client'

export default function Chart() {
  return (
    <section className="container mx-auto w-full h-auto flex flex-col justify-center items-center gap-5 md:gap-14 pb-20 px-6">
      <h2 className="text-primary-500 text-4xl font-bold mb-6">Struktur Perusahaan</h2>
      <div className="w-full flex justify-center">
        <img
          src="/images/company-structure.png"
          alt="Company structure"
          className="w-full md:w-2/3 h-auto object-cover"
        />
      </div>
    </section>
  )
}
