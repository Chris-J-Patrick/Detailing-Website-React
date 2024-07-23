import React from "react";
import { Row, Col, Button, Image, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import PageTitle from "../PageTitle";
import CarouselComp from "../CarouselComp";
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Amazing service! My car looks brand new again. Highly recommend Attention to Detail Auto!",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Professional and thorough. I couldn't be happier with the results. My car's paint looks flawless.",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Alice Johnson",
    comment:
      "Great attention to detail. They took care of every little scratch and swirl. Fantastic job!",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Michael Brown",
    comment:
      "Friendly staff and excellent service. My car has never looked better. Will use their service again!",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Emma Wilson",
    comment:
      "Efficient and high-quality work. Very impressed with the outcome. My car shines like never before!",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "David Lee",
    comment:
      "Exceptional detailing service. They went above and beyond to ensure my car looked perfect.",
    avatar: "https://via.placeholder.com/150",
  },
];

function Testimonials() {
  return (
    <div className="testimonials-page bg-transparent">
      <PageTitle
        title="Explore the stories behind our shine."
        subtitle="Real Feedback from Real Customers"
      />
      {testimonialsData.length > 0 ? (
        <Container className="py-4">
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
            {testimonialsData.map((testimonial) => (
              <Col key={testimonial.id} className="mb-4">
                <Card className="testimonial-card h-100">
                  <Card.Img
                    variant="top"
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    onError={(e) =>
                      (e.target.src = "path/to/default-avatar.jpg")
                    }
                    className="testimonial-avatar align-self-center"
                  />
                  <Card.Body>
                    <Card.Text className="testimonial-comment">
                      {testimonial.comment}
                    </Card.Text>
                    <Card.Subtitle className="text-muted testimonial-name">
                      - {testimonial.name}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <CarouselComp />
        </Container>
      ) : (
        <div className="text-center align-items-center">
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
    </div>
  );
}

export default Testimonials;
