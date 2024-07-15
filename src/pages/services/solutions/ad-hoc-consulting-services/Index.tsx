import Jumbotron from "components/Jumbotron";


export default function Index() {
  return (
    <Jumbotron
      imageName='banner-aboutus.webp'
    >
      <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
        Layanan Konsultasi Ad-hoc
      </h1>

      <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
        AKSES LAYANAN KONSULTASI SDM AHLI YANG DISESUAIKAN DENGAN KEBUTUHAN BISNIS ANDA, TERSEDIA SESUAI PERMINTAAN.
      </p>
    </Jumbotron>
  )
}
