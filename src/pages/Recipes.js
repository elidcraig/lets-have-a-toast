import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import RecipeList from "../components/RecipeList.js"
import NewRecipeForm from "../components/NewRecipeForm"

function Recipes() {
  const [recipesArray, setRecipesArray] = useState([])
  useEffect(()=> {
    fetch("http://localhost:3000/recipes")
    .then((r)=> r.json())
    .then((data)=> {
      setRecipesArray(data)
    })
  }, [])

  function handleAddRecipe(newRecipe) {
    setRecipesArray([...recipesArray, newRecipe])
  }
  
  function handleDeleteRecipe(deletedRecipe) {
    const filteredArray = recipesArray.filter((recipe) => recipe.id !== deletedRecipe);
    setRecipesArray(filteredArray)
  }
 
  return (
    <div>
      <NavBar />
      <main>

      <NewRecipeForm onAddRecipe={handleAddRecipe}/>
      <RecipeList recipesArray={recipesArray} onDeleteRecipe={handleDeleteRecipe}/> 

      </main>
    </div>
  );
}

export default Recipes;