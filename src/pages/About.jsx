import React from "react";
import "./About.scss";
import Banner from "../components/Banners/Banner";
import Collapse from "../components/Collapse/Collapse";
import { aboutList } from "../aboutList";

function About() {
  return (
    <div className="about">
      <Banner />
      <div className="about__details">
        {aboutList.map((details) => (
          <Collapse
            key={details.title}
            title={details.title}
            content={details.content}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
