import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../components/image/background.jpg"; // ✅ Import background image

const Home = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", textAlign: "center" }}>
      {/* Hero Section */}
      <div style={{
        background: `url(${bgImage}) center/cover no-repeat`,

        height: "500px",
        color: "white",
        padding: "80px 20px"
      }}>
        <h1 style={{ fontSize: "3.5rem", marginBottom: "10px" }}>🍽 Welcome to My Restaurant</h1>
        <p style={{ fontSize: "2rem", marginBottom: "20px" }}>Delicious Food, Fast Service, Great Price</p>
        <Link to="/menu">
          <button style={{
            background: "#e63946",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1.5rem"
          }}>
            View Menu
          </button>
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <div style={{ marginTop: "40px", padding: "20px" }}>
        <h2>Why Choose Us?</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          <div>✅ Fresh Ingredients</div>
          <div>✅ Fast Delivery</div>
          <div>✅ Affordable Prices</div>
          <div>✅ Hygienic & Tasty</div>
        </div>
      </div>
    </div >
  );
};

export default Home;

