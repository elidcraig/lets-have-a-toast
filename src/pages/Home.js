import React from 'react';
import NavBar from '../components/NavBar.js';
import FeaturedToast from '../components/FeaturedToast.js';
import Toastimonials from '../components/Toastimonials.js';

function Home() {
  return (
    <div className='home'>
      <NavBar />
      <FeaturedToast />
      <Toastimonials />
    </div>
  );
}

export default Home;