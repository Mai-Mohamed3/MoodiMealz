import React from "react";
import { useParams } from "react-router-dom";
import recipesData from "../Api/mockRecipes.json"; 
import "../assets/style/MoodRecipes.css";
import { useCart } from "./CartContext";

export default function MoodRecipes() {
  const { mood } = useParams();
  const { addToCart } = useCart();

  const filteredRecipes = recipesData.recipes.filter(recipe =>
    recipe.tags.includes(mood)
  );

  const moodColors = {
    happy: ["#FFF59D", "#7E57C2", "#90A4AE", "#64B5F6", "#83770cff"], 
    sad: ["#90CAF9", "#2cc027ff", "#42A5F5", "#880f82ff", "#0b3a63ff"], 
    confused: ["#e0be27ff", "#2a0961ff", "#57c280ff", "#b73a79ff", "#35b135ff"], 
    depressed: ["#B0BEC5", "#ae9c90ff", "#064a6bff", "#7b0ac7ff", "#6b2125ff"] 
  };

  const colorsForMood = moodColors[mood] || ["#E0E0E0"]; 

  return (
    <div className="categories-section">
      <h2 className="menu-title moodtitle">
        To boost your <span className="highlight moodspan">mood</span>, enjoy one of these <span className="highlight moodspan">delightful meals</span>:
      </h2>

      {filteredRecipes.length > 0 ? (
        <div className="categories-grid">
          {filteredRecipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="category-card menu-card"
              style={{ backgroundColor: colorsForMood[index % colorsForMood.length] }}
            >
              <div className="image-container">
                <img src={recipe.image} alt={recipe.name} className="menu-img" />
                <div className="overlay2">
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                  <button className="button" onClick={() => addToCart(recipe)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No recipes found for this mood.</p>
      )}
    </div>
  );
}
