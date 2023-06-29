import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FormModal(props) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [smallCheck, setSmallCheck] = useState(false);
  const [medCheck, setMedCheck] = useState(false);
  const [largeCheck, setLargeCheck] = useState(false);
  const [itemType, setItemType] = useState("");

  function resetForm() {
    setDescription("");
    setPrice("");
    setInfo("");
    setImageUrl("");
    setSmallCheck(false);
    setMedCheck(false);
    setLargeCheck(false);
    setItemType("");
    props.onHide();
  }

  function handlePrice(e) {
    setPrice(checkPriceValue(e.target.value));
  }
  function checkPriceValue(value) {
    const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s;
    return value.match(regex)[0];
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formObj = {
      description,
      price: parseFloat(price),
      sizes: [
        {
          size: "Small",
          inStock: smallCheck,
        },
        {
          size: "Med",
          inStock: medCheck,
        },
        {
          size: "Large",
          inStock: largeCheck,
        },
      ],
      image: imageUrl,
      info,
    };
  }

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
        <form
          className="modal-form"
          id="newItemForm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="form-left-side">
            <label htmlFor="description">Item Name:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            <label htmlFor="price">Price: </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => handlePrice(e)}
            />
            <br></br>
            <label htmlFor="info">Product Info:</label>
            <textarea
              style={{ height: "80px" }}
              type="text"
              id="info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
          <div className="form-right-side">
            <label htmlFor="imageUrl">Paste Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              style={{ width: "150%" }}
              onChange={(e) => setImageUrl(e.target.value)}
            />

            <br></br>
            <label htmlFor="sizeCheckbox">Select available Sizes</label>
            <div>
              <input
                type="checkbox"
                id="small"
                value={smallCheck}
                onChange={(e) => setSmallCheck(e.target.checked)}
              />
              <label htmlFor="small">Small</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="medium"
                value={medCheck}
                onChange={(e) => setMedCheck(e.target.checked)}
              />
              <label htmlFor="medium">Medium</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="large"
                value={largeCheck}
                onChange={(e) => setLargeCheck(e.target.checked)}
              />
              <label htmlFor="large">Large</label>
            </div>
            <br></br>
            <label htmlFor="radios">Select Item Type:</label>
            <div className="radios">
              <div>
                <input
                  type="radio"
                  id="top"
                  name="typeOfProduct"
                  value="Top"
                  checked={itemType === "Top"}
                  onChange={(e) => setItemType(e.target.value)}
                />
                <label htmlFor="top">Top</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="bottom"
                  name="typeOfProduct"
                  value="Bottom"
                  checked={itemType === "Bottom"}
                  onChange={(e) => setItemType(e.target.value)}
                />
                <label htmlFor="bottom">Bottom</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="accessory"
                  name="typeOfProduct"
                  value="Accessory"
                  checked={itemType === "Accessory"}
                  onChange={(e) => setItemType(e.target.value)}
                />
                <label htmlFor="accessory">Accessory</label>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "brown" }} onClick={resetForm}>
          Close
        </Button>
        <Button
          style={{ backgroundColor: "brown" }}
          type="submit"
          form="newItemForm"
          onClick={props.onHide}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FormModal;
