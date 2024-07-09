import React from 'react'

const TOS =
  '<p><strong>1. Penerimaan Syarat</strong><br>Dengan mengakses dan menggunakan situs web kami, Anda setuju terikat dengan Syarat dan Ketentuan ini.</p><br><p><strong>2. Penggunaan Situs Web</strong><br>Anda dapat menggunakan situs web kami hanya untuk tujuan informasi. Anda setuju untuk tidak menggunakan situs web kami untuk tujuan yang ilegal atau tidak diizinkan.</p><br><p><strong>3. Kekayaan Intelektual</strong><br>Seluruh konten di situs web kami, termasuk teks, grafik, logo, dan gambar, adalah milik HR Academy dan dilindungi oleh hukum kekayaan intelektual. Anda tidak boleh menggunakan, mereproduksi, atau mendistribusikan konten apa pun tanpa izin kami.</p><br><p><strong>4. Pembatasan Tanggung Jawab</strong><br>Kami berusaha menyediakan informasi yang akurat dan terkini di situs web kami. Namun, kami tidak menjamin keakuratan, kelengkapan, atau keandalan konten apa pun. Gunakan situs web kami dengan risiko Anda sendiri.</p><br><p><strong>5. Tautan Eksternal</strong><br>Situs web kami mungkin berisi tautan ke situs web pihak ketiga. Tautan ini disediakan hanya untuk kenyamanan Anda. Kami tidak mendukung atau mengendalikan situs web ini dan tidak bertanggung jawab atas konten atau keakuratannya.</p><br><p><strong>6. Perubahan pada Syarat</strong><br>Kami berhak untuk memperbarui atau mengubah Syarat dan Ketentuan Layanan ini kapan saja tanpa pemberitahuan sebelumnya. Dengan melanjutkan menggunakan situs web kami setelah perubahan diposting, Anda setuju terikat oleh Syarat dan Ketentuan yang direvisi.</p><br><p><strong>7. Hukum yang Berlaku</strong><br>Syarat dan Ketentuan Layanan ini tunduk pada hukum Jakarta Timur. Setiap perselisihan yang timbul dari syarat ini akan diselesaikan di pengadilan yang berlokasi di Jakarta Timur.</p><br><p><strong>8. Hubungi Kami</strong><br>Jika Anda memiliki pertanyaan atau kekhawatiran tentang Syarat dan Ketentuan ini, silakan hubungi kami di:</p><ul><li><strong>Email:</strong> admin@hracademy.id</li><li><strong>Telepon:</strong> 6285942210587</li><li><strong>Alamat:</strong> <span style="color: rgb(0, 0, 0); font-family: BeVietnamPro, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">Jalan Rawa Domba Jl. Kav. Dki No.D 9, RT.1/RW.5, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440</span></li></ul>'

const TermOfService = () => {
  return (
    <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <h1 className="text-center text-lg font-semibold md:text-4xl">
        Syarat dan Ketentuan
      </h1>
      <div dangerouslySetInnerHTML={{ __html: TOS }} />
    </div>
  )
}

export default TermOfService
