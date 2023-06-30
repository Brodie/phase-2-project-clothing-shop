import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const modalStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  // marginRight: "20%",
  gap: "50px",
};

function AccessoryModal({ top, typeOf }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handlePurchase() {
    alert("Item Successfully Purchased!");
    handleClose();
  }

  return (
    <>
      <Button className="buy-buttons" variant="primary" onClick={handleShow}>
        Purchase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase:</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyle}>
          <img src={top.image} style={{ width: "30%" }}></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h2>1 {top.description}</h2>
            <br></br>
            <h3>Price: {top.price}</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
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

export default AccessoryModal;
