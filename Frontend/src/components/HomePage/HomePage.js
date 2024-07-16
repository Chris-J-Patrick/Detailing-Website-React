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

    /* {
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
    }, */
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
      <Container fluid className="hero-section">
        <div className="hero-overlay">
          <Container fluid className="hero-content">
            <div className="top-left-content">
              <h1 className="hero-title">
                South Jersey's destination for{" "}
                <span className="highlight2">premier car detailing</span>.
              </h1>
              <p className="hero-subtitle">
                Experience{" "}
                <span className="highlight2">unparalleled shine</span>, inside
                and out!
              </p>
            </div>
            <div className="bottom-left-content">
              <Button
                as={Link}
                to="/services"
                variant="primary"
                className="cta-button"
              >
                View Our Services
              </Button>
              Starting at $149.99
            </div>
          </Container>
        </div>
      </Container>
      <Container fluid className="features-section py-1 my-1">
        <Row className="text-center justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} md={5} lg={4} className="mb-4">
              <Card responsive className="feature-card h-100">
                <Card.Body>
                  <div className="icon-wrapper mb-1">
                    <FaCheck className="text-success fs-2" />
                  </div>
                  <Card.Title className="feature-title title-sm">
                    {feature.title}
                  </Card.Title>
                  <Card.Text className="feature-detail">
                    {feature.detail}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="testimonials-section py-2 bg-light">
        <Row className="text-center mb-1">
          <h2 className="section-title">Testimonials</h2>
        </Row>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Card className="testimonial-card">
              <Card.Body className="text-center text-dark">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    "Attention to Detail Auto did an amazing job on my car! It
                    looks brand new."
                  </p>
                </blockquote>
              </Card.Body>
              <Card.Footer className="text-center text-white bg-dark w-50 align-self-center">
                - Jane Smith
              </Card.Footer>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="testimonial-card">
              <Card.Body className="text-center text-dark">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    "I highly recommend their services. Professional and
                    thorough."
                  </p>
                </blockquote>
              </Card.Body>
              <Card.Footer className="text-center text-white bg-dark w-50 align-self-center">
                - Jane Smith
              </Card.Footer>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="testimonial-card">
              <Card.Body className="text-center text-dark">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    "Excellent service and great attention to detail. My car
                    looks fantastic!"
                  </p>
                </blockquote>
              </Card.Body>
              <Card.Footer className="text-center text-white bg-dark w-50 align-self-center">
                - Jane Smith
              </Card.Footer>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

export default HomePage;
