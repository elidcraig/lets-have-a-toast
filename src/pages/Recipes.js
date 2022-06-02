import React, {useState, useEffect} from 'react';
import RecipeList from "../components/RecipeList.js"
import NewRecipeForm from "../components/NewRecipeForm"

function Recipes() {
  const [recipesArray, setRecipesArray] = useState([])
  useEffect(()=> {
    fetch("http://localhost:3000/recipes")
    .then((r)=> r.json())
    .then((data)=> {
      console.log(data)
      setRecipesArray(data)
    })
  }, [])
 
  return (
    <main>
      <RecipeList recipesArray={recipesArray}/> 

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