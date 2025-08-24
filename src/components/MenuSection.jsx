import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/MenuSection.css";
import emojiImg from "../assets/Images/emoji.svg";

const categories = ["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"];

const MenuSection = () => {
  const [recipes, setRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => console.error(err));
  }, []);

  const filteredRecipes = recipes
    .filter(
      (recipe) =>
        recipe.mealType &&
        recipe.mealType.some(
          (type) => type.toLowerCase() === activeCategory.toLowerCase()
        )
    )
    .slice(0, 6);

  return (
    <section className="menu-section">
      <h2 className="menu-title">
        Our Tasty <span className="highlight">Menu</span>
      </h2>
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredRecipes.map((recipe) => (
          <MenuCard
            key={recipe.id}
            id={recipe.id}
            img={recipe.image}
            price={recipe.price || "9.99"}
          />
        ))}
      </div>
    </section>
  );
};

const MenuCard = ({ img, price, id }) => {
  const navigate = useNavigate();
  const emojiRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame;
    const animate = () => {
      pos.current.x += (targetPos.current.x - pos.current.x) * 0.1;
      pos.current.y += (targetPos.current.y - pos.current.y) * 0.1;

      if (emojiRef.current) {
        emojiRef.current.style.left = `${pos.current.x}px`;
        emojiRef.current.style.top = `${pos.current.y}px`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    targetPos.current.x = e.clientX - rect.left;
    targetPos.current.y = e.clientY - rect.top;
  };

  const showEmoji = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    pos.current.x = rect.width / 2;
    pos.current.y = rect.height / 2;
    targetPos.current.x = rect.width / 2;
    targetPos.current.y = rect.height / 2;
    if (emojiRef.current) {
      emojiRef.current.classList.add("show");
    }
  };

  const hideEmoji = () => {
    if (emojiRef.current) {
      emojiRef.current.classList.remove("show");
    }
  };

  const handleClick = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div
      className="menu-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={showEmoji}
      onMouseLeave={hideEmoji}
    >
      <div className="price-tag">${price}</div>
      <img
        src={img}
        alt="menu"
        className="menu-img"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
      <img src={emojiImg} alt="emoji" className="emoji" ref={emojiRef} />
    </div>
  );
};

export default MenuSection;
