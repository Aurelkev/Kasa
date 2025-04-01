import React from "react";
import Navbar from "./Navbar";
import "./ErrorPage.scss";
import Footer from "./Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="error">
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="home">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;