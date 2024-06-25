import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { Container, Row, Col, Alert, Button, Card } from "react-bootstrap";
import LogoDiamond from "../LogoDiamond/LogoDiamond";
import ImageCompareSlider from "../ImageCompareSlider/ImageCompareSlider";
import before from "../../before.jpeg";
import after from "../../after.jpeg";
import "./HomePage.css";

function HomePage() {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerTransition, setBannerTransition] = useState(false);
  const firstImage = before;
  const secondImage = after;

  const handleCloseBanner = () => {
    setBannerTransition(true);
    setTimeout(() => setShowBanner(false), 300);
  };

  const features = [
    {
      title: "Hassle-Free Online Booking",
      detail: "Book in less than 30 seconds!",
    },
    {
      title: "Flat Rates",
      detail: "Same price for all sizes! Cars & Trucks.",
    },
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
        <Card className="bg-transparent border-0 py-0 my-0">
          <Card.Body>
            <LogoDiamond
              size={7}
              sizeUnit="dvw"
              color="white"
              textColor="white"
              textFontSize={7}
              textFontSizeUnit="dvw"
              className=""
            />
            <Card.Subtitle>
              South Jersey's destination for{" "}
              <span className="Highlight">premier car detailing</span>.
              Experience <span className="Highlight">unparalleled shine</span>,
              inside and out!
            </Card.Subtitle>
          </Card.Body>
        </Card>
        <Row className="mx-5">
          {features.map((feature, index) => (
            <Col key={index} sm={6} xs={12} md={4} lg={2} className="my-1">
              <Card className="h-100 w-100 justify-content-center">
                {" "}
                <Card.Title className="fs-6">
                  <FaCheck className="text-success fs-5 m-1 my-0" />
                  {feature.title}
                </Card.Title>
                {/* <Card.Text className="fs-6"> {feature.detail}</Card.Body> */}
              </Card>
            </Col>
          ))}
          <Button to="/services" variant="primary" className="my-1">
            View Our Services
          </Button>
          <h5 className="my-1">Starting at ONLY $149.99</h5>
        </Row>{" "}
      </Container>

      <Container fluid className="text-center my-2">
        <h3 className="py-3 text-white font-weight-bold rounded-lg shadow-lg bg-dark">
          See the difference our detailing makes!
        </h3>
        <ImageCompareSlider firstImage={firstImage} secondImage={secondImage} />
        <Row className="g-4 m-1">
          {additionalFeatures.map((feature, index) => (
            <Col key={index} md={4}>
              <Card className="h-100 shadow feature-card rounded-sm">
                <Card.Body className="bg-light">
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
