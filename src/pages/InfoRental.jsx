import React, { useEffect, useState } from "react";
import "./InfoRental.scss";
import { useLocation } from "react-router";
import BannerRental from "../components/BannerRental.jsx"
import ApartmentPage from "../components/ApartmentPage.jsx";
import ApartmentDetails from "../components/ApartmentDetails.jsx";

function InfoRental() {
  const location = useLocation();
  const [actualRental, setActualRental] = useState(null);
  useEffect(fetchRentalInfo, []);

  function fetchRentalInfo() {
    fetch("database.json")
      .then((res) => res.json())
      .then((rentals) => {
        const actualRental = rentals.find((rental) => rental.id === location.state.id);
        setActualRental(actualRental);
      })
      .catch(console.error);
  }
if (actualRental == null) return <div>loading</div>
  return (
    <div className="apartment">
      <BannerRental imageUrl={actualRental.cover}/>
      <ApartmentPage actualRental={actualRental} />
      <div className="apartment__description">
        <ApartmentDetails title="Description" content={actualRental.description}/>
        <ApartmentDetails title="Équipements" content={actualRental.equipments}/>
      </div>
    </div>

  );
}

export default InfoRental;