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
        key={card.id}
        // card={card}
        {...card}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list"> {cardElements}</section>
    </div>
  );
}

export default App;
