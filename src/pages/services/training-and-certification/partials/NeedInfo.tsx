import React from 'react';
import Button from "../../../../components/buttons/Button";
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
          <Button variant="light">Hubungi Kami</Button>
        </UnstyledLink>
      </div>
      <div className="bg-yellow-300 text-center py-20">
        <h2 className="text-primary text-3xl font-bold py-4">Katalog pelatihan HR Academy</h2>
        <Button onClick={handleDownloadClick} variant="light">Unduh</Button>
      </div>
    </section>
  );
}
