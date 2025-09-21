import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/style/CategoriesSection.css";
import breakfast from "../assets/Images/mai.jpg";
import lunch from "../assets/Images/malak.png";
import dinner from "../assets/Images/hesham.jpg";
import snacks from "../assets/Images/abdin.jpg";

const categories = [
  { name: "Mai Mohamed",
    github:"https://github.com/Mai-Mohamed3",
    linkedin:"https://www.linkedin.com/in/mai-mohamed-developer/",
    Gmail:"mai.mo.alii3@gmail.com",
    image: breakfast, 
    bg: "#ea40f0ff"
  },
  { name: "Hesham", 
    github:"https://github.com/hisham811",
    linkedin:"https://www.linkedin.com/in/hisham-mostafa-murad",
    Gmail:"hishammostafam@gmail.com",
    image: dinner, 
    bg: "#1c6d0aff" 
  },
  { name: "Abdin", 
    github:"https://github.com/AbdinAwad",
    linkedin:"https://www.linkedin.com/in/abdin-ali-875869280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    Gmail:"abdinawad42@gmail.com",
    image: snacks, 
    bg: "#633030ff" 
  },
  { name: "Malak", 
    github:"https://github.com/malak200606",
    linkedin:"https://www.linkedin.com/in/malak-mohammad-a8b03b305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    Gmail:"malak.effat11@gmail.com",
    image: lunch, 
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
            className="category-card menu-card team-card"
            key={index}
            style={{ backgroundColor: cat.bg }}
          >
            <span className="category-label ">{cat.name}</span>
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
