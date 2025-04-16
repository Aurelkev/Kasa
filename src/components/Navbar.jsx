import React from "react";
import { NavLink } from "react-router";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about"> A propos</NavLink>
    </nav>
  );
}

export default Navbar;