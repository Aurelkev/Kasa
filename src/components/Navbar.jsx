import React from "react";
import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo.png" alt="logo" />
      </div>
      <Link to="/">Accueil</Link>
      <Link to="/about"> A propos</Link>
    </nav>
  );
}

export default Navbar;