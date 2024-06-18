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
import "./ServiceTable.css"; // Add your custom CSS here

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
    <Container className=" py-1 justify-content-center">
      <Alert variant="info" className="text-center">
        <strong>Advancing to a higher tier?</strong> Rest assured, all the
        services from the lower tiers come with you.
        <NavLink
          as={Button}
          variant="primary"
          size="sm"
          className="ml-3 scroll-to-compare"
          to="#ServicesCompare"
        >
          Compare All Services
        </NavLink>
      </Alert>

      <Row>
        {services.map((service, idx) => (
          <Col key={idx} md={6} lg={4} className="mb-4">
            <Card
              className="h-100 d-flex flex-column justify-content-between"
              border={service.isMostPopular ? "primary" : ""}
            >
              {service.isMostPopular && (
                <Card.Header className="bg-primary text-white">
                  Most Popular
                </Card.Header>
              )}
              <Card.Body className="d-flex flex-column">
                <div className="flex-grow-1">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <h5>
                    {service.salePrice ? (
                      <>
                        <span className="text-danger">{service.salePrice}</span>
                        <span className="text-muted">
                          <del>{service.price}</del>
                        </span>
                      </>
                    ) : (
                      <span>{service.price}</span>
                    )}
                  </h5>
                  <ListGroup variant="flush" className="mb-3">
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
