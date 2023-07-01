import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import FormModal from "../Modals/FormModal";

function NewItem() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="nav-button"
        onClick={() => setModalShow(true)}
      >
        +New Item
      </Button>

      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default NewItem;
