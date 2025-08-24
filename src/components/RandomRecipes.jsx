import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/RandomRecipes.css';

export default function RandomRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        const shuffled = [...data.recipes].sort(() => Math.random() - 0.5);
        setRecipes(shuffled.slice(0, 3));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="random-recipes">
      <h1>
        YOU MIGHT ALSO<span className='highlight'>Like</span>
      </h1>
      <div className="cards-container">
        {recipes.map(recipe => (
          <div className="card" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="card-image-wrapper">
              <img src={recipe.image} alt={recipe.name} />
            </Link>
            <div className="card-title">{recipe.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
