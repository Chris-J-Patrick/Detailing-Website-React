import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  ListGroup,
} from "react-bootstrap";
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
    <Container fluid className="justify-content-center">
      <Row>
        {services.map((service, idx) => (
          <Col key={idx} md={6} lg={4} className="mb-1 py-2">
            <Card
              className="h-100 d-flex flex-column justify-content-around"
              border={service.isMostPopular ? "primary" : ""}
            >
              {service.isMostPopular && (
                <Card.Header className="bg-primary fs-4 text-white">
                  Most Popular
                </Card.Header>
              )}
              <Card.Body className="d-flex flex-column">
                <div className="flex-grow-1">
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Subtitle>{service.description}</Card.Subtitle>
                  <h5>
                    {service.salePrice ? (
                      <>
                        <div className="text-danger">
                          <del>{service.price}</del>
                        </div>
                        <div className="fw-bold">{service.salePrice}</div>
                      </>
                    ) : (
                      <span>{service.price}</span>
                    )}
                  </h5>
                  <ListGroup variant="flush" className="mb-1">
                    {service.inclusions.map((inclusion, index) => (
                      <ListGroup.Item className="" key={index}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-success"
                        />{" "}
                        <span>{inclusion}</span>
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
        <ServicesCompare />
      </Row>
    </Container>
  );
}

ServiceTable.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      salePrice: PropTypes.string,
      inclusions: PropTypes.arrayOf(PropTypes.string).isRequired,
      schedulingUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceTable;
