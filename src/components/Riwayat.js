import React from 'react';
import './Riwayat.css';

const KontakSaya = () => {
  const kontakData = [
    {
      platform: 'WhatsApp',
      username: '08582416428',
    },
    {
      platform: 'Instagram',
      username: 'www.instagram.com/viviidwy',
    },
    // Tambahkan kontak lainnya sesuai kebutuhan
  ];

  return (
    <div className="kontak-saya">
      <h2 className="kontak-heading">Kontak Saya</h2>
      <ul>
        {kontakData.map((kontak, index) => (
          <li key={index} className="kontak-item">
            <h3 className="platform">{kontak.platform}</h3>
            <p className="username">{kontak.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KontakSaya;
