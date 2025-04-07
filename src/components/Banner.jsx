import React from "react";
import "./Banner.scss";

function Banner({p}) {
  const bannerBackground = {
    backgroundImage: "url(./banner1.jpg)"
  };
  return (
  <div className="banner" style={bannerBackground}>
    <h1>{p}</h1>
  </div >
  );
}

export default Banner;