import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./components/Main";
import Banner from "./components/Banner";
import LocationGrid from "./components/LocationGrid";

function App() {
  return <div>
    <Navbar />
    <Main>
      <Banner />
      <LocationGrid />
    </Main>
  </div>
}

export default App;