import React from "react";
import Banner from "../src/components/Banner";
import RentalGrid from "../src/components/RentalGrid";
import "./App.scss";


function App() {
  return <div>
    <div className="banner-main">
    <Banner p="Chez vous, partout et ailleurs"/>
    </div>
    <RentalGrid/>
  </div>
}

export default App;