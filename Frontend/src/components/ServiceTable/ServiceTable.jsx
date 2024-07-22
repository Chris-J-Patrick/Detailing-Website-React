import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import ShApp from "../ShApp/ShApp";
import ServicesCompare from "../ServiceCompare/ServiceCompare";
import SmoothScroll from "smooth-scroll";
import "./ServiceTable.css";

function ServiceTable({ services }) {
  useEffect(() => {
    new SmoothScroll(".scroll-to-compare", {
      speed: 300,
      speedAsDuration: true,
      easing: "easeInOutCubic",
      offset: 70,
    });
  }, []);

  return (
    <div className="services-page">
      <section className="hero-section-services">
        <Container className="text-center text-light py-5">
          <h1 className="display-4">Our Services</h1>
          <p className="lead">
            High-quality car detailing services tailored to your needs.
          </p>
        </Container>
      </section>
      <Container fluid className="service-table-container py-2">
        <Row className="justify-content-start">
          {services.map((service, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <Card
                className={`h-100 service-card ${
                  service.isMostPopular ? "border-primary" : ""
                }`}
              >
                {service.isMostPopular && (
                  <Card.Header className="bg-primary text-white text-center fs-5">
                    Most Popular
                  </Card.Header>
                )}
                <Card.Body className="d-flex flex-column">
                  <div className="flex-grow-1 mb-1">
                    <Card.Title className="fw-bold mb-1">
                      {service.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                      {service.description}
                    </Card.Subtitle>

                    <h5 className="m-1">
                      {service.salePrice ? (
                        <>
                          <span className="text-muted text-decoration-line-through">
                            {service.price}
                          </span>
                          <span className="fw-bold text-success ms-2">
                            {service.salePrice}
                          </span>
                        </>
                      ) : (
                        <span className="fw-bold">{service.price}</span>
                      )}
                    </h5>
                    <ListGroup variant="flush">
                      {service.inclusions.map((inclusion, index) => (
                        <ListGroup.Item key={index} className="">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-success mx-1"
                          />
                          {inclusion}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                  <ShApp
                    serviceUrl={service.schedulingUrl}
                    buttonText="Schedule"
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ServicesCompare />
    </div>
  );
}

export default ServiceTable;
