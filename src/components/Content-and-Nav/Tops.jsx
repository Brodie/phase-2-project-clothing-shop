import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect } from "react";

function Tops() {
  useEffect(() => {
    fetch("http://localhost:4000/clothing/")
      .then((r) => r.json())
      .then((data) => console.log(data.tops));
  }, []);

  return (
    <>
      <HomeLink />
      <h2>Tops</h2>
    </>
  );
}

export default Tops;
