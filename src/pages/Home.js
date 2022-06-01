import React from 'react';
import NavBar from '../components/NavBar';
import FeaturedToast from '../components/FeaturedToast';
import Toastimonials from '../components/Toastimonials';

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