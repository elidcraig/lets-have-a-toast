import React from 'react';
import { motion } from 'framer-motion';
import './RecipeCard.css'
// import logo from '../../public/toast-logo.png'

function RecipeCard({name, recipeDetails, notes }) {
  return (
    <motion.li className="recipe-card" whileHover={{ scale: 1.05 }}>
      <h3>{name}</h3>
      <div className="recipe-card__img-wrapper">
        <img src='../toast-logo.png' alt='toast logo' />
      </div>
      <small>{notes}</small>
      <p>Recipe Details: {recipeDetails}</p>
  </motion.li>
  );
}

export default RecipeCard;