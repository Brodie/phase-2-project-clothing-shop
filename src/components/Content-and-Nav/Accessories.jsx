import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect } from "react";

function Accessories() {
  useEffect(() => {
    fetch("https://phase-2-project-backend.onrender.com/accessories")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <HomeLink />
      <h2>Accessories</h2>
    </>
  );
}

export default Accessories;
