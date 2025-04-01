import React from "react";
import "./RentalGrid.scss"
import Rental from "./Rental.jsx";

function RentalGrid() {
  return <div className="grid">
    <Rental/>
    <Rental/>
    <Rental/>
    <Rental/>
    

  </div>;
}

export default RentalGrid;