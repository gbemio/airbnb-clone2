import "./App.css";
import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import cardsData from "./cardsData.jsx";

function App() {
  const cardElements = cardsData.map((card) => {
    return (
      <Card
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      {cardElements}
    </div>
  );
}

export default App;
