import React from "react";
import BuyModal from "../Modals/BuyModal";
import AccessoryModal from "../Modals/AccessoryModal";

function AccessoryCard({ accessory, typeOf }) {
  const { image, description, price, info } = accessory;

  return (
    <div className="top-card">
      <img className="content-image" src={image}></img>
      <h1>{description}</h1>
      <h2>{info}</h2>
      <h2>{price}</h2>
      <AccessoryModal typeOfItem={typeOf} top={accessory} size=" " />
    </div>
  );
}

export default AccessoryCard;
