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


/* Sans FontAwesomeIcon */
/* import React from "react";
import "./Star.scss";

const Star = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, number) => (
        <i
          key={number}
          className={`fa-solid fa-star star ${number < rating ? "red" : "gray"}`}
        ></i>
      ))}
    </div>
  );
};

export default Star; */