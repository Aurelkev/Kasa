import React from "react";
import { Link } from "react-router";
import "./Rental.css";

function Rental() {
  return <Link to="/info-rental"><div className="rental">
    
      <h2 className="rental__title">Titre de la location</h2>
    
  </div></Link>
}

export default Rental;