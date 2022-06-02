import React, { useState, useEffect } from 'react';
import './RandomDisplayCSS.css';

function RandomDisplay() {
  const [ingredientObject, setIngredientObject] = useState({});

  const [toastLevel, setToastLevel] = useState('generate toast level');
  const [secondTopping, setSecondTopping] = useState('generate 2nd topping');
  const [firstTopping, setFirstTopping] = useState('generate 1st topping');
  const [bread, setBread] = useState('generate bread type');

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
    <div>
      <h1>Feeling *burnt* out with decisions?</h1>
      <h1>Let fate decide your next toasty snack!</h1>
      <div className='random-display'>
        <div>
          <button
            className='random-display__generate-button'
            id='bread'
            onClick={generateBread}
          >
            Bread
          </button>{' '}
          <h2>{bread}</h2>
        </div>
        <div>
          <button
            className='random-display__generate-button'
            id='toastLevel'
            onClick={generateToastLevel}
          >
            Toast Level
          </button>{' '}
          <h2>{toastLevel}</h2>
        </div>
        <div className='generatorRow'>
          <button
            className='random-display__generate-button'
            id='firstTopping'
            onClick={generateFirstTopping}
          >
            First Topping
          </button>{' '}
          <h2>{firstTopping}</h2>
        </div>
        <div className='generatorRow'>
          <button
            className='random-display__generate-button'
            id='secondTopping'
            onClick={generateSecondTopping}
          >
            Second Topping
          </button>{' '}
          <h2>{secondTopping}</h2>
        </div>
      </div>
    </div>
  );
}

export default RandomDisplay;
