import React from "react";
import "./Banner.scss";

function Banner({ p, backgroundImage }) {
  const bannerBackground = {
    backgroundImage: "url(${backgroundImage}"
  };
  return (
  <div className="banner" style={bannerBackground}>
    <h1>{p}</h1>
  </div >
  );
}

export default Banner;