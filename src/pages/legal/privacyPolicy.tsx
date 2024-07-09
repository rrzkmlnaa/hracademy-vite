import React from 'react'

const PrivacyPolicyContent =
  '<p><strong>Kebijakan Privasi</strong></p><p>Terakhir diperbarui: 7 Juli 2024</p><br/><p><strong>Informasi yang Kami Kumpulkan</strong></p><p>Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, dan informasi kontak lainnya saat Anda mengunjungi situs web kami atau menghubungi kami untuk pertanyaan atau layanan.</p><br/><p><strong>Penggunaan Informasi</strong></p><p>Informasi pribadi yang kami kumpulkan digunakan untuk menjawab pertanyaan Anda, menyediakan layanan, dan untuk keperluan administratif lainnya.</p><br/><p><strong>Bagaimana Kami Berbagi Informasi</strong></p><p>Kami tidak menjual, menyewakan, atau mengungkapkan informasi pribadi pelanggan kepada pihak ketiga, kecuali jika diwajibkan oleh hukum.</p><br/><p><strong>Teknologi Pelacakan</strong></p><p>Kami menggunakan teknologi seperti cookies untuk mengumpulkan data non-pribadi seperti tipe browser, alamat IP, dan halaman yang dikunjungi untuk memahami bagaimana pengguna berinteraksi dengan situs kami.</p><br/><p><strong>Keamanan Informasi</strong></p><p>Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi dari akses, penggunaan, atau pengungkapan yang tidak sah.</p><br/><p><strong>Pengaturan Cookies</strong></p><p>Anda dapat mengatur pengaturan cookies melalui browser Anda. Namun, mematikan cookies dapat mempengaruhi pengalaman pengguna di situs kami.</p><br/><p><strong>Perubahan pada Kebijakan Privasi</strong></p><p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini, dan Anda disarankan untuk memeriksanya secara berkala.</p><br/><p><strong>Kontak Kami</strong></p><ul><li><strong>Email:</strong> admin@hracademy.id</li><li><strong>Telepon:</strong> 6285942210587</li><li><strong>Alamat:</strong> Jalan Rawa Domba Jl. Kav. Dki No.D 9, RT.1/RW.5, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440</li></ul><br/><p>Terima kasih telah membaca kebijakan privasi kami.</p>'

const PrivacyPolicy = () => {
  return (
    <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <h1 className="text-center text-lg font-semibold md:text-4xl">
        Kebijakan Privasi
      </h1>
      <div dangerouslySetInnerHTML={{ __html: PrivacyPolicyContent }} />
    </div>
  )
}

export default PrivacyPolicy
