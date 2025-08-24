import React from "react";
import "../assets/style/Hero.css";

import img1 from "../assets/Images/Frame 1.png";
import img2 from "../assets/Images/Frame 2.png";
import img3 from "../assets/Images/Frame 3.png";
import img4 from "../assets/Images/Frame 5.png";
import img5 from "../assets/Images/Frame 6.png";
import img6 from "../assets/Images/Frame 8.png";
import img7 from "../assets/Images/Frame 10.png";
import img8 from "../assets/Images/Frame 11.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        SAVOR EVERY DELICIOUS <span>Bite</span>
      </h1>

      <div className="carousel">
        <div className="carousel__container">
          {images.map((img, index) => (
            <div
              key={index}
              className="carousel__item"
              style={{
                "--rotation": `${(360 / images.length) * index}deg`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <img src={img} alt={`img-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
