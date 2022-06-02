import React, {useState, useEffect} from 'react';
import './FeaturedToast.css'

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
      <div className='featured-toast__img-wrapper'>
        <img alt='yummy toast' src='https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/cottage-cheese-peach-cinnamon-honey-toast-combinations.jpg?quality=82&strip=all' />
      </div>
      <small>{featured.notes}</small>
      <p>{featured.recipeDetails}</p>
    </div>
  );
}

export default FeaturedToast;