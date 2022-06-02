import React from 'react';
import RecipeCard from "./RecipeCard.js"

function RecipeList({recipesArray}) {
  const recipes = recipesArray.map((recipe) => {
    return (
      <RecipeCard 
        key={recipe.id}
        name={recipe.name}
        details={recipe.recipeDetails}
        notes={recipe.notes}
        />
    )
  })
  // will need to call Recipe card here to create each card. The card will just serve as a template

  return (
    <ul className="cards">{recipes}</ul>
  );
}

export default RecipeList;