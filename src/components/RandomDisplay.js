import React, { useState, useEffect } from 'react';
import './RandomDisplayCSS.css';

function RandomDisplay() {
  const [ingredientObject, setIngredientObject] = useState({});

  const [toastLevel, setToastLevel] = useState('Golden');
  const [secondTopping, setSecondTopping] = useState('Fresh fruit');
  const [firstTopping, setFirstTopping] = useState('PB');
  const [bread, setBread] = useState('Multigrain');

  function randomSelector() {
    const randomResult = {}[Math.floor(Math.random() * {}.length)];
  }

  useEffect(() => {
    fetch('http://localhost:3000/ingredients')
      .then((response) => response.json())
      .then(setIngredientObject);
  }, []);

  function generateToastLevel(e) {
    const randomResult =
      ingredientObject.toastLevel[
        Math.floor(Math.random() * ingredientObject.toastLevel.length)
      ];

    setToastLevel(randomResult);
  }
  function generateSecondTopping(e) {
    const randomResult =
      ingredientObject.secondTopping[
        Math.floor(Math.random() * ingredientObject.secondTopping.length)
      ];

    setSecondTopping(randomResult);
  }

  function generateFirstTopping(e) {
    const randomResult =
      ingredientObject.firstTopping[
        Math.floor(Math.random() * ingredientObject.firstTopping.length)
      ];

    setFirstTopping(randomResult);
  }

  function generateBread(e) {
    const randomResult =
      ingredientObject.bread[
        Math.floor(Math.random() * ingredientObject.bread.length)
      ];

    setBread(randomResult);
  }

  return (
    <div className='randomDisplay'>
      <h1>{secondTopping}</h1>
      <button
        className='generateButton'
        id='secondTopping'
        onClick={generateSecondTopping}
      >
        Second Topping
      </button>
      <h1>{firstTopping}</h1>
      <button
        className='generateButton'
        id='firstTopping'
        onClick={generateFirstTopping}
      >
        First Topping
      </button>
      <h1>{bread}</h1>
      <button className='generateButton' id='bread' onClick={generateBread}>
        Bread
      </button>
      <h1>{toastLevel}</h1>
      <button
        className='generateButton'
        id='toastLevel'
        onClick={generateToastLevel}
      >
        Toast Level
      </button>
    </div>
  );
}

export default RandomDisplay;
