import React, { useState, useEffect } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import "./ShApp.css";

const ShApp = ({ serviceUrl, buttonText }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleBodyScroll = (shouldScroll) => {
    document.body.style.overflow = shouldScroll ? "auto" : "hidden";
  };

  const openModal = () => {
    setModalIsOpen(true);
    toggleBodyScroll(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    toggleBodyScroll(true);
  };

  useEffect(() => {
    return () => toggleBodyScroll(true);
  }, []);

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
        <Modal.Header closeButton>
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
      </Modal>
    </Container>
  );
};

export default ShApp;
