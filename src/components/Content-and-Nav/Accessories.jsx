import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect, useState } from "react";
import TopCard from "../Cards/TopCard";
import AccessoryCard from "../Cards/AccessoryCard";

function Accessories() {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("https://phase-2-project-backend.onrender.com/accessories")
      .then((r) => r.json())
      .then((data) => setAccessories(data));
  }, []);

  const displayAccessories = accessories.map((item) => {
    return <AccessoryCard id={item.id} accessory={item} typeOf="accessories" />;
  });

  return (
    <>
      <HomeLink />
      <h2>Accessories</h2>
      <div className="accessories-container">{displayAccessories}</div>
    </>
  );
}

export default Accessories;
