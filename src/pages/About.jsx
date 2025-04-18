import React from "react";
import "./About.scss";
import Banner from "../components/Banners/Banner";
import ApartmentDetails from "../components/Apartment/ApartmentDetails";
import { aboutList } from '../aboutList'; 

function About() {
  return (
    <div className="about">
      <Banner p=""/>
      <div className="about__details">
        {aboutList.map((details) => (
        <ApartmentDetails key={details.title} title={details.title} content={details.content} />
      ))}
      </div>
    </div>
  );
};

export default About;