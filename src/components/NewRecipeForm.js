import React, {useState} from 'react';

function NewRecipeForm({onAddRecipe}) {
  const [recipeName, setRecipeName] = useState("")
  const [recipeDetails, setRecipeDetails] = useState("")
  const [recipeNotes, setRecipeNotes] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: recipeName,
      recipeDetails: recipeDetails,
      notes: recipeNotes
    }
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then((r)=> r.json())
    .then((newRecipe)=> onAddRecipe(newRecipe))
  }

  function handleOnChangeName(e) {
    e.preventDefault()
    console.log(e.target.value)
    setRecipeName(e.target.value)
  }

  function handleOnChangeDetails(e) {
    e.preventDefault()
    console.log(e.target.value)
    setRecipeDetails(e.target.value)
  }

  function handleOnNotes(e) {
    e.preventDefault()
    console.log(e.target.value)
    setRecipeNotes(e.target.value)
  }

  

  return (
    <div className="new-recipe-form">
      <h2>New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleOnChangeName}type="text" name="name" placeholder="Recipe name" />
        <input onChange={handleOnChangeDetails} type="text" name="recipe details" placeholder="recipe details" />
        <input onChange={handleOnNotes} type="text" name="notes" placeholder="notes" />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  )
}

export default NewRecipeForm;