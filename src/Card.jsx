import React from "react";
import Katie from "./images/katie.png";
import Star from "./images/Star 1.png";

const Card = () => {
  return (
    <div className="card-section">
      <img src={Katie} alt="" />

      <div className="experience1">
        <img src={Star} alt="" className="star1" />
        <p className="rating-1">
          {" "}
          5.0 <span className="location1"> (6) . USA</span>
        </p>
      </div>

      <p className="card-text1">Life lessons with Katie Zaferes</p>
      <p className="price">
        From $136 <span className="price2"> / person</span>
      </p>
    </div>
  );
};

export default Card;
