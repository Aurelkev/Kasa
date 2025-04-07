import React from "react";
import "./ApartmentDetails.scss";
import Chevron from "../components/Chevron.jsx";


function ApartmentDetails() {
  return (
    <div className="apartment__description__details">
          <p className="apartment__description__title">
            <span>Description</span>
            <Chevron />
          </p>
          <p className="apartment__description__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce malesuada bibendum metus, vitae facilisis ipsum vehicula et.
            Aliquam ac convallis felis, et egestas tortor. In ornare leo ut semper eleifend.
            Praesent sed interdum lectus, sit amet faucibus ipsum. Vivamus vehicula vulputate lacinia.
            Mauris vitae vulputate est. Nullam felis orci, lobortis.
          </p>
        </div>
  )
}

export default ApartmentDetails;