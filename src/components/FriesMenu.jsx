import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fries from "../assets/Images/lunch.png";
import happy from "../assets/Images/happy.png";
import sad from "../assets/Images/sad.png";
import confused from "../assets/Images/confused.png";
import depressed from "../assets/Images/depressed1.png";
import "../assets/style/FriesMenu.css";

export default function FriesMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSelectMood = (mood) => {
    setShowMenu(false);
    navigate(`/mood/${mood}`);
  };

  return (
    <>
      <button className="fries-btn" onClick={() => setShowMenu(!showMenu)}>
        <img src={fries} alt="Fries" /> click me
      </button>

      <div className={`emoji-menu ${showMenu ? "show" : ""}`}>
        <div>
          <h2 className="menu-title emojititle">
            Savor the <span className="highlight emojihighlight">flavor </span>
            that matches your <span className="highlight emojihighlight">mood </span>
            because every <span className="highlight emojihighlight">feeling</span> deserves its
            <span className="highlight emojihighlight"> perfect </span>bite.
          </h2>
        </div>
        <div className="card-container">
          <div id="happy" className="emoji-card happy" onClick={() => handleSelectMood("happy")}>
            <img src={happy} alt="Happy" />
          </div>
          <div id="sad" className="emoji-card sad" onClick={() => handleSelectMood("sad")}>
            <img src={sad} alt="Sad" />
          </div>
          <div id="confused" className="emoji-card confused" onClick={() => handleSelectMood("confused")}>
            <img src={confused} alt="Confused" />
          </div>
          <div id="depressed" className="emoji-card depressed" onClick={() => handleSelectMood("depressed")}>
            <img src={depressed} alt="Depressed" />
          </div>
        </div>
        <button className="close-menu-btn" onClick={() => setShowMenu(false)}>
          Back to Tasty Choices
        </button>
      </div>
    </>
  );
}
