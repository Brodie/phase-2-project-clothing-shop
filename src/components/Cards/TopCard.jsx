import React from "react";
import { useState } from "react";
import BuyModal from "../Content-and-Nav/BuyModal";

function TopCard({ top }) {
  const { image, description, price, info, sizes } = top;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="top-card">
      <img className="content-image" src={image}></img>
      <h1>{description}</h1>
      <h2>{info}</h2>
      <h2>{price}</h2>
      <select className="size-dropdown">
        <option>Size</option>
        <option>{sizes[0].size}</option>
        <option>{sizes[1].size}</option>
        <option>{sizes[2].size}</option>
      </select>
      <BuyModal />
    </div>
  );
}

export default TopCard;
