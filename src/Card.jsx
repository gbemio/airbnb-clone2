import React from "react";

import Star from "./images/Star 1.png";

function Card(props) {
  return (
    <div className="card-section">
      <img src={props.img} alt="" />

      <div className="experience1">
        <img src={Star} alt="" className="star1" />
        <p className="rating-1">
          {" "}
          {props.rating}{" "}
          <span className="location1">
            {" "}
            ({props.reviewCount}) . {props.country}
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
