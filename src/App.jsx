import React from "react";
import Banner from "./components/Banners/Banner";
import RentalGrid from "../src/components/Rental/RentalGrid";
import "./App.scss";

function App() {
  return (
    <div>
      <div className="banner-main">
        <Banner p="Chez vous, partout et ailleurs" />
      </div>
      <RentalGrid />
    </div>
  );
}

export default App;
