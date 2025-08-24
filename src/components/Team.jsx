import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/style/CategoriesSection.css";
import breakfast from "../assets/Images/breakfast.png";
import lunch from "../assets/Images/lunch.png";
import dinner from "../assets/Images/dinner.png";
import snacks from "../assets/Images/snacks.png";

const categories = [
  { name: "Mai Mohamed",
    github:"",
    linkedin:"",
    Gmail:"",
    image: breakfast, 
    bg: "#ea40f0ff"
  },
  { name: "Abdin", 
    github:"",
    linkedin:"",
    Gmail:"",
    image: lunch, 
    bg: "#1c6d0aff" 
  },
  { name: "Hesham", 
    github:"",
    linkedin:"",
    Gmail:"",
    image: dinner, 
    bg: "#633030ff" 
  },
  { name: "Malak", 
    github:"",
    linkedin:"",
    Gmail:"",
    image: snacks, 
    bg: "#1d585cff" 
  },
];

export default function Team() {
  return (
    <section className="categories-section">
      <h2 className="menu-title">
        The People Behind the <span className="highlight">Website</span>
      </h2>

      <div className="categories-grid team-grid">
        {categories.map((cat, index) => (
          <div
            className="category-card menu-card "
            key={index}
            style={{ backgroundColor: cat.bg }}
          >
            <span className="category-label">{cat.name}</span>
            <img src={cat.image} alt={cat.name} />

            {/* الـ Overlay */}
            <div className="overlay-content">
              <h3>{cat.name}</h3>
              <div className="social-links">
                <a href={cat.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={cat.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={`mailto:${cat.Gmail}`}>
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
              <p className="role">React Frontend Developer</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
