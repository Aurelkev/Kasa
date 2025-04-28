import React from "react";
import "./Collapse.scss";
import Chevron from "../FontAwesome/Chevron.jsx";
import { useState } from "react";

function Collapse(props) {
  const [isVisible, setIsVisible] = useState(false);
  const showContent = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="collapse__description__details">
      <p className="collapse__description__title">
        <span>{props.title}</span>
        <Chevron onClick={showContent} className={isVisible ? " " : "up"} />
      </p>
      {isVisible && (
        <p className="collapse__description__content">{props.content}</p>
      )}
    </div>
  );
}

export default Collapse;
