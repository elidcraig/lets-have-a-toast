import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './RandomDisplayCSS.css';

function RandomDisplay() {
  const [ingredientObject, setIngredientObject] = useState({});

  const [toastLevel, setToastLevel] = useState('generate toast level');
  const [secondTopping, setSecondTopping] = useState('generate 2nd topping');
  const [firstTopping, setFirstTopping] = useState('generate 1st topping');
  const [bread, setBread] = useState('generate bread type');

  const [breadWasClicked, setBreadWasClicked] = useState(false)
  const [levelWasClicked, setLevelWasClicked] = useState(false);
  const [topOneWasClicked, setTopOneWasClicked] = useState(false);
  const [topTwoWasClicked, setTopTwoWasClicked] = useState(false);

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
    setLevelWasClicked(true)
    setTimeout(() => {
      setLevelWasClicked(false);
    }, 1000)
  }
  function generateSecondTopping(e) {
    const randomResult =
      ingredientObject.secondTopping[
        Math.floor(Math.random() * ingredientObject.secondTopping.length)
      ];

    setSecondTopping(randomResult);
    setTopTwoWasClicked(true)
    setTimeout(() => {
      setTopTwoWasClicked(false);
    }, 1000)
  }

  function generateFirstTopping(e) {
    const randomResult =
      ingredientObject.firstTopping[
        Math.floor(Math.random() * ingredientObject.firstTopping.length)
      ];

    setFirstTopping(randomResult);
    setTopOneWasClicked(true)
    setTimeout(() => {
      setTopOneWasClicked(false);
    }, 1000)
  }

  function generateBread(e) {
    const randomResult =
      ingredientObject.bread[
        Math.floor(Math.random() * ingredientObject.bread.length)
      ];

    setBread(randomResult);
    setBreadWasClicked(true)
    setTimeout(() => {
      setBreadWasClicked(false);
    }, 1000)
  }

  return (
    <div>
      <h1>Feeling *burnt* out with decisions?</h1>
      <h1>Let fate decide your next toasty snack!</h1>
      <div className='random-display'>
        <div>
          <motion.button
            className='random-display__generate-button'
            id='bread'
            whileHover={{scale: 1.08}}
            onClick={generateBread}
          >
            Bread
          </motion.button>{' '}
          <motion.h2 animate={breadWasClicked ? {y: [0, 90, -70, 0]} : null}>{bread}</motion.h2>
        </div>
        <div>
          <motion.button
            className='random-display__generate-button'
            id='toastLevel'
            whileHover={{scale: 1.08}}
            onClick={generateToastLevel}
          >
            Toast Level
          </motion.button>{' '}
          <motion.h2 animate={levelWasClicked ? {y: [0, 90, -70, 0]} : null}>{toastLevel}</motion.h2>
        </div>
        <div className='generatorRow'>
          <motion.button
            className='random-display__generate-button'
            id='firstTopping'
            whileHover={{scale: 1.08}}
            onClick={generateFirstTopping}
          >
            First Topping
          </motion.button>{' '}
          <motion.h2 animate={topOneWasClicked ? {y: [0, 90, -70, 0]} : null}>{firstTopping}</motion.h2>
        </div>
        <div className='generatorRow'>
          <motion.button
            className='random-display__generate-button'
            id='secondTopping'
            whileHover={{scale: 1.08}}
            onClick={generateSecondTopping}
          >
            Second Topping
          </motion.button>{' '}
          <motion.h2 animate={topTwoWasClicked ? {y: [0, 90, -70, 0]} : null}>{secondTopping}</motion.h2>
        </div>
      </div>
    </div>
  );
}

export default RandomDisplay;
