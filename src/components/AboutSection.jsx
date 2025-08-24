import React from "react";
import "../assets/style/AboutSection.css";
import aboutImg from "../assets/Images/aboutImg.png"
import { useNavigate } from "react-router-dom";


const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-image">
        <img
          src={aboutImg}
          alt="Girl holding burger"
        />
      </div>

      <div className="about-content">
        <h2 className="menu-title aboutHeader">
          MADE WITH LOVE <span className="highlight">Daily</span>
        </h2>
        <p>
          We believe that great food brings people together. Since day one, our
          mission has been to serve up delicious, fresh, and satisfying meals
          that put a smile on your face.
        </p>
        <p>
          We’re proud to be a fast food destination where convenience meets
          taste, perfect for those who crave something quick without
          compromising on quality.
        </p>
       <button 
          className="about-btn" 
          onClick={() => navigate("/aboutus")}
        >
          ABOUT US <span>↗</span>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
