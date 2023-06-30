import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect } from "react";
import { useState } from "react";
import TopCard from "../Cards/TopCard";

function Tops() {
  const [tops, setTops] = useState([]);

  useEffect(() => {
    fetch("https://phase-2-project-backend.onrender.com/tops")
      .then((r) => r.json())
      .then((data) => setTops(data));
  }, []);

  const topsToDisplay = tops.map((top) => {
    return <TopCard key={top.id} top={top} typeOf="tops" />;
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
            width: "80px",
            marginLeft: "10px",
          }}
        >
          Tops
        </span>
      </h2>
      <div className="top-card-container">{topsToDisplay}</div>
    </>
  );
}

export default Tops;
