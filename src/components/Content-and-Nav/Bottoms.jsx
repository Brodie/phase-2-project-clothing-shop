import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect } from "react";

function Bottoms() {
  useEffect(() => {
    fetch("http://localhost:4000/clothing/")
      .then((r) => r.json())
      .then((data) => console.log(data.bottoms));
  }, []);

  return (
    <>
      <HomeLink />
      <h2>Bottoms</h2>
    </>
  );
}

export default Bottoms;
