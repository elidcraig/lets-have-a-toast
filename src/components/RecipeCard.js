import React from 'react';
import { motion } from 'framer-motion';
import './RecipeCard.css';

function RecipeCard({ id, name, ingredients, notes, image, onDeleteFunction }) {
  function handleDelete() {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => onDeleteFunction(id));
  }

  return (
    <motion.li className='recipe-card' whileHover={{ scale: 1.05 }}>
      <h1>{name}</h1>
      <div className='recipe-card__img-wrapper'>
        <img src={image ? image : '../toast-logo.png'} alt='toast logo' />
      </div>
      <small>{notes}</small>
      <p>Ingredients: {ingredients}</p>
      <motion.button
        className='recipe-card__button'
        onClick={handleDelete}
        whileHover={{ scale: 1.1 }}
      >
        Remove Recipe
      </motion.button>
    </motion.li>
  );
}

export default RecipeCard;
