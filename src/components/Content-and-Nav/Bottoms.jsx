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
      <h2 className="tops-header">
        <HomeLink />
        <span
          style={{
            backgroundColor: "antiquewhite",
            padding: "4px",
            border: "2px solid brown",
            width: "140px",
            marginLeft: "10px",
          }}
        >
          Bottoms
        </span>
      </h2>
      <div className="content-container">{bottomsToDisplay}</div>
    </>
  );
}

export default Bottoms;
