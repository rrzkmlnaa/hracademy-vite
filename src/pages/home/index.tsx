import React from 'react'
import Button from 'components/Button'
import Jumbotron from 'components/Jumbotron'
import Client from './partials/client'
import Role, { roles } from './partials/role'
import Why from './partials/why'
import Career from './partials/career'
import Course from './partials/course'
import LMS from './partials/lms'
import Solution from './partials/solutions'
import Resource from './partials/rescources'
import Featured from './partials/articles'

const Home = () => {
  const selectedRoles = roles.slice(0, 3)

  return (
    <>
      <Jumbotron imageName="banner-landingpage.webp">
        <h1 className="text-center font-sans text-5xl font-extrabold md:text-start">
          Jalan Anda Menuju Sukses Dimulai dari Sini
        </h1>

        <p className="mt-4 max-w-lg text-center text-xl/relaxed md:text-start">
          TINGKATKAN KOMPETENSI ANDA, DAPATKAN PEKERJAAN IMPIAN ANDA, DAN
          KEMBANGKAN BISNIS ANDA DENGAN PROGRAM PELATIHAN DAN PEMBINAAN KAMI
          YANG DISESUAIKAN
        </p>

        <div className="mt-8 flex flex-wrap justify-center text-center md:justify-start">
          <Button
            type="link"
            to="/about-us/contact-us"
            color="warning"
            text="Daftar Sekarang"
          />
          <Button
            type="link"
            to="#role"
            color="primary"
            text="Lihat Semua Layanan"
          />
        </div>
      </Jumbotron>
      <Client />
      <Role
        title="TEMUKAN SOLUSI KHUSUS UNTUK ANDA"
        bgColor="bg-gray-100"
        titleStyle="absolute bottom-0"
        roles={selectedRoles}
      />
      <Why />
      <Career />
      <Course />
      <LMS />
      <Solution />
      <Resource />
      <Featured
        head="Artikel"
        headColor="text-white"
        sectionStyled="bg-blue-800 text-white"
      />
    </>
  )
}

export default Home
