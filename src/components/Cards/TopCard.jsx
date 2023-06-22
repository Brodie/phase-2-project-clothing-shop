import React from "react";

function TopCard({ top }) {
  return (
    <div>
      <img className="content-image" src={top.image}></img>
    </div>
  );
}

export default TopCard;
