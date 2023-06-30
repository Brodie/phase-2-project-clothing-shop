import React from "react";
import BuyModal from "../Modals/BuyModal";
import AccessoryModal from "../Modals/AccessoryModal";

function AccessoryCard({ accessory, typeOf }) {
  const { image, description, price, info } = accessory;

  return (
    <div className="top-card">
      <img className="content-image" src={image}></img>
      <h1 className="item-description">{description}</h1>
      <h3 className="item-info">{info}</h3>
      <h4 className="item-price">{price}</h4>
      <AccessoryModal typeOfItem={typeOf} top={accessory} size=" " />
    </div>
  );
}

export default AccessoryCard;
