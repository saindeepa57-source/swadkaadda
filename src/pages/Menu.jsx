import React, { useState } from "react";
import burgerImg from "../components/image/burger.jpg";
import dosaImg from "../components/image/dosa.jpg";
import chillipotatoImg from "../components/image/chillipotato.jpg";
import crspywrapImg from "../components/image/crspywrap.jpg";
import damplingImg from "../components/image/dampling.jpg";
import dhoklaImg from "../components/image/dhokla.jpg";
import icecreamImg from "../components/image/icecream.jpg";
import kajukatliImg from "../components/image/kajukatli.jpg";
import lasaniaImg from "../components/image/lasania.jpg";
import noodlesImg from "../components/image/noodles.jpg";
import oreoshakeImg from "../components/image/oreoshake.jpg";
import paneertikaImg from "../components/image/paneertika.jpg";
import pastaImg from "../components/image/pasta.jpg";
import pizzaImg from "../components/image/pizza.jpg";
import rasmalaiImg from "../components/image/rasmalai.jpg";
import samosaImg from "../components/image/samosa.jpg";
import sandwichImg from "../components/image/sandwich.jpg";
import snacksImg from "../components/image/snacks.jpg";
import springrollsImg from "../components/image/springrolls.jpg";
import tacosImg from "../components/image/tacos.jpg";
import vegstripImg from "../components/image/vegstrip.jpg";

const Menu = () => {
    // ✅ This fixes the "filter is not defined" error
    const [filter, setFilter] = useState("All");

    const menuItems = [
        { name: "Burger,coldrinks,frenchfries(Combo)", price: 200, category: "Meal", image: burgerImg },
        { name: "Dosa", price: 120, category: "Meal", image: dosaImg },
        { name: "Crispywrap", price: 85, category: "Starter", image: crspywrapImg },
        { name: "Chillipotato", price: 100, category: "Starter", image: chillipotatoImg },
        { name: "Dampling", price: 150, category: "Starter", image: damplingImg },
        { name: "Dhokla", price: 90, category: "Starter", image: dhoklaImg },
        { name: "Icecream", price: 160, category: "Dessert", image: icecreamImg },
        { name: "Kajukatli", price: 900, category: "Dessert", image: kajukatliImg },
        { name: "Lasania", price: 300, category: "Meal", image: lasaniaImg },
        { name: "Noodles", price: 150, category: "Meal", image: noodlesImg },
        { name: "Paneertika", price: 200, category: "Starter", image: paneertikaImg },
        { name: "Oreoshake", price: 100, category: "Drinks", image: oreoshakeImg },
        { name: "Pasta", price: 170, category: "Meal", image: pastaImg },
        { name: "Pizza", price: 200, category: "Meal", image: pizzaImg },
        { name: "Rasmalai", price: 500, category: "Dessert", image: rasmalaiImg },
        { name: "Samosa", price: 30, category: "Starter", image: samosaImg },
        { name: "Sandwich", price: 150, category: "Meal", image: sandwichImg },
        { name: "Snacks", price: 70, category: "Starter", image: snacksImg },
        { name: "Springrolls", price: 140, category: "Starter", image: springrollsImg },
        { name: "Tacos", price: 90, category: "Starter", image: tacosImg },
        { name: "Vegstrip", price: 80, category: "Starter", image: vegstripImg },
    ];

    // ✅ Filtering logic
    const filteredItems = menuItems.filter(
        (item) => filter === "All" || item.category.toLowerCase() === filter.toLowerCase()
    );

    return (
        <div style={{ textAlign: "center", marginTop: "20px", padding: "0 12px" }}>
            <h1 style={{ color: "#e63946", fontFamily: "'Jokerman', cursive" }}>🍴 Our Menu</h1>
            <p style={{ color: "#555" }}>Click any item to view or order (demo).</p>

            {/* Category Buttons */}
            <div style={{ marginBottom: "20px" }}>
                {["All", "Meal", "Starter", "Dessert", "Drinks"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        style={{
                            margin: "0 8px",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            border: filter === cat ? "2px solid #e63946" : "1px solid #ccc",
                            background: filter === cat ? "#e63946" : "#fff",
                            color: filter === cat ? "#fff" : "#333",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Menu Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "18px",
                    maxWidth: "1000px",
                    margin: "20px auto",
                }}
            >
                {filteredItems.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: "#fff",
                            borderRadius: "10px",
                            overflow: "hidden",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                            textAlign: "left",
                            transition: "0.3s ease",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: "100%", height: "160px", objectFit: "cover" }}
                        />
                        <div style={{ padding: "10px 12px" }}>
                            <h3 style={{ margin: "4px 0" }}>{item.name}</h3>
                            <p style={{ margin: "0 0 8px", color: "#777" }}>{item.category}</p>
                            <p style={{ margin: 0, fontWeight: "700", color: "#e63946" }}>₹{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
