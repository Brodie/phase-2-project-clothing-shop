import React from "react";
import { useState } from "react";
import BuyModal from "../Modals/BuyModal";
import { Button } from "react-bootstrap";

function TopCard({ top, typeOf }) {
  const { image, description, price, info, sizes } = top;
  const [size, setSize] = useState(sizes[0].size);
  const [inStock, setInStock] = useState(sizes[0].inStock);
  const [smallInStock, setSmallInStock] = useState(sizes[0].inStock);
  const [medInStock, setMedInStock] = useState(sizes[1].inStock);
  const [largeInStock, setLargeInStock] = useState(sizes[2].inStock);
  const [passedStocker, setPassedStocker] = useState({
    stocker: (bool) => setSmallInStock(bool),
  });

  function handleChange(e) {
    const sizeValue = e.target.value.split(",")[0];

    if (sizeValue === "Small") {
      setInStock(smallInStock === true);
      setPassedStocker({ stocker: (bool) => setSmallInStock(bool) });
    } else if (sizeValue === "Med") {
      setInStock(() => medInStock === true);
      setPassedStocker({ stocker: (bool) => setMedInStock(bool) });
    } else if (sizeValue === "Large") {
      setInStock(largeInStock === true);
      setPassedStocker({ stocker: (bool) => setLargeInStock(bool) });
    }
    setSize(sizeValue);
  }

  return (
    <div className="top-card">
      <img className="content-image" src={image}></img>
      <h1 className="item-description">{description}</h1>
      <h3 className="item-info">{info}</h3>
      <h4 className="item-price">${price}</h4>

      <select className="size-dropdown" onChange={handleChange}>
        <option value={Object.values(sizes[0])}>{sizes[0].size}</option>
        <option value={Object.values(sizes[1])}>{sizes[1].size}</option>
        <option value={Object.values(sizes[2])}>{sizes[2].size}</option>
      </select>
      {inStock ? (
        <BuyModal
          typeOfItem={typeOf}
          top={top}
          size={size}
          passedStocker={passedStocker.stocker}
          setInStock={setInStock}
        />
      ) : (
        <Button
          style={{ backgroundColor: "brown", border: "1px solid black" }}
          disabled={true}
        >
          Out of Stock
        </Button>
      )}
    </div>
  );
}

export default TopCard;
