import React, { useState } from "react";
import { FaInstagram, FaUtensils, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import "../assets/style/Contact.css";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const regex = {
    name: /^[A-Za-z]+([ '-][A-Za-z]+)*$/, // Letters only
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Email format
    subject: /^.{3,100}$/, // Min 3 chars
    message: /^.{10,500}$/, // Min 10 chars
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      regex.name.test(values.name) &&
      regex.email.test(values.email) &&
      regex.subject.test(values.subject) &&
      regex.message.test(values.message);

    if (!isValid) {
      setError(true);
      setSuccess(false);
      return;
    }
    setError(false);
    setSuccess(true);
    console.log("Form Data:", values);
    setValues({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="main">
      <div className="div1">
        <p className="menu-title">GET IN <span className="highlight">Touch</span></p>
        <p className="p2">
          Got questions or feedback? We'd love to hear from you! Reach out to us
          through the form below or use the provided contact details.
        </p>
      </div>

      <div className="social-icons contact-icon">
        <FaInstagram />
        <FaUtensils />
        <FaWhatsapp />
        <FaFacebookF />
      </div>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          invalid Data!
        </p>
      )}
      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>
          sent successfully!
        </p>
      )}

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="div2">
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="div2">
            <label>Email Address</label>
            <br />
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="div2">
            <label>Subject</label>
            <br />
            <input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              placeholder="Enter subject"
            />
          </div>

          <div className="div4">
            <label>Message</label>
            <br />
            <input
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Write your message"
            />
          </div>

          <div className="div3">
            <button type="submit">Submit Message</button>
          </div>
        </form>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <a href="mailto:contact@contact.com" className="contact-item">
            <p>Send us a email</p>
            <p>contact@contact.com</p>
          </a>

          <a href="tel:+1999999999" className="contact-item">
            <p>Call us</p>
            <p>+199 999 - 9999</p>
          </a>

          <a href="https://maps.google.com" target="_blank" className="contact-item">
            <p>Our location</p>
            <p>View on Maps</p>
          </a>
        </div>
      </div>
    </div>
  );
}
