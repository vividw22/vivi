import React from 'react';
import './Aboutme.css'; // Buat file AboutMe.css untuk menuliskan gaya khusus

import img from './img/vivivi.jpeg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="profile-img">
        <div className="p-img">
      <img src={img}/>
        <h2>Tentang Saya</h2>
        <p>jangan pilih saya, karena saya bukan pilihanmu
</p>
        
      </div>
      </div>
    </section>  
  );
};

export default AboutMe;
