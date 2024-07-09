/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import Button from 'components/Button'

export type ImageProps = {
  src: string
  alt: string
}

export const clients: ImageProps[] = [
  { src: '/images/dbs-Logo.webp', alt: 'DBS Company' },
  { src: '/images/deloitte.webp', alt: 'Deloitte Company' },
  { src: '/images/pertamina.webp', alt: 'Pertamina Company' },
  { src: '/images/pwc.webp', alt: 'PWC Company' },
  { src: '/images/rsm.webp', alt: 'RSM Company' },
  { src: '/images/sc-johnson.webp', alt: 'SC Johnson Company' },
  { src: '/images/zahir.webp', alt: 'Zahir Company' },
  { src: '/images/bukopin-syariah.webp', alt: 'Bank Bukopin Company' },
  { src: '/images/paragon.webp', alt: 'Paragon Company' },
  { src: '/images/tvri.webp', alt: 'TVRI Company' }
]

const ClientImage = ({ src, alt }: ImageProps) => {
  return (
    <div>
      <img
        src={src}
        className="object-cover duration-150 hover:scale-110"
        width="100%"
        height="auto"
        alt={alt}
        loading="lazy"
      />
    </div>
  )
}

const Client = () => {
  return (
    <section className="mx-auto max-w-screen-xl space-y-8 px-4 py-28 sm:px-6 lg:space-y-16 lg:px-8">
      <h2 className="text-primary text-center text-4xl font-extrabold">
        Klien Kami Sekarang Bekerja di Berbagai Perusahaan
      </h2>
      <div className="flex items-center justify-center gap-10">
        {clients.slice(0, 8).map((client: ImageProps, idx: number) => (
          <ClientImage key={idx} src={client.src} alt={client.alt} />
        ))}
      </div>
      <div className="text-center">
        <Button type="link" text="Read Success Story" to="/success-story" />
      </div>
    </section>
  )
}

export default Client
