import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import FriesMenu from "./components/FriesMenu";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/aboutUs";
import Testimonials from "./components/Testimonials";
import CategoriesSection from "./components/CategoriesSection";
import MoodRecipes from "./components/MoodRecipes";
import { CartProvider } from "./components/CartContext";
import RecipeDetails from "./components/RecipeDetails";
import Menu from "./Pages/Menu";
import CommonQuestions from "./components/CommonQuestions";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop/>
        <Navbar/>
        <FriesMenu />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/category/:categoryName" element={<Menu />} />
          <Route
            path="/mood/:mood"
            element={
              <>
                <MoodRecipes />
                <Testimonials/>
                <CategoriesSection/>
                <CommonQuestions/>
              </>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <>
                <RecipeDetails />
                <Testimonials/>
                <CategoriesSection/>
              </>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/contact"
            element={
              <>
                <Contact/>
                <Testimonials/>
                <CommonQuestions/>
              </>
            }
          />
        </Routes>

        <BackToTopButton/>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
