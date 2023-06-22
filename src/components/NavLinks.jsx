import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div>
      <NavLink exact to="/tops">
        Tops
      </NavLink>
      <NavLink exact to="/bottoms">
        Bottoms
      </NavLink>
      <NavLink exact to="/accessories">
        Accessories
      </NavLink>
    </div>
  );
}

export default NavLinks;
