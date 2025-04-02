import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Star.scss";

const Star = () => {
  return <FontAwesomeIcon icon={faStar} className="star" />;
};

export default Star;