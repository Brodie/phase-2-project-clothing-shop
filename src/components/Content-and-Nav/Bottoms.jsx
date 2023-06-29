import React from "react";
import { HomeLink } from "./NavLinks";
import { useEffect, useState } from "react";
import TopCard from "../Cards/TopCard";

function Bottoms() {
  const [bottoms, setBottoms] = useState([]);

  useEffect(() => {
    fetch("https://phase-2-project-backend.onrender.com/bottoms")
      .then((r) => r.json())
      .then((data) => setBottoms(data));
  }, []);

  const bottomsToDisplay = bottoms.map((bottom) => {
    return <TopCard key={bottom.id} top={bottom} typeOf="bottoms" />;
  });

  return (
    <>
      <HomeLink />
      <h2>Bottoms</h2>
      <div className="bottoms-container">{bottomsToDisplay}</div>
    </>
  );
}

export default Bottoms;
