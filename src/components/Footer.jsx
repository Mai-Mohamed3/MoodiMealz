// src/components/Footer.jsx
import React from "react";
import "../assets/style/Footer.css";
import { FaInstagram, FaXTwitter, FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
            <div className="logo">
            <a href="/">Moodi<span>Mealz</span></a>
            </div>
          <p>Savor Every Delicious Bite</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>PAGES:</h4>
            <ul>
              <li><a href=""> HOME </a></li>
              <li><a href=""> ABOUT</a></li>
              <li><a href=""> CONTACT</a></li>
              <li><a href=""> BLOG</a></li>
            </ul>
          </div>
          <div>
            <h4>MENU:</h4>
            <ul>
              <li><a href=""> DESSERTS</a></li>
              <li><a href=""> SIDES</a></li>
              <li><a href=""> BURGERS</a></li>
              <li><a href=""> CATEGORIES</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>CREATED BY <span>THE SEMICOLON ;</span></p>
        <div className="bottom-links">
          <a href="#">STYLE GUIDE</a>
          <a href="#">LICENSES</a>
          <a href="#">CHANGELOG</a>
        </div>
      </div>
    </footer>
  );
}
