import React from "react";
import "./ApartmentPage.scss";
import Star from "../FontAwesome/Star.jsx";

function ApartmentPage(props) {

  const actualRental = props.actualRental;
  const [firstName, lastName] = actualRental.host.name.split(" ");
  return (
    <div className="apartment__page">
      <div className="apartment__page__title">
        <h1>{actualRental.title}</h1>
        <h2>{actualRental.location}</h2>
        <div className="apartment__page__tags">
          {actualRental.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment__host">
        <div className="apartment__host__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__host__badge">
            <img src={actualRental.host.picture} alt=""></img>
          </div>
        </div>
        <div className="apartment__host__rate">
         <Star rating={actualRental.rating}/>
        </div>
      </div>
    </div>
  )
}

export default ApartmentPage;