

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        {/* Brand Name */}
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">

            <h1 style={{ fontFamily: "Jokerman, cursive", fontWeight: 200, fontSize: "2.5rem", color: "white", marginTop: 0 }}> 🍽 Swad का Adda</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
