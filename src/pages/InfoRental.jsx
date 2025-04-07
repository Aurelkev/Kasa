import React, { useEffect, useState } from "react";
import "./InfoRental.scss";
import Star from "../components/Star.jsx";
import Chevron from "../components/Chevron.jsx";
import { useLocation } from "react-router";
import BannerRental from "../components/BannerRental.jsx"

function InfoRental() {
  const location = useLocation();
  const [actualRental, setActualRental] = useState({});
  useEffect(fetchRentalInfo, []);

  function fetchRentalInfo() {
    fetch("database.json")
      .then((res) => res.json())
      .then((rentals) => {
        const actualRental = rentals.find(rental => rental.id === location.state.id);
        setActualRental(actualRental);
      })
      .catch(console.error);
  }

  return (
    <div className="apartment">
      <BannerRental imageUrl={actualRental.cover}/>
      <div className="apartment__page">
        <div className="apartment__page__title">
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <h2>Paris, Île-de-France</h2>
          <div className="apartment__page__tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="apartment__host">
          <div className="apartment__host__details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="apartment__host__badge"></div>
          </div>
          <div className="apartment__host__rate">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
      <div className="apartment__description">
        <div className="apartment__description__details">
          <p className="apartment__description__title">
            <span>Description</span>
            <Chevron />
          </p>
          <p className="apartment__description__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce malesuada bibendum metus, vitae facilisis ipsum vehicula et.
            Aliquam ac convallis felis, et egestas tortor. In ornare leo ut semper eleifend.
            Praesent sed interdum lectus, sit amet faucibus ipsum. Vivamus vehicula vulputate lacinia.
            Mauris vitae vulputate est. Nullam felis orci, lobortis.
          </p>
        </div>
        <div className="apartment__description__details">
          <p className="apartment__description__title">
            <span>Équipements</span>
            <Chevron />
          </p>
          <p className="apartment__description__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada bibendum metus,
            vitae facilisis ipsum vehicula et. Aliquam ac convallis felis, et egestas tortor.
            In ornare leo ut semper eleifend. Praesent sed interdum lectus, sit amet faucibus ipsum.
            Vivamus vehicula vulputate lacinia. Mauris vitae vulputate est. Nullam felis orci, lobortis.
          </p>
        </div>
      </div>
    </div>

  );
}

export default InfoRental;