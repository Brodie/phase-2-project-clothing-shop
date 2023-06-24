import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect } from "react";
import { useState } from "react";
import TopCard from "../Cards/TopCard";

function Tops() {
  const [tops, setTops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/tops/")
      .then((r) => r.json())
      .then((data) => setTops(data));
  }, []);

  const topsToDisplay = tops.map((top) => {
    return <TopCard key={top.id} top={top} />;
  });

  return (
    <>
      <HomeLink />
      <h2>Tops</h2>
      <div className="top-card-container">{topsToDisplay}</div>
    </>
  );
}

export default Tops;
