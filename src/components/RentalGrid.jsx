import React, { useEffect, useState } from "react";
import "./RentalGrid.scss"
import Rental from "./Rental.jsx";


function RentalGrid() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    fetchRentals();
  }, []);


  function fetchRentals() {
    fetch("database.json")
      .then((res) => res.json())
      .then((res) => setRentals(res))
      .catch(console.error);
  }
  return <div className="grid">
    {rentals.map((rental) => (
      <Rental title={rental.title} imageUrl={rental.cover} />
    ))}
  </div>;

}

export default RentalGrid;