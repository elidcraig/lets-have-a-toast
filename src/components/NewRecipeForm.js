import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './NewRecipeForm.css';
import RecipeCard from './RecipeCard';

function NewRecipeForm({ onAddRecipe }) {
  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeNotes, setRecipeNotes] = useState('');
  const [recipeImage, setRecipeImage] = useState('');

  function resetForm() {
    setRecipeName('')
    setRecipeIngredients('')
    setRecipeNotes('')
    setRecipeImage('')
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: recipeName,
      ingredients: recipeIngredients,
      notes: recipeNotes,
      image: recipeImage,
    };
    fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newRecipe) => {
        resetForm()
        onAddRecipe(newRecipe)
      });
  }

  function handleOnChangeName(e) {
    e.preventDefault();
    console.log(e.target.value);
    setRecipeName(e.target.value);
  }

  function handleOnChangeIngredients(e) {
    e.preventDefault();
    console.log(e.target.value);
    setRecipeIngredients(e.target.value);
  }

  function handleOnNotes(e) {
    e.preventDefault();
    console.log(e.target.value);
    setRecipeNotes(e.target.value);
  }

  function handleOnImage(e) {
    e.preventDefault();
    console.log(e.target.value);
    setRecipeImage(e.target.value);
  }

  return (
    <div className='new-recipe-form'>
      <h1>Add A New Recipe!</h1>
      <form className='new-recipe-form__form' onSubmit={handleSubmit}>
        <input
          onChange={handleOnChangeName}
          value={recipeName}
          type='text'
          name='name'
          placeholder='Recipe name'
        />
        <input
          onChange={handleOnChangeIngredients}
          value={recipeIngredients}
          type='text'
          name='recipe-ingredients'
          placeholder='Recipe ingredients'
        />
        <input
          onChange={handleOnNotes}
          value={recipeNotes}
          type='text'
          name='notes'
          placeholder='Notes'
        />
        <input
          onChange={handleOnImage}
          value={recipeImage}
          type='text'
          name='image'
          placeholder='Image'
        />
        <motion.button
          className='form-button'
          type='submit'
          whileHover={{ scale: 1.1 }}
        >
          Add Recipe
        </motion.button>
      </form>
    </div>
  );
}

export default NewRecipeForm;
