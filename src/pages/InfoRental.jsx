import React, { useEffect, useState } from "react";
import "./InfoRental.scss";
import { useNavigate, useParams } from "react-router";
import BannerRental from "../components/Banners/BannerRental.jsx"
import ApartmentPage from "../components/Apartment/ApartmentPage.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";

function InfoRental() {
  const { id } = useParams();
  const [actualRental, setActualRental] = useState(null);;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/database.json")
      .then((res) => res.json())
      .then((rentals) => {
        const foundRental = rentals.find((rental) => rental.id === id);
        if (!foundRental) {
          navigate("/404");
        } else {
          setActualRental(foundRental);
        }
      })
      .catch(console.error);
  }, [id, navigate]);

  if (actualRental === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="apartment">
      <BannerRental pictures={actualRental.pictures} />
      <ApartmentPage actualRental={actualRental} />
      <div className="collapse__description">
        <Collapse title="Description" content={actualRental.description} />
        <Collapse title="Équipements" content={actualRental.equipments.map(equipments => <li key={equipments}>{equipments}</li>)} />
      </div>
    </div>

  );
}

export default InfoRental;