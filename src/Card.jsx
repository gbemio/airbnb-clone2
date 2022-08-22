import React from "react";
import star1 from "./images2/Star 1.png";

function Card(props) {
  return (
    <div className="card-section">
      <div className="card--badge">SOLD OUT</div>
      <img src={`../images/${props.img}`} className="card--image" alt="" />

      <div className="experience1">
        <img src={star1} alt="" className="star1" />
        <p className="rating-1">
          {" "}
          {props.rating}{" "}
          <span className="location1">
            {" "}
            ({props.reviewCount}) . {props.location}
          </span>
        </p>
      </div>

      <p className="card-text1">{props.title}</p>
      <p className="price">
        From ${props.price} <span className="price2"> / person</span>
      </p>
    </div>
  );
}

export default Card;
