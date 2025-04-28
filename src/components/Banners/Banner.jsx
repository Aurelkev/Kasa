import React from "react";
import "./Banner.scss";

function Banner({ p }) {
  return (
    <div className="banner">
      <h1>{p}</h1>
    </div>
  );
}

export default Banner;
