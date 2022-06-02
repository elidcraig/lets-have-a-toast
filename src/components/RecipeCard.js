import React from 'react';
import { motion } from 'framer-motion';
import './RecipeCard.css'
// import logo from '../../public/toast-logo.png'

function RecipeCard({name, recipeDetails, notes }) {
  return (
    <li className="recipe-card">
      <h4>{name}</h4>
      <div className="recipe-card__img-wrapper">
      <img src='../toast-logo.png' alt='toast logo' />
      </div>
      <p>Recipe Details: {recipeDetails}</p>
      <p>Notes: {notes}</p>
  </li>
  );
}

export default RecipeCard;