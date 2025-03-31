import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./components/Main";
import Banner from "./components/Banner";
import RentalGrid from "./components/RentalGrid";
import Footer from "./components/Footer";

function App() {
  return <div>
    <Navbar />
    <Main>
      <Banner />
      <RentalGrid />
    </Main>
    <Footer/>
  </div>
}

export default App;