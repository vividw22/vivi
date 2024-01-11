import React from 'react';
import './Profile.css'; // Pastikan file CSS sesuai dengan nama yang kamu gunakan

import img from './img/profil vivi.jpeg';
import waLogo from './img/logo wa.png'; // Ganti dengan path logo WhatsApp
import igLogo from './img/logo ig.png'; // Ganti dengan path logo Instagram

const ProfileWithSocials = () => {
  return (
    <div className="profile-with-socials">
      <div className="profile-content">
        <div className="profile-info">
          <h2>Nama: Vivi Dwi Anggreni</h2>
          <p>Kelas: XII RPL 2</p>
          <p>Umur : 18th</p>
          <p>Saya pelajar di SMKN 6 Jember, Harapan saya di 2024 ini menjadi pribadi yang lebih dari tahun sebelum sebelumnya..</p>
          {/* Tambahkan info tambahan sesuai kebutuhan */}
        </div>
        <div className="profile-section">
  <div className="profile-img">
    <img src={img} alt="Profile" />
  </div>
  {/* <div className="social-links">
    <a href="https://wa.me/08582416428" className="social-link">
      <img src={waLogo} alt="WhatsApp" />
    </a>
    <a href="https://www.instagram.com/www.instagram.com/viviidwy" className="social-link">
      <img src={igLogo} alt="Instagram" />
    </a>
  </div> */}
</div>

      </div>
    </div>
  );
};

export default ProfileWithSocials;
