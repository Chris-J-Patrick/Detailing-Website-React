import React, { useState, useEffect } from "react";
import { Button, Modal, Container, ModalHeader } from "react-bootstrap";
import "./ShApp.css";
import Footer from "../Footer/Footer";
const ShApp = ({ serviceUrl, buttonText }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container fluid>
      <Button
        variant="primary"
        onClick={openModal}
        style={{
          marginBottom: ".1rem",
          padding: ".4rem .4rem",
          fontSize: "1.4rem",
        }}
      >
        {buttonText || "Schedule"}
      </Button>

      <Modal
        show={modalIsOpen}
        onHide={closeModal}
        aria-labelledby="contained-modal-title"
        backdrop="static"
        size="fullscreen"
      >
        <Modal.Header closeButton className="text-white bg-primary">
          <Modal.Title id="contained-modal-title">
            Appointment Scheduler
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={serviceUrl}
            title="Schedule Appointment"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ShApp;
