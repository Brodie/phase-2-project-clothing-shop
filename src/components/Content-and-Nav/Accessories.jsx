import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect } from "react";

function Accessories() {
  useEffect(() => {
    fetch("http://localhost:4000/clothing/")
      .then((r) => r.json())
      .then((data) => console.log(data.accessories));
  }, []);

  return (
    <>
      <HomeLink />
      <h2>Accessories</h2>
    </>
  );
}

export default Accessories;
