import React from "react";
import "../../Styles/Card.css"; // Assuming Card.css is in the parent directory of the component

const Card = ({ name, imageSrc, description }) => {
  return (
    <div
      className="flip-card"
      style={{
        width: "350px",
        height: "300px",
        padding: "5px",
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={imageSrc}
            alt={name}
            style={{ width: "100%", height: "100%", borderRadius: "25px" }} // Corrected inline style
          />
        </div>
        <div
          className="flip-card-back"
          style={{ padding: "20px", borderRadius: "25px" }}
        >
          <h1
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            {name}
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                color: "#888",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
