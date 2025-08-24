import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Images/Frame 1.png";
import img2 from "../assets/Images/Frame 2.png";
import img3 from "../assets/Images/Frame 3.png";
import img4 from "../assets/Images/Frame 5.png";
import img5 from "../assets/Images/Frame 6.png";
import img6 from "../assets/Images/Frame 8.png";
import img7 from "../assets/Images/Frame 10.png";
import img8 from "../assets/Images/Frame 11.png";
import "../assets/style/IntroSection.css";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function IntroSection() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="intro-section">
      <div className="intro-text">
        <h1>
          WHO WE <span>Are</span>
        </h1>
        <p>
          We're passionate about creating delicious, high-quality fast food that brings people together. 
          We believe that fast food should be more than just quick and convenient — it should be a flavorful 
          experience that you look forward to every time.
        </p>
        <button className="about-btn" onClick={handleContactClick}>
          CONTACT US <span>↗</span>
        </button>
      </div>

      <div className="intro-images">
        <div className="hero">
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
        </div>
      </div>
    </section>
  );
}
