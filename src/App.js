import './App.css';
import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero />
      <Card />
    </div>
  )
}

export default App