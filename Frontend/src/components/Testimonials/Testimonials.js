import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    comment: "Great service! My car has never looked better.",
    avatar:
      "https://images.unsplash.com/photo-1502767882403-636aee14f873?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Professional and quick. Highly recommend.",
    avatar:
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Jane Smith",
    comment: "Professional and quick. Highly recommend.",
    avatar:
      "https://images.unsplash.com/photo-1530065928592-fb0dc85d2f27?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Jane Smith",
    comment: "Professional and quick. Highly recommend.",
    avatar:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "John Doe",
    comment: "Great service! My car has never looked better.",
    avatar:
      "https://images.unsplash.com/photo-1473655587843-eda8944061e8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Jane Smith",
    comment: "Professional and quick. Highly recommend.",
    avatar:
      "https://images.unsplash.com/photo-1613401665466-6b16e47bc7a0?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Jane Smith",
    comment: "Professional and quick. Highly recommend.",
    avatar:
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
  },
  {
    id: 8,
    name: "Jane Smith",
    comment: "Professional and quick. Highly recommend.",
    avatar:
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
