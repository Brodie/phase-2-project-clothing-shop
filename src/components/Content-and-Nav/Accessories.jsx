import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect, useState } from "react";
import AccessoryCard from "../Cards/AccessoryCard";

function Accessories() {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetch("https://phase-2-project-backend.onrender.com/accessories")
      .then((r) => r.json())
      .then((data) => setAccessories(data));
  }, []);

  const displayAccessories = accessories.map((item) => {
    return (
      <AccessoryCard key={item.id} accessory={item} typeOf="accessories" />
    );
  });

  return (
    <>
      <h2 className="tops-header">
        <HomeLink />
        <span
          style={{
            backgroundColor: "antiquewhite",
            padding: "4px",
            border: "2px solid brown",
            width: "180px",
            marginLeft: "10px",
          }}
        >
          Accessories
        </span>
      </h2>
      <div className="content-container">{displayAccessories}</div>
    </>
  );
}

export default Accessories;
