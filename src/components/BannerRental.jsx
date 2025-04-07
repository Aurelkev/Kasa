import React from "react";
import "./BannerRental.scss";

function BannerRental(props) {
  return (
    <div>
      <img src={props.imageUrl} alt="" />
    </div>
  );
}

export default BannerRental;