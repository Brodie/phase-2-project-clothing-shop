import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const modalStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

function BuyModal({ size, top }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePurchase = () => {
    fetch("http://localhost:4000/tops/2")
      .then((r) => r.json())
      .then((d) => console.log(d));
    handleClose();
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
