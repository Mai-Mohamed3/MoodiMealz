import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaInstagram, FaUtensils, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { useCart } from "./CartContext";
import topBun from "../assets/Images/burger-top.svg";
import patty from "../assets/Images/burger-middle.svg";
import bottomBun from "../assets/Images/burger-bottom.svg";
import "../assets/style/Navbar.css";
import "../assets/style/Cart.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Moodi<span>Mealz</span></a>
        </div>
        <div className="nav-right">
          <div className="cart-container">
            <FaShoppingCart className="icon" onClick={() => setShowCart(!showCart)} />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
          <button
            className={`menu-btn ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
          >
            MENU
            <div className="burger-icon">
              <img src={topBun} alt="top bun" className="top-bun" />
              <img src={patty} alt="patty" className="patty" />
              <img src={bottomBun} alt="bottom bun" className="bottom-bun" />
            </div>
          </button>
        </div>
      </nav>

      {/* قائمة المنيو */}
      <div className={`menu-overlay ${active ? "show" : ""}`}>
        <ul className="menu-links">
          <li><Link to="/" onClick={() => setActive(false)}>HOME</Link></li>
          <li className="list-dash"> | </li>
          <li><Link to="/menu" onClick={() => setActive(false)}>MENU</Link></li>
          <li className="list-dash"> | </li>
          <li><Link to="/contact" onClick={() => setActive(false)}>CONTACT</Link></li>
          <li className="list-dash"> | </li>
          <li><Link to="/profile" onClick={() => setActive(false)}>PROFILE</Link></li>
        </ul>

        <div className="social-icons">
          <FaInstagram />
          <FaUtensils />
          <FaWhatsapp />
          <FaFacebookF />
        </div>
      </div>

      {/* الكارت */}
      {showCart && (
  <div className="cart-overlay">
    <div className="cart-box">
      <div className="cart-header">
        <h2>YOUR <span className="highlight">CART</span></h2>
        <button onClick={() => setShowCart(false)}>✖</button>
      </div>
      {cart.length === 0 ? (
        <p className="emptyCard">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)} USD</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h4>Subtotal: ${totalPrice.toFixed(2)} USD</h4>
          </div>
          <button className="checkout-btn">CONTINUE TO CHECKOUT</button>
        </>
      )}
    </div>
  </div>
)}

    </>
  );
};

export default Navbar;
