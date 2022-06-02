import React from 'react';
import './RecipeCard.css'

function RecipeCard({name, recipeDetails, notes }) {
  return (
    <li className="recipe-card">
      <h4>{name}</h4>
      <p>Recipe Details: {recipeDetails}</p>
      <p>Notes: {notes}</p>
  </li>
  );
}

export default RecipeCard;