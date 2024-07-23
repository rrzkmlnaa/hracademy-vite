import React from 'react';
import Button from "../../../../components/Button"; // Gunakan Button yang pertama
import UnstyledLink from "../../../../components/links/UnstyledLink"; // Pastikan ini adalah jalur yang benar untuk UnstyledLink

import { downloadFile } from "handler/DownloadFile";

export default function NeedInfo() {
  const handleDownloadClick = () => {
    const documentUrl = '/document/HR-Academy-Pelatihan-Sertifikasi-SDM-BNSP-Double-Degree.pdf';

    downloadFile(documentUrl, 'HR-Certification-Document.pdf')
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-primary text-center py-20">
        <h2 className="text-white text-3xl font-bold py-4">Butuh informasi lebih lanjut?</h2>
        <UnstyledLink to='/about-us/contact-us'>
          <Button
            type="button" // Gunakan type yang sesuai
            to='/about-us/contact-us'
            color="warning" // Sesuaikan dengan warna yang diinginkan
            rounded={true} // Jika perlu
            text="Hubungi Kami" // Setel teks button
          />
        </UnstyledLink>
      </div>
      <div className="bg-warning text-center py-20">
        <h2 className="text-primary text-3xl font-bold py-4">Katalog pelatihan HR Academy</h2>
        <Button
          type="button" // Atau 'link', sesuai kebutuhan
          color="primary" // Sesuaikan dengan warna yang diinginkan
          rounded={true} // Jika perlu
          action={handleDownloadClick} // Gunakan action untuk meng-handle klik
          text="Unduh" // Setel teks button
        />
      </div>
    </section>
  );
}
