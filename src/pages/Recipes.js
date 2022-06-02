import React, {useState, useEffect} from 'react';
import RecipeList from "./RecipeList.js"
import NewRecipeForm from "./NewRecipeForm"

function Recipes() {
  const [recipesArray, setRecipesArray] = useState([])
  useEffect(()=> {
    fetch()
    .then((r)=> r.json())
    .then((data)=> {
      console.log(data)
      setRecipesArray(data)
    })
  })
 
  return (
    <main>
      <RecipeList recipesArray={recipesArray}/> 
      {/* will need the recipes array from db.json
      will need pull out id and assign it as a key for tracking purposes  */}

      {/* <RecipeCard/> this needs to be imported into RecipeList */}
      {/* will need name, recipe details and notes, use a map then inside 
      that put in <recipe card> to assign those keys to their corresponding html elements  */}
      <NewRecipeForm/>
      {/* this will require a post http, and using state to be able to update this properly
      will need to accept:
      name
      recipeDetails
      notes
      */}
    </main>
   
  );
}

export default Recipes;