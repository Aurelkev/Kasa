import React from "react";
import "./RentalGrid.css"
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