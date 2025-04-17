import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Star.scss";

const Star = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, number) => (
        <FontAwesomeIcon
          key={number}
          icon={faStar}
          className={number < rating ? 'star red' : 'star gray'}
        />
      ))}
    </div>
  );
};

export default Star;