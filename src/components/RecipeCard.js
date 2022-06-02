import React from 'react';
import { motion } from 'framer-motion';
import './RecipeCard.css'
// import logo from '../../public/toast-logo.png'

function RecipeCard({id, name, recipeDetails, notes, onDeleteFunction }) {


  function handleDelete() {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteFunction(id))
  }

  return (
    <motion.li className="recipe-card" whileHover={{ scale: 1.05 }}>
      <h3>{name}</h3>
      <div className="recipe-card__img-wrapper">
        <img src='../toast-logo.png' alt='toast logo' />
      </div>
      <small>{notes}</small>
      <p>Recipe Details: {recipeDetails}</p>
      <button onClick={handleDelete}>Remove Recipe</button>
  </motion.li>
  );
}

export default RecipeCard;