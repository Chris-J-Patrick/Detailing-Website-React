import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
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
    <Container fluid className="service-table-container">
      <Row className="justify-content-center">
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
                <div className="flex-grow-1 mb-2">
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {service.description}
                  </Card.Subtitle>
                  <h5 className="my-3">
                    {service.salePrice ? (
                      <>
                        <span className="text-muted text-decoration-line-through">
                          {service.price}
                        </span>
                        <span className="fw-bold text-danger ms-2">
                          {service.salePrice}
                        </span>
                      </>
                    ) : (
                      <span className="fw-bold">{service.price}</span>
                    )}
                  </h5>
                  <ListGroup variant="flush">
                    {service.inclusions.map((inclusion, index) => (
                      <ListGroup.Item key={index} className="border-0">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-success me-2"
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
      <ServicesCompare />
    </Container>
  );
}

export default ServiceTable;
