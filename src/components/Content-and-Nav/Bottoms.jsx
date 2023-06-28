import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect } from "react";

function Bottoms() {
  useEffect(() => {
    fetch("https://phase-2-project-backend.onrender.com/bottoms")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <HomeLink />
      <h2>Bottoms</h2>
    </>
  );
}

export default Bottoms;
