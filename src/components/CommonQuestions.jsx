import React, { useState, useRef, useEffect } from "react";
import "../assets/style/CommonQuestions.css";

const CommonQuestions=()=>{
  const commonQuestions=[
  { question: "Can I place an order online??", answer: "Absolutely! You can order directly through our website or mobile app for pickup or delivery. It’s fast, easy, and convenient!" },
  { question: "What are your opening hours?", answer: "We’re open every day from 10:00 AM to 10:00 PM. Whether you’re craving lunch, dinner, or a late-night snack, we’re here to serve you!" },
  { question: "Do you offer vegetarian or vegan options?", answer: "Yes, we do! Our menu includes a variety of vegetarian and vegan-friendly options, such as veggie burgers, fresh salads, and plant-based sides." },
  { question: "Do you accommodate food allergies?", answer: "We take food allergies seriously and are happy to help! Please inform our staff of any allergies when ordering, and we’ll do our best to accommodate your needs." }
];
const [openQuestionIndex,setOpenQuestionIndex]=useState(null);
const contentRefs=useRef([]);
const toggleQuestion=(index)=>{
setOpenQuestionIndex(openQuestionIndex===index?null:index);
  };
useEffect(()=>{
  contentRefs.current.forEach((ref, i)=>{
    if (ref){
    ref.style.maxHeight = openQuestionIndex === i ? ref.scrollHeight + 45 + "px" : "0px";
    }
  });},[openQuestionIndex]);
  return(
  <div className="container">
    <h2 className="menu-title">Common <span className="highlight ">Questions</span></h2>
  <div className="grid">
    {commonQuestions.map((questionItem, index) => (
  <div key={index} className="content-container">
    <button onClick={()=>toggleQuestion(index)} className={`button ${openQuestionIndex===index ? "open":""}`}>
    <span>{questionItem.question}</span>
    <span className="icon">
    {openQuestionIndex===index ? "-" : "+"}
    </span>
    </button>
    <div ref={(el) => (contentRefs.current[index] = el)} className={`content ${openQuestionIndex === index ? "open" : ""}`}>
      {questionItem.answer}
      </div>
    </div>
    ))}
  </div>
  </div>
  );};
export default CommonQuestions;
