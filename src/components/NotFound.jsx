import React from "react";
import { Link } from "react-router";
import "./NotFound.css";


function NotFound() {
  return (
    <div>
      <h1>404 - Oups ! Cette page n'existe pas 😢</h1>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;