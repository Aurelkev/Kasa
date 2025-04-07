import React from "react";
import "./ApartmentDetails.scss";
import Chevron from "../components/Chevron.jsx";


function ApartmentDetails(props) {
  return (
    <div className="apartment__description__details">
          <p className="apartment__description__title">
            <span>{props.title}</span>
            <Chevron />
          </p>
          <p className="apartment__description__content">
            {props.content}
          </p>
        </div>
  )
}

export default ApartmentDetails;