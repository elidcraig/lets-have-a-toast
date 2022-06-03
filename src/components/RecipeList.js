import React from 'react';
import './RecipeList.css';
import RecipeCard from './RecipeCard.js';

function RecipeList({ recipesArray, onDeleteRecipe }) {
  const recipes = recipesArray.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        ingredients={recipe.ingredients}
        notes={recipe.notes}
        image={recipe.image}
        onDeleteFunction={onDeleteRecipe}
      />
    );
  });

  return <ul className='recipe-list'>{recipes}</ul>;
}

export default RecipeList;
