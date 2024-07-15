import Jumbotron from "components/Jumbotron";


export default function Index() {
  return (
    <Jumbotron
      imageName='banner-aboutus.webp'
    >
      <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
        Manajemen Penggajian
      </h1>

      <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
        SECARA EFISIEN MENCAKUP SELURUH PROSES PENGHITUNGAN JAM KERJA KARYAWAN, MEMBAYAR KARYAWAN, MEMOTONG PAJAK,
        DAN MEMELIHARA DOKUMENTASI KEUANGAN UNTUK BISNIS ANDA.
      </p>
    </Jumbotron>
  )
}
