import React from "react";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import Testimonials from "../components/Testimonials";
import AboutSection from "../components/AboutSection";
import CategoriesSection from "../components/CategoriesSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <MenuSection/>
      <Testimonials/>
      <AboutSection/>
      <CategoriesSection/>
    </div>
  );
}
