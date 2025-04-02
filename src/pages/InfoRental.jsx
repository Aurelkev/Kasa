import React from "react";
import "./InfoRental.scss";


function InfoRental() {
  return (
    <div className="apartment">
      <div>
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
      </div>
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
          <h3>Alexandre Dumas</h3>
          <div className="apartment__host__rate"></div>
        </div>
      </div>
      <div className="apartment__description">
        <p></p>
      </div>
      <div className="apartment__description">
        <p></p>
      </div>
    </div>

  );
}

export default InfoRental;