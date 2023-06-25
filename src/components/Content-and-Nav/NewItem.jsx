import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import FormModal from "../Modals/FormModal";

const styles = {
  display: "Flex",
  justifyContent: "Center",
  width: "110px",
  padding: "15px",
  margin: "0 6px 6px",
  background: "brown",
  textDecoration: "none",
  color: "white",
};

function NewItem() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        style={styles}
        onClick={() => setModalShow(true)}
      >
        +New Item
      </Button>

      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default NewItem;
