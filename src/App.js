import "./App.css";
import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Katie from "./images/katie.png";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        img={Katie}
        rating="5.0"
        reviewCount="6"
        country="India"
        title="Life lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}

export default App;
