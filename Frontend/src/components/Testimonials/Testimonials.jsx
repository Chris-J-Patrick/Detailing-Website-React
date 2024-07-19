import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComp from "../CarouselComp";
import "./Testimonials.css";
import PageTitle from "../PageTitle";

const testimonialsData = [];

function Testimonials() {
  return (
    <Container fluid className="testimonials-page bg-transparent">
      <PageTitle
        title="Explore the stories behind our shine—direct from our valued clients."
        subtitle="Real Feedback from Real Customers"
      />

      {testimonialsData.length > 0 ? (
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {testimonialsData.map((testimonial) => (
            <Col key={testimonial.id} className="mb-4">
              <div className="testimonial-card">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="testimonial-avatar"
                  onError={(e) => (e.target.src = "path/to/default-avatar.jpg")}
                />
                <div className="testimonial-content">
                  <p className="testimonial-comment">{testimonial.comment}</p>
                  <p className="testimonial-name">- {testimonial.name}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center">
          <CarouselComp />
          <p className="no-testimonials-message">
            We currently have no testimonials. Be the first to leave a review!
          </p>
          <Row className="justify-content-center">
            <Col md={3} className="mb-2">
              <Button
                variant="primary"
                href="https://www.google.com/maps/place/Your+Business+Name"
                target="_blank"
                className="review-button"
              >
                Review on Google
              </Button>
            </Col>
            <Col md={3} className="mb-2">
              <Button
                variant="primary"
                href="https://www.facebook.com/YourBusinessName/reviews"
                target="_blank"
                className="review-button"
              >
                Review on Facebook
              </Button>
            </Col>
            <Col md={3} className="mb-2">
              <Button
                variant="primary"
                href="https://www.yelp.com/biz/YourBusinessName"
                target="_blank"
                className="review-button"
              >
                Review on Yelp
              </Button>
            </Col>
            <Col md={3} className="mb-2">
              <Button
                variant="primary"
                href="https://www.tripadvisor.com/Attraction_Review-gYourBusinessName"
                target="_blank"
                className="review-button"
              >
                Review on TripAdvisor
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

export default Testimonials;
