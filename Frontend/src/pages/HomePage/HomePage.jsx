import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaDollarSign,
  FaAward,
  FaHandshake,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import {
  Container,
  Alert,
  Button,
  Card,
  Carousel,
  Row,
  Col,
  Image,
} from "react-bootstrap";
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
      icon: <FaCalendarCheck className="feature-icon text-primary" />,
    },
    {
      title: "Flat Rates",
      detail: "Same price for all sizes! Cars & Trucks.",
      icon: <FaDollarSign className="feature-icon text-success" />,
    },
    {
      title: "Price Match Guarantee",
      detail:
        "Best Price & Service Guarantee - if you find a better price, we will beat it!",
      icon: <FaAward className="feature-icon text-warning" />,
    },
  ];

  const valuesData = [
    {
      title: "Exceptional Value",
      text: "We offer high-quality services at prices that won't break the bank. Our detailing packages start at just $299.99, ensuring you get the best value for your money.",
      icon: <FaDollarSign size={50} className="text-primary" />,
    },
    {
      title: "Transparent Pricing",
      text: "With Attention to Detail Auto, there are no hidden fees or surprises. Our pricing is clear and honest, so you know exactly what you're paying for.",
      icon: <FaHandshake size={50} className="text-success" />,
    },
    {
      title: "Innovative Booking",
      text: "Our fully online, hassle-free booking system allows you to arrange your detailing appointment from the comfort of your home. Convenience with just a few clicks.",
      icon: <FaClock size={50} className="text-warning" />,
    },
    {
      title: "Quality Service",
      text: "We take pride in our work and strive to exceed your expectations. Our attention to detail ensures that your car looks its best after every service.",
      icon: <FaShieldAlt size={50} className="text-info" />,
    },
  ];

  const testimonials = [
    {
      text: "Attention to Detail Auto did an amazing job on my car! It looks brand new.",
      name: "Jane Smith",
      image: "https://via.placeholder.com/150", // Placeholder for user image
    },
    {
      text: "I highly recommend their services. Professional and thorough.",
      name: "John Doe",
      image: "https://via.placeholder.com/150", // Placeholder for user image
    },
    {
      text: "Excellent service and great attention to detail. My car looks fantastic!",
      name: "Emily Johnson",
      image: "https://via.placeholder.com/150", // Placeholder for user image
    },
  ];

  return (
    <Container fluid className="homepage-content p-0">
      {showBanner && (
        <Alert
          variant="warning"
          className={`alert-dismissible fade fs-6 p-2 m-1 ${
            bannerTransition ? "fade-out" : "show"
          }`}
          onClose={handleCloseBanner}
          dismissible
        >
          <Alert.Heading>Grand Opening Sale!</Alert.Heading>
          Enter Code: "<strong>Grand10</strong>" for an extra 10% off
        </Alert>
      )}
      <Container fluid className="hero-section">
        <div className="hero-overlay">
          <Container fluid className="hero-content">
            <h1 className="hero-title my-0 ">
              South Jersey's <span className="highlight2"> Car Detailer</span>.
            </h1>
            <p className="hero-subtitle mb-5 mt-0">
              Experience unparalleled shine, inside and out!
            </p>
            {features.map((feature, index) => (
              <div key={index} className="d-flex align-items-center mb-3">
                {feature.icon}
                <div className="my-1">
                  <h6 className="feature-title mb-1">{feature.title}</h6>
                  <p className="feature-detail mb-0">{feature.detail}</p>
                </div>
              </div>
            ))}
            <Button
              as={Link}
              to="/services"
              variant="primary"
              className="cta-button my-5"
            >
              View Our Services
            </Button>
          </Container>
        </div>
      </Container>

      <div className="bg-light py-5 position-relative">
        <Container fluid={true} className="position-relative">
          <h4 className="section-title">Why Choose Us?</h4>
          <Row className="px-1 justify-content-center">
            {valuesData.map((value, idx) => (
              <Col key={idx} sm={12} md={6} className="px-1 py-4">
                <Card className="value-card h-100 shadow-sm border-0 text-center">
                  <Card.Body>
                    <div className="icon-container mb-3">{value.icon}</div>
                    <Card.Title className="font-weight-bold">
                      {value.title}
                    </Card.Title>
                    <Card.Text>{value.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="testimonials-section text-center py-5">
        <h4 className="section-title">Testimonials</h4>
        <Carousel data-bs-theme="dark">
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Card className="testimonial-card mx-auto">
                <Card.Body className="text-center">
                  <Image
                    src={testimonial.image}
                    roundedCircle
                    className="testimonial-image mb-3"
                    alt={testimonial.name}
                  />
                  <blockquote className="blockquote mb-4">
                    <p className="mb-0">{testimonial.text}</p>
                  </blockquote>
                  <Card.Subtitle className="text-center text-dark">
                    {testimonial.name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
        <Button className="my-3">
          <Link to="/testimonials" className="text-white text-decoration-none">
            Read More Reviews
          </Link>
        </Button>
      </div>
    </Container>
  );
}

export default HomePage;