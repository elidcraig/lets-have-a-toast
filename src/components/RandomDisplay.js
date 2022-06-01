import React, { useState, useEffect } from 'react';

function RandomDisplay() {
  const [toastLevel, setToastLevel] = useState('Golden');
  const [secondTopping, setSecondTopping] = useState('PB');
  const [firstTopping, setFirstTopping] = useState('fresh fruit');
  const [bread, setBread] = useState('multigrain');

  function randomSelector() {}

  function generateToastLevel() {
    useEffect(() => {
      fetch('http://localhost:3000/toastLevel')
        .then((response) => response.json())
        .then(setToastLevel);
    }, []);
  }

  function generateSecondTopping() {
    useEffect(() => {
      fetch('http://localhost:3000/toastLevel')
        .then((response) => response.json())
        .then(setSecondTopping);
    }, []);
  }

  function generateFirstTopping() {
    useEffect(() => {
      fetch('http://localhost:3000/toastLevel')
        .then((response) => response.json())
        .then(setFirstTopping);
    }, []);
  }

  function generateBread() {
    useEffect(() => {
      fetch('http://localhost:3000/bread')
        .then((response) => response.json())
        .then(setBread);
    }, []);
  }

  return (
    <div className='randomDisplay'>
      <button onClick={generateToastLevel}>Toast Level</button>
      <span>{toastLevel}</span>
      <button onClick={generateSecondTopping}>Topping #2</button>
      <button onClick={generateFirstTopping}>Topping #1</button>
      <button onClick={generateBread}>Bread</button>
    </div>
  );
}

export default RandomDisplay;
