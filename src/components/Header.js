import React from 'react';
import './Header.css'; // File CSS yang akan digunakan

function Header() {
  return (
    <header className="main-header">
      <h1>Website Saya</h1>
      <nav>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/tentang">Tentang</a></li>
          <li><a href="/kontak">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
