import React from "react";
import "./ApartmentDetails.scss";
import Chevron from "../FontAwesome/Chevron.jsx";
import { useState } from "react";

function ApartmentDetails(props) {
  const [isVisible, setIsVisible] = useState(false);
  const showContent = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="apartment__description__details">
      <p className="apartment__description__title">
        <span>{props.title}</span>
        <Chevron onClick={showContent} className={isVisible ? " " : "up"} />
      </p>
      {isVisible && <p className="apartment__description__content">
        {props.content}
      </p>}
    </div>
  )
}

export default ApartmentDetails;