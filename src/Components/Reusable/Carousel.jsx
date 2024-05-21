import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Carousel.scss";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "images/tractor.jpg",
    "images/innovation.jpg",
    "images/animal-food.jpg",
    "images/wheatfarm.jpg",
  ];
  const texts = [
    "LATEST MACHINERY",
    "AGRICULTURE INNOVATION",
    "ANIMAL FORAGE",
    "BEST HARVEST WHEAT STRAW",
  ];
  const links = [
    "/latest-machinery",
    "/agriculture-innovation",
    "/animal-forage",
    "/wheat-straw",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
          <div className="carousel-text text-8xl font-extrabold text-white">
            {texts[index]}
          </div>
          <Link to={links[index]} className="carousel-link">
            Learn More
          </Link>
        </div>
      ))}
      <div className="carousel-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              index === currentIndex
                ? "active transition-all duration-300 ease-in-out"
                : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
