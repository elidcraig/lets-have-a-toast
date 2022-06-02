import React from 'react';

function RecipeCard({name, recipeDetails, notes }) {
  return (
    <li className="card">
    <h4>{name}</h4>
    <p>Recipe Details: {recipeDetails}</p>
    <p>Notes: {notes}</p>
  </li>
  );
}

export default RecipeCard;