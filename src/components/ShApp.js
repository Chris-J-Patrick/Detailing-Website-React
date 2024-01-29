import React, { useState, useEffect } from "react"; // Import useEffect here
import Modal from "react-modal";
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

  // Remember to enable scrolling back when the component unmounts
  useEffect(() => {
    return () => toggleBodyScroll(true);
  }, []);

  return (
    <div className="mt-2">
      {/* Button to Open Modal */}
      <button
        className="btn btn-primary"
        onClick={openModal}
        style={{
          marginBottom: ".1rem",
          padding: ".4rem .4rem ",
          fontSize: "1.4rem",
        }}
      >
        {buttonText || "Schedule"}
      </button>

      {/* Modal with Iframe */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Appointment Scheduler"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "80%",
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
        }}
      >
        <button className="btn btn-primary btn-sm" onClick={closeModal}>
          X
        </button>
        <iframe
          src={serviceUrl}
          title="Schedule Appointment"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </Modal>
    </div>
  );
};

export default ShApp;
