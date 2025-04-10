import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Chevron.scss";

const Chevron = ({onClick, className = ""}) => {
  return <FontAwesomeIcon icon={faChevronDown} className={`chevron ${className}`} onClick={onClick}/>;
};

export default Chevron;