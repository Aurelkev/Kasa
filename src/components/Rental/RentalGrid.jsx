import React, { useEffect, useState } from "react";
import "./RentalGrid.scss"
import Rental from "../Rental/Rental.jsx";


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
      <Rental
        key={rental.id}
        title={rental.title}
        imageUrl={rental.cover}
        id={rental.id}
      />
    ))}
  </div>;

}

export default RentalGrid;