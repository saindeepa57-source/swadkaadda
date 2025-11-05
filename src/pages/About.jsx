import React from "react";
import oreoshakeImg from "../components/image/oreoshake.jpg";
import pastaImg from "../components/image/pasta.jpg";
import pizzaImg from "../components/image/pizza.jpg";
import chefImg from "../components/image/chef.jpg";

const About = () => {
  const dishes = [
    { name: "Cheesy Pizza", img: pizzaImg },
    { name: "Creamy Pasta", img: pastaImg },
    { name: "Oreo Shake", img: oreoshakeImg }
  ];

  return (
    <div style={{ fontFamily: "Dancing Script", textAlign: "center", padding: "20px" }}>
      {/* Restaurant Story */}
      <h1 style={{ color: "#e63946", marginBottom: "10px" }}>🍽 About Our Restaurant</h1>
      <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.2rem", color: "#555" }}>
        Welcome to <b>My Restaurant</b> – where passion meets flavor!
        We started in 2020 with one simple mission: to serve fresh, hygienic, and
        mouth-watering food that makes every meal a happy memory.
      </p>

      {/* Chef Section */}
      <div style={{ marginTop: "40px" }}>
        <h2 style={{ marginBottom: "10px" }}>👨‍🍳 Meet Our Chef</h2>
        <img
          src={chefImg}
          alt="Chef"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        />
        <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "1rem", color: "#666" }}>
          “Cooking is an art, and every dish should tell a story. I focus on
          using the freshest ingredients and crafting unique flavors that you’ll remember.”
        </p>
      </div>

      {/* Top Dishes */}
      <div style={{ marginTop: "50px" }}>
        <h2>🔥 Our Specialties</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "20px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
                padding: "10px"
              }}
            >
              <img
                src={dish.img}
                alt={dish.name}
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover"
                }}
              />
              <h3 style={{ marginTop: "10px" }}>{dish.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div style={{ marginTop: "50px" }}>
        <h2>💡 Our Values</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
            marginTop: "15px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <div style={{ background: "#ffe5e5", padding: "10px", borderRadius: "8px" }}>🥬 Fresh Ingredients</div>
          <div style={{ background: "#ffe5e5", padding: "10px", borderRadius: "8px" }}>⚡ Fast Delivery</div>
          <div style={{ background: "#ffe5e5", padding: "10px", borderRadius: "8px" }}>💰 Affordable Prices</div>
          <div style={{ background: "#ffe5e5", padding: "10px", borderRadius: "8px" }}>🧼 Hygiene First</div>
        </div>
      </div>
    </div>
  );
};

export default About;
