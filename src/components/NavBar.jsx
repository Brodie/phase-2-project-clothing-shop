import React from "react";
import Tops from "./Tops";
import Bottoms from "./Bottoms";
import Accessories from "./Accessories";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Tops />
      <Bottoms />
      <Accessories />
    </nav>
  );
}

export default NavBar;
