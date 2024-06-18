import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonialsData = [];
function TestimonialCard({ testimonial }) {
  return (
    <Col className="mb-4">
      <Card className="testimonial-card h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={testimonial.avatar}
          alt={`${testimonial.name}'s avatar`}
          className="testimonial-avatar"
          onError={(e) => (e.target.src = "path/to/default-avatar.jpg")}
        />
        <Card.Body>
          <Card.Text className="testimonial-comment">
            {testimonial.comment}
          </Card.Text>
          <Card.Text className="text-muted">- {testimonial.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Testimonials() {
  return (
    <div className="testimonial-section">
      <Container>
        <h2 className="text-center m-2 p-3">What Our Customers Say</h2>
        {testimonialsData.length > 0 ? (
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Row>
        ) : (
          <div className="text-center">
            <p className="mb-4">
              We currently have no testimonials. Be the first to leave a review!
            </p>
            <Row className="justify-content-center mb-3">
              <Col md={4} className="mb-2">
                <Button
                  variant="primary"
                  block
                  href="https://www.google.com/maps/place/Your+Business+Name"
                  target="_blank"
                >
                  Review on Google
                </Button>
              </Col>
              <Col md={4} className="mb-2">
                <Button
                  variant="primary"
                  block
                  href="https://www.facebook.com/YourBusinessName/reviews"
                  target="_blank"
                >
                  Review on Facebook
                </Button>
              </Col>
              <Col md={4} className="mb-2">
                <Button
                  variant="primary"
                  block
                  href="https://www.yelp.com/biz/YourBusinessName"
                  target="_blank"
                >
                  Review on Yelp
                </Button>
              </Col>
              <Col md={4} className="mb-2">
                <Button
                  variant="primary"
                  block
                  href="https://www.tripadvisor.com/Attraction_Review-gYourBusinessName"
                  target="_blank"
                >
                  Review on TripAdvisor
                </Button>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Testimonials;
