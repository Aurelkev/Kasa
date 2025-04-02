import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Chevron.scss";

const Chevron = () => {
  return <FontAwesomeIcon icon={faChevronDown} className="chevron" />;
};

export default Chevron;