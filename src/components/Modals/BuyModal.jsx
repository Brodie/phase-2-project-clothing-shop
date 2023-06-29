import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const modalStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

function BuyModal({ size, top, setInStock, typeOfItem, passedStocker }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePurchase = () => {
    const findIndex = () => {
      if (size === "Small") {
        return 0;
      } else if (size === "Med") {
        return 1;
      } else if (size === "Large") {
        return 2;
      }
    };
    const sizeIndex = findIndex();

    const updatedSizes = [...top.sizes];
    updatedSizes[sizeIndex] = {
      size,
      inStock: false,
    };
    console.log(updatedSizes);

    fetch(
      `https://phase-2-project-backend.onrender.com/${typeOfItem}/${top.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sizes: updatedSizes,
        }),
      }
    )
      .then((r) => r.json())
      .then((d) => handleClose());
    passedStocker(false);
    setInStock(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Purchase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase:</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyle}>
          <img src={top.image} style={{ width: "30%" }}></img>
          <h2>
            1 {size} {top.description}
          </h2>
          <h3>Price: {top.price}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePurchase}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BuyModal;
