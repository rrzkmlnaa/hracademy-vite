import Jumbotron from "components/Jumbotron";


export default function Index() {
  return (
    <Jumbotron
      imageName='banner-aboutus.webp'
    >
      <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
        Orientasi  <br />& Penyesuaian Karyawan
      </h1>

      <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
        MENGELOLA TRANSISI KARYAWAN SECARA EFISIEN DENGAN SOLUSI ORIENTASI DAN LEPAS LANDAS KAMI,
        MEMASTIKAN PROSES YANG LANCAR DARI AWAL HINGGA AKHIR
      </p>
    </Jumbotron>
  )
}
