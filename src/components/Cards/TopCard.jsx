import React from "react";
import { useState } from "react";
import BuyModal from "../Content-and-Nav/BuyModal";
import { Button } from "react-bootstrap";

function TopCard({ top }) {
  const { image, description, price, info, sizes } = top;
  const [size, setSize] = useState(sizes[0].size);
  const [inStock, setInStock] = useState(sizes[0].inStock);

  function handleChange(e) {
    const sizeValue = e.target.value.split(",")[0];
    const stockValue = e.target.value.split(",")[1] === "true";
    setInStock(stockValue);
    setSize(sizeValue);
  }

  return (
    <div className="top-card">
      <img className="content-image" src={image}></img>
      <h1>{description}</h1>
      <h2>{info}</h2>
      <h2>{price}</h2>
      <select className="size-dropdown" onChange={handleChange}>
        <option value={Object.values(sizes[0])}>{sizes[0].size}</option>
        <option value={Object.values(sizes[1])}>{sizes[1].size}</option>
        <option value={Object.values(sizes[2])}>{sizes[2].size}</option>
      </select>
      {inStock ? (
        <BuyModal top={top} size={size} />
      ) : (
        <Button disabled>Out of Stock</Button>
      )}
    </div>
  );
}

export default TopCard;
