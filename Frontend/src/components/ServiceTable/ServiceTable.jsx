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
    <div className="services-page">
      <section className="hero-section-services">
        <Container className="text-center text-light py-5">
          <h1 className="display-4">Our Services</h1>
          <p className="lead">
            High-quality car detailing services tailored to your needs.
          </p>
        </Container>
      </section>
      <Container fluid className="service-table-container my-2">
        <Row className="justify-content-start">
          {services.map((service, idx) => {
            const {
              title,
              description,
              price,
              salePrice,
              inclusions,
              isMostPopular,
              schedulingUrl,
            } = service;

            return (
              <Col key={idx} md={6} lg={4} className="mb-1 mt-0">
                <div className="service-card-wrapper h-100">
                  {isMostPopular && (
                    <div className="most-popular-tag">Most Popular</div>
                  )}
                  <Card className="h-100 service-card py-1">
                    <Card.Body className="h-100 d-flex flex-column">
                      <div className="flex-grow-1 mb-1">
                        <Card.Title className="fw-bold mb-1">
                          {title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-secondary">
                          {description}
                        </Card.Subtitle>
                        <ListGroup variant="flush">
                          {inclusions.map((inclusion, index) => (
                            <ListGroup.Item className="mx-0 px-0" key={index}>
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="text-success mx-1"
                              />
                              {inclusion}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </div>
                      <div className="align-items-center d-flex mt-2">
                        {" "}
                        <ShApp
                          serviceUrl={schedulingUrl}
                          buttonText="Schedule"
                        />{" "}
                        <h5 className="">
                          {salePrice ? (
                            <>
                              <span className="text-muted text-decoration-line-through">
                                {price}
                              </span>
                              <span className="fw-bold ms-2">{salePrice}</span>
                            </>
                          ) : (
                            <span className="fw-bold">{price}</span>
                          )}
                        </h5>{" "}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <ServicesCompare />
    </div>
  );
}

export default ServiceTable;
