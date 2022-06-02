import React from 'react';

function RecipeCard({name, recipeDetails, notes }) {
  return (
    <li className="card">
    <h4>{name}</h4>
    <p>Recipe Details: {recipeDetails}</p>
    <p>Notes: {notes}</p>
    {true ? (
      <button className="primary">In Stock</button>
    ) : (
      <button>Out of Stock</button>
    )}
  </li>
  );
}

export default RecipeCard;