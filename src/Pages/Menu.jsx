import React from "react";
import AllCategories from "../components/allCategories";
import Testimonials from "../components/Testimonials";
import CommonQuestions from "../components/CommonQuestions";
export default function Menu() {
  return (
    <div>
      <AllCategories/>
      <Testimonials/>
      <CommonQuestions/>
    </div>
  );
}
