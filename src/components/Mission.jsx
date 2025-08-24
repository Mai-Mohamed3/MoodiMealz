import React from "react";
import "../assets/style/AboutSection.css";
import missionimg from "../assets/Images/mission.png"
import { useNavigate } from "react-router-dom";


const Mission = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="menu-title aboutHeader">
          Flavor with <span className="highlight">Purpose</span>
        </h2>
        <p>
          Our mission is simple: to deliver fast, fresh, and flavorful meals that bring joy to every bite. 
          We’re dedicated to creating a dining experience that combines quality ingredients, exceptional taste, 
          and unbeatable convenience.
        </p>
        <p>
          Whether it’s a quick snack or a full meal, we strive to make every moment with us unforgettable.
        </p>
       <button 
          className="about-btn" 
          onClick={() => navigate("/Menu")}
        >
          Our Menu <span>↗</span>
        </button>
      </div>
      <div className="about-image mission">
        <img
          src={missionimg}
          alt="Girl holding burger"
        />
      </div>
    </section>
  );
};

export default Mission;
