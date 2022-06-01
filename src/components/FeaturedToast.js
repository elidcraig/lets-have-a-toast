import React, {useState, useEffect} from 'react';

function FeaturedToast() {
  const [featured, setFeatured] = useState({})

  useEffect(() => {
    fetch('http://localhost:4000/recipes/4')
      .then(resp => resp.json())
      .then(recipe => setFeatured(recipe))
  }, [])

  return (
    <div className='featured-toast'>
      <h1>Featured Toast</h1>
      <h3>{featured.name}</h3>
      <img src='' />
      <small>{featured.notes}</small>
      <p>{featured.recipeDetails}</p>
    </div>
  );
}

export default FeaturedToast;