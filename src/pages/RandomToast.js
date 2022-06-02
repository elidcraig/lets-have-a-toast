import React from 'react';
import NavBar from '../components/NavBar';
import RandomToastForm from '../components/RandomToastForm';
import RandomDisplay from '../components/RandomDisplay';

function RandomToast() {
  return (
    <div>
      <NavBar />
      <RandomDisplay />
    </div>
  );
}

export default RandomToast;
