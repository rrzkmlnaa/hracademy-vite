import React from 'react'

export default function Header() {
  return (
    <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full h-auto py-5">
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className='text-primary font-bold text-2xl'>SUMBER DAYA KARIRS</h3>
        <h1 className='font-bold text-4xl'>Sumber Daya Akademi SDM</h1>
        <p>Butuh sumber daya gratis untuk pencarian kerja Anda?</p>
        <p>Kami membantu Anda.</p>
      </div>
      <h1 className='text-center pt-20 pb-3 font-bold text-4xl'>Resume gratis untuk diunduh dan banyak lagi</h1>
    </section>
  )
}
