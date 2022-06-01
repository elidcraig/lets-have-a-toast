import React, { useState } from 'react';

function RandomDisplay() {
  const [toastLevel, setToastLevel] = useState('Golden');
  const [secondTopping, setSecondTopping] = useState('Fresh fruit');
  const [firstTopping, setFirstTopping] = useState('PB');
  const [bread, setBread] = useState('Multigrain');

  function randomSelector() {
    const randomResult = { array }[
      Math.floor(Math.random() * { array }.length)
    ];
  }

  function generateToastLevel() {
    fetch('http://localhost:3000/toastLevel/')
      .then((response) => response.json())
      .then(setToastLevel);
  }

  function generateSecondTopping() {
    fetch('http://localhost:3000/savoryToppings/')
      .then((response) => response.json())
      .then(setSecondTopping);
  }

  function generateFirstTopping() {
    fetch('http://localhost:3000/sweetToppings/')
      .then((response) => response.json())
      .then(setFirstTopping);
  }

  function generateBread() {
    fetch('http://localhost:3000/toastLevel/')
      .then((response) => response.json())
      .then(setBread);
  }

  return (
    <div className='randomDisplay'>
      <button onClick={generateToastLevel}>Toast Level</button>
      <h1>{toastLevel}</h1>
      <button onClick={generateSecondTopping}>Second Topping</button>
      <h1>{secondTopping}</h1>
      <button onClick={generateFirstTopping}>First Topping</button>
      <h1>{firstTopping}</h1>
      <button onClick={generateBread}>Bread</button>
      <h1>{bread}</h1>
    </div>
  );
}

export default RandomDisplay;
