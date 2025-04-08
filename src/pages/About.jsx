import React from "react";
import "./About.scss";
import Banner from "../components/Banner";
import ApartmentDetails from "../components/ApartmentDetails";


function About(props) {
  return (
    <div className="about">
      <Banner p="" backgroundImage="../banner2.jpg" />
      <div className="about__details">
        <ApartmentDetails title="Fiabilité" />
        <ApartmentDetails title="Respect" />
        <ApartmentDetails title="Service" />
        <ApartmentDetails title="Fiabilité" />
      </div>
    </div>
  );
};

export default About;