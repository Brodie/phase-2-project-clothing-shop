import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function FormModal(props) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="modal-form">
          <label htmlFor="description">Item Name:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="info">Product Info:</label>
          <textarea
            style={{ height: "80px" }}
            type="text"
            id="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "brown" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;
