import React from "react";
import { Container } from "react-bootstrap";

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-2 text-center w-100">
      <section className="hero-section-about w-100">
        <Container fluid className="text-center text-light py-5 w-100">
          <h1 className="display-4">{title}</h1>
          <p className="lead">{subtitle}</p>
        </Container>
      </section>
    </div>
  );
};

export default PageTitle;
