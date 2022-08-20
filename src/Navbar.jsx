import React from "react";
import airbnbLogo from "./images2/airbnb1.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={airbnbLogo} alt="" className="nav-logo" />
    </div>
  );
};

export default Navbar;
