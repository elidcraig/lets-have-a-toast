import React from 'react';
import RecipeList from "./RecipeList.js"
import RecipeCard from "./RecipeCard.js"
import NewRecipeForm from "./NewRecipeForm"

function Recipes() {
 
  return (
    <div>
      <RecipeList/> 

      <RecipeCard/>

      <NewRecipeForm/>
    </div>
   
  );
}

export default Recipes;