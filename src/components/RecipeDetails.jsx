import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/style/RecipeDetails.css";
import { useCart } from "./CartContext";
import RandomRecipies from "./RandomRecipes";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <>
      <div className="recipe-details-container">
        <div className="recipe-image-sticky">
          <img src={recipe.image} alt={recipe.name} />
        </div>
        <div className="recipe-info">
          <h1>{recipe.name}</h1>
          <div className="details">
            <div className="price">
              <p>9.50$</p>
            </div>
            <p>Rating: {recipe.rating}</p>
          </div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <button className="button" onClick={() => addToCart(recipe)}>Add to Cart</button>
        </div>
      </div>
      <RandomRecipies />
    </>
  );
}
