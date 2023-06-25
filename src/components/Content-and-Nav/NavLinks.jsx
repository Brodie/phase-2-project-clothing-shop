import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  display: "Flex",
  justifyContent: "Center",
  width: "110px",
  padding: "15px",
  margin: "0 6px 6px",
  background: "brown",
  textDecoration: "none",
  color: "white",
  borderRadius: "10px",
};

function NavLinks() {
  return (
    <div className="nav-bar">
      <NavLink exact to="/tops" style={styles}>
        Tops
      </NavLink>
      <NavLink exact to="/bottoms" style={styles}>
        Bottoms
      </NavLink>
      <NavLink exact to="/accessories" style={styles}>
        Accessories
      </NavLink>
    </div>
  );
}

function HomeLink() {
  return (
    <NavLink exact to="/" style={styles}>
      Home
    </NavLink>
  );
}

export { NavLinks, HomeLink };
