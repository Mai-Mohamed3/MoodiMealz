import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/style/CategoriesSection.css";
import breakfast from "../assets/Images/breakfast.png";
import lunch from "../assets/Images/lunch.png";
import dinner from "../assets/Images/dinner.png";
import dessert from "../assets/Images/dessert.png";
import snacks from "../assets/Images/snacks.png";
import emojiImg from "../assets/Images/emoji.svg";

const categories = [
  { name: "Breakfast", image: breakfast, bg: "#ea40f0ff" },
  { name: "Lunch", image: lunch, bg: "#1c6d0aff" },
  { name: "Dinner", image: dinner, bg: "#633030ff" },
  { name: "Snacks", image: snacks, bg: "#1d585cff" },
  { name: "Dessert", image: dessert, bg: "#91130fff" }
];

export default function CategoriesSection() {
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
      card.appendChild(emojiRef.current);
    }
  };

  const hideEmoji = () => {
    if (emojiRef.current) {
      emojiRef.current.classList.remove("show");
    }
  };

  return (
    <section className="categories-section">
      <h2 className="menu-title">
        EXPLORE OUR <span className="highlight">Categories</span>
      </h2>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <Link
            to="/category/:categoryName"
            state={{ category: cat.name }} 
            className="category-card menu-card"
            onMouseMove={handleMouseMove}
            onMouseEnter={showEmoji}
            onMouseLeave={hideEmoji}
            key={index}
            style={{ backgroundColor: cat.bg }}
          >
            <span className="category-label">{cat.name}</span>
            <img src={cat.image} alt={cat.name} />
          </Link>
        ))}
      </div>

      <img src={emojiImg} alt="emoji" className="emoji" ref={emojiRef} />
    </section>
  );
}
