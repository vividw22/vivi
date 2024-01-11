import React from 'react';
import Header from './components/Header';
import AboutMe from './components/Aboutme';
import Project from './components/Project';
import Profile from './components/Profile';
import Riwayat from './components/Riwayat';

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Project />
      <Profile />
      <Riwayat />
    </div>
  );
};

export default App;