import React from "react";
import "./Banner.scss";

function Banner({ title }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;
