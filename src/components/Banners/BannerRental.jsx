import React, { useState } from "react";
import "./BannerRental.scss";
import "../../components/Carousel.scss";
import Chevron from "../FontAwesome/Chevron.jsx";

function BannerRental({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <button className="prev" onClick={prevSlide}><Chevron className="left" /></button>
      )}

      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {pictures.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}

      {pictures.length > 1 && (
        <button className="next" onClick={nextSlide}><Chevron className="right" /></button>
      )}

    </div>
  );
}

export default BannerRental;
