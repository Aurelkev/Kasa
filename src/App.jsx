import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Main from "./components/Main";
import Banner from "./components/Banner";
import RentalGrid from "./components/RentalGrid";

function App() {
  return <div>
    <Navbar />
    <Main>
      <Banner />
      <RentalGrid />
    </Main>
  </div>
}

export default App;