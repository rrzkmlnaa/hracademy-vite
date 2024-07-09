/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react'
import { defaultSEOConfig } from 'configs/seo'
import { navigations } from 'constant/navigations'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600">
              <Link className="block text-teal-600" to="/">
                <span className="sr-only">HR Academy</span>
                <img
                  src="/images/appLogo.webp"
                  width="160px"
                  height="auto"
                  alt="app-logo"
                />
              </Link>
            </div>

            <p className="mt-4 max-w-xs text-gray-500">
              Jalan Rawa Domba Jl. Kav. Dki No.D 9, RT.1/RW.5, Duren Sawit, Kec.
              Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
              13440
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://id.linkedin.com/company/hr-academy-id"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Linkedin</span>
                  <Icon icon="tabler:brand-linkedin" className="size-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hracademy.id/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <Icon icon="tabler:brand-instagram" className="size-7" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@hracademy_id"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Youtube</span>
                  <Icon icon="tabler:brand-youtube" className="size-7" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                {navigations
                  .find((f) => f.name === 'Services')
                  ?.children?.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path ?? '#!'}
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                {navigations
                  .find((f) => f.name === 'About Us')
                  ?.children?.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path ?? '#!'}
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="https://api.whatsapp.com/send/?phone=6285942210575&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    WhatsApp 1
                  </a>
                </li>

                <li>
                  <a
                    href="https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    WhatsApp 2
                  </a>
                </li>

                <li>
                  <a
                    href="admin@hracademy.id"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Email Company
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="term-of-service"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Term of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="privacy-policy"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()}. {defaultSEOConfig.appName}. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
