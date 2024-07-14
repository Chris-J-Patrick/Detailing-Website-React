import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Alert,
  Button,
  Card,
  Carousel,
} from "react-bootstrap";
import LogoDiamond from "../LogoDiamond/LogoDiamond";
import before from "../../before.jpeg";
import after from "../../after.jpeg";
import "./HomePage.css";

function HomePage() {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerTransition, setBannerTransition] = useState(false);

  const handleCloseBanner = () => {
    setBannerTransition(true);
    setTimeout(() => setShowBanner(false), 300);
  };

  const features = [
    {
      title: "Hassle-Free Online Booking",
      detail: "Book in less than 30 seconds!",
    },
    { title: "Flat Rates", detail: "Same price for all sizes! Cars & Trucks." },
    {
      title: "Price Match Guarantee",
      detail:
        "Best Price & Service Guarantee - if you find a better price, we will beat it!",
    },
    {
      title: "Fully Insured",
      detail: "Full Coverage Insurance for your peace of mind",
    },
    {
      title: "Paint Correction",
      detail: "Process of removing imperfections to create the ultimate shine.",
    },
    {
      title: "Ceramic Coatings",
      detail: "Offering Industry leading paint protection",
    },
  ];

  const additionalFeatures = [
    {
      title: "Unparalleled Value",
      description:
        "Delivering top-quality service at competitive prices, we ensure excellence without overspending. Our services are designed to exceed expectations affordably.",
    },
    {
      title: "Easiest Scheduling in the Industry!",
      description:
        "With our user-friendly online platform, booking services is quick and hassle-free. Enjoy efficient scheduling in under a minute.",
    },
    {
      title: "Passion and Enthusiasm",
      description:
        "More than a business, our passionate team is committed to excellence, offering detailed, creative solutions for unparalleled customer satisfaction.",
    },
    {
      title: "Embracing Sustainability",
      description:
        "Committed to eco-friendly practices, we use sustainable products and methods to provide services that respect the environment.",
    },
    {
      title: "Expert Team with Exceptional Skill",
      description:
        "Our expert team brings unparalleled skill and industry knowledge, ensuring top-quality results and setting the standard in our field.",
    },
  ];

  return (
    <Container fluid className="homepage-content p-0">
      {showBanner && (
        <Alert
          variant="warning"
          className={`alert-dismissible fade m-1 ${
            bannerTransition ? "fade-out" : "show"
          }`}
          onClose={handleCloseBanner}
          dismissible
        >
          <strong>Limited Time Sale!</strong> Enter Code: "Grand10" for an extra
          10% off - GRAND OPENING!
        </Alert>
      )}

      <Container fluid className="Welcome p-0">
        <div className="welcome-overlay">
          <div className="logo-container text-center">
            <LogoDiamond
              size={2.3}
              sizeUnit="rem"
              color="white"
              textColor="white"
              textFontSize={2.3}
              textFontSizeUnit="rem"
              className=""
            />
            <h4 className="welcome-title text-white mt-3">
              South Jersey's destination for{" "}
              <span className="Highlight">premier car detailing</span>.
              Experience <span className="Highlight">unparalleled shine</span>,
              inside and out!
            </h4>
          </div>

          <Button as={Link} to="/services" variant="primary" className="btn-lg">
            View Our Services
          </Button>
          <h5 className="my-2 text-white">Starting at ONLY $149.99</h5>
        </div>
      </Container>

      <Container className="my-5">
        <Row className="text-center">
          {features.map((feature, index) => (
            <Col key={index} sm={6} xs={12} md={4} lg={2} className="mb-3">
              <Card className="feature-card h-100">
                <Card.Body>
                  <FaCheck className="text-success fs-5 mb-2" />
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.detail}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="text-center my-5">
        <h2 className="mb-4">What Our Customers Say</h2>
        <Carousel className="testimonials-carousel">
          <Carousel.Item>
            <Card className="shadow">
              <Card.Body>
                <p className="mb-0">
                  "Attention to Detail Auto did an amazing job on my car! It
                  looks brand new."
                </p>
                <footer className="blockquote-footer mt-3">John Doe</footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="shadow">
              <Card.Body>
                <p className="mb-0">
                  "I highly recommend their services. Professional and
                  thorough."
                </p>
                <footer className="blockquote-footer mt-3">Jane Smith</footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="shadow">
              <Card.Body>
                <p className="mb-0">
                  "Excellent service and great attention to detail. My car looks
                  fantastic!"
                </p>
                <footer className="blockquote-footer mt-3">Mark Wilson</footer>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container fluid className="text-center my-5 bg-light py-5">
        <Row className="g-4">
          {additionalFeatures.map((feature, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-dark">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default HomePage;
