import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarCheck, FaDollarSign, FaAward } from "react-icons/fa";
import { Container, Alert, Button, Card, Carousel } from "react-bootstrap";
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
      icon: <FaCalendarCheck className="feature-icon text-primary fs-1" />,
    },
    {
      title: "Flat Rates",
      detail: "Same price for all sizes! Cars & Trucks.",
      icon: <FaDollarSign className="feature-icon text-success fs-1" />,
    },
    {
      title: "Price Match Guarantee",
      detail:
        "Best Price & Service Guarantee - if you find a better price, we will beat it!",
      icon: <FaAward className="feature-icon text-warning fs-1" />,
    },
  ];

  return (
    <Container fluid className="homepage-content p-0">
      {showBanner && (
        <Alert
          variant="warning"
          className={`alert-dismissible text-dark fade fs-5 m-1 ${
            bannerTransition ? "fade-out" : "show"
          }`}
          onClose={handleCloseBanner}
          dismissible
        >
          {" "}
          <strong>Grand Opening Sale!</strong> Enter Code: "Grand10" for an
          extra 10% off
        </Alert>
      )}
      <Container fluid className="hero-section">
        <div className="hero-overlay">
          <Container fluid className="hero-content">
            <div className="top-left-content">
              <h1 className="hero-title ">
                South Jersey's{" "}
                <span className="highlight2">Premier Car Detailer</span>.
              </h1>
              <p className="hero-subtitle mt-0">
                Experience unparalleled shine, inside and out!
              </p>
            </div>
          </Container>

          {features.map((feature, index) => (
            <div
              key={index}
              className="d-block align-self-left justify-items-end align-items-center p-1"
            >
              {feature.icon}
              {feature.title}
            </div>
          ))}
          <Button
            as={Link}
            to="/services"
            variant="primary"
            className="btn-primary btn-lg cta-button my-5"
          >
            View Our Services
          </Button>
        </div>
      </Container>

      <div className="testimonials-section bg-transparent">
        <h4 className="section-title py-5 my-0 text-center bg-primary text-white">
          Testimonials
        </h4>
        <Carousel data-bs-theme="dark" className="my-0">
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
              <Card.Footer className="text-center text-white bg-dark align-self-center">
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
      </div>
    </Container>
  );
}
export default HomePage;
