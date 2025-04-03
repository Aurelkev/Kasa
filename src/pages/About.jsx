import React from "react";
import "./About.scss";
import { Link } from "react-router";

const About = () => {
  return (
      <div className="about">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="home">Retourner sur la page d’accueil</Link>
      </div>
  );
};

export default About;