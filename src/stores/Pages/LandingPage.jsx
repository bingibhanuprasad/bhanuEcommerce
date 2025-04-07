import React from "react";
import Navbar from "../Components/Navbar";
import Products from "../Components/products";
import "./LandingPage.css"; // Import the new CSS file
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
    <div className="landing-container">
      <Navbar />
      <div className="products-container">
        <Products />
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;
