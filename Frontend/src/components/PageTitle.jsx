import React from "react";
import { Container } from "react-bootstrap";

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className=" mb-3 text-center w-100">
      <section className="hero-section-about w-100">
        <Container fluid className="text-center text-light py-2 w-100">
          <h1 className="display-4 mb-1">{title}</h1>
          <p className="lead mt-0">{subtitle}</p>
        </Container>
      </section>
    </div>
  );
};

export default PageTitle;
