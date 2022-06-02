import React from 'react';
import './RecipeList.css'
import RecipeCard from "./RecipeCard.js"

function RecipeList({recipesArray}) {
  console.log(recipesArray)
  const recipes = recipesArray.map((recipe) => {
    return (
      <RecipeCard 
        key={recipe.id}
        name={recipe.name}
        recipeDetails={recipe.recipeDetails}
        notes={recipe.notes}
        />
    )
  })

  return (
    <ul className="recipe-list">{recipes}</ul>
  );
}

export default RecipeList;