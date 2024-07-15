import Jumbotron from "components/Jumbotron";

export default function Index() {
  return (
    <Jumbotron
      imageName='banner-aboutus.webp'
    >
      <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
        Manajemen Kinerja  & <br />Karier
      </h1>

      <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
        MENINGKATKAN KINERJA DAN MEMUPUK PERTUMBUHAN KARIER DENGAN SOLUSI MANAJEMEN KAMI YANG DISESUAIKAN. DARI
        DARI PENETAPAN TUJUAN HINGGA UMPAN BALIK, KAMI MENDUKUNG SETIAP INDIVIDU UNTUK UNGGUL DAN MAJU DALAM ORGANISASI ANDA
      </p>
    </Jumbotron>
  )
}
