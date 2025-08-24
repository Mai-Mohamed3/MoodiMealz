import React, { useState } from "react";
import "../assets/style/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Martinez",
    role: "College Student",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Food Blogger",
    review:
      "Amazing food and friendly service! A perfect place for casual dining and enjoying delicious meals.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Emma Johnson",
    role: "Chef",
    review:
      "As a chef, I can truly appreciate the flavors and creativity. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 4,
    name: "David Smith",
    role: "Traveler",
    review:
      "One of the best dining experiences I've ever had. The atmosphere and taste are unmatched.",
    img: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials-section">
      <h2 className="menu-title">
        TASTY REVIEWS FROM <span className="highlight">Fans</span>
      </h2>

      <div className="testimonial-card">
        <div className="quote-icon">❝</div>
        <div className="stars">★★★★★</div>
        <p className="review">{testimonials[activeIndex].review}</p>
        <h4 className="name">{testimonials[activeIndex].name}</h4>
        <p className="role">{testimonials[activeIndex].role}</p>
      </div>

      <div className="avatars">
        {testimonials.map((t, index) => (
          <img
            key={t.id}
            src={t.img}
            alt={t.name}
            className={`avatar ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
