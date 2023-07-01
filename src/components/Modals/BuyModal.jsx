import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
    alert("Item Successfully Purchased!");
    passedStocker(false);
    setInStock(false);
  };

  return (
    <>
      <Button className="buy-buttons" variant="primary" onClick={handleShow}>
        Purchase
      </Button>

      <Modal show={show} onHide={handleClose} className="modal-container">
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Confirm Purchase:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h2>
            1 {size} {top.description}
          </h2>
          <img
            src={top.image}
            style={{ width: "50%" }}
            alt="Image Failed to Load :("
          ></img>
          <h3>Price: {top.price}</h3>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            variant="secondary"
            className="buy-buttons"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="buy-buttons"
            onClick={handlePurchase}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BuyModal;
