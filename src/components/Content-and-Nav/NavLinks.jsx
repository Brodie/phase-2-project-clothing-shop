import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="nav-bar">
      <NavLink exact to="/tops" className="nav-button">
        Tops
      </NavLink>
      <NavLink exact to="/bottoms" className="nav-button">
        Bottoms
      </NavLink>
      <NavLink exact to="/accessories" className="nav-button">
        Accessories
      </NavLink>
    </div>
  );
}

function HomeLink() {
  return (
    <NavLink exact to="/" className="nav-button">
      Home
    </NavLink>
  );
}

export { NavLinks, HomeLink };
