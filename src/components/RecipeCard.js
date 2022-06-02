import React from 'react';
import './RecipeCard.css'

function RecipeCard({id, name, recipeDetails, notes, onDeleteFunction }) {
  console.log(id)

  function handleDelete() {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteFunction(id))
  }

  return (
    <li className="recipe-card">
      <h4>{name}</h4>
      <button onClick={handleDelete}>Remove Recipe</button>
      <p>Recipe Details: {recipeDetails}</p>
      <p>Notes: {notes}</p>
    </li>
  );
}

export default RecipeCard;