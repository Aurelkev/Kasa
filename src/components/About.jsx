import React from "react";
import Navbar from "./Navbar";
import "./About.css";
import Main from "./Main";
import Banner from "./Banner";
import RentalGrid from "./RentalGrid";
import Footer from "./Footer";

function About() {
  return <div>
    <Navbar />
    <Main>
      <Banner />
      <RentalGrid />
    </Main>
    <Footer/>
  </div>
}

export default About;