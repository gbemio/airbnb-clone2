import React from "react";
import star1 from "./images2/Star 1.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-section">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card--image" alt="" />

      <div className="experience1">
        <img src={star1} alt="" className="star1" />
        <p className="rating-1">
          {" "}
          {props.stats.rating}{" "}
          <span className="location1">
            {" "}
            ({props.stats.reviewCount}) . {props.location}
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
