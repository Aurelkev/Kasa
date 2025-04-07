import React from "react";
import { Link } from "react-router";
import "./Rental.scss";

function Rental(props) {
  return <Link to="/info-rental">
    <div className="rental">
      <img src={props.imageUrl} alt="" />
      <h2 className="rental__title">{props.title}</h2>
    </div>
  </Link>
}

export default Rental;