import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const faqData = [
  {
    id: "One",
    question: "Why don't you offer 'Pro' Ceramic Coatings?",
    answer:
      "'Pro' coatings are like paying extra for a designer label on a bottle of water. Fancy, but it's still just water. We use Gyeon coatings - same glitz, none of the wallet hits. They work brilliantly, don't cost a small fortune, and come with our in-house 2-5 year warranty. Why overpay for a shiny label when you can get actual shine on your car?",
  },
  {
    id: "Two",
    question: "How are you so much cheaper than the competition?!",
    answer:
      "Well, for starters, we don’t play the 'Pro' coatings game (refer back up one for the juicy details). Our profit margins? Leaner than a budget-conscious accountant in a discount store. And since we’re mobile, we cut the overhead, not corners. This means we bring the savings to you, like a luxury service at a not-so-luxury price.",
  },
  {
    id: "Three",
    question: "How long does a detailing session take?",
    answer:
      "Depends on how much love your car needs. It's like a spa day for your car - you can't rush perfection or a good facial, can you? Expect us to be pampering your ride for a few hours, more if it's been living the off-road dream.",
  },
  {
    id: "Four",
    question: "Is car detailing really worth it?",
    answer:
      "Is a freshly baked pizza better than a frozen one? Absolutely. Detailing not only keeps your car looking snazzy but also helps maintain its value. It's like anti-aging cream, but for your car.",
  },
  {
    id: "Five",
    question: "Do I need to prepare anything before your arrival?",
    answer:
      "Just make sure your car is there, and maybe remove any ancient artifacts or gym bags from the backseat. We bring the magic, you bring the canvas (your car, that is).",
  },
];

function About() {
  return (
    <div className="about-page">
      <section className="hero-section-about">
        <Container className="text-center text-light py-">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Learn more about Attention to Detail Auto</p>
        </Container>
      </section>

      <section className="commitment-section py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="section-title mb-2">Who We Are</h5>
              <p className="lead">
                Attention to Detail Auto is your premier mobile car detailing
                service located in the heart of southern New Jersey. Founded out
                of a passion for impeccable vehicle care and a desire to offer
                unparalleled customer service, we are dedicated to transforming
                your car into its best version.
              </p>
              <Button variant="primary" className="mt-3">
                Learn More
              </Button>
            </Col>
            <Col>
              <Image
                src="./AboutPic.jpg"
                alt="Who We Are"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our-story-section py-5 my-5">
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image
                src="./AboutJourney.jpg"
                alt="Our Story"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="section-title mb-2">Our Story</h5>
              <p className="lead">
                Our journey began with a simple mission: to provide exceptional
                car detailing services that exceed expectations. As car
                enthusiasts, we understand the joy of driving a pristine vehicle
                and the confidence it brings. That's why we decided to turn our
                passion into a profession, offering top-notch detailing services
                that cater to every car owner's needs.
              </p>
              <Button variant="primary" className="mt-3">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="commitment-section py-5 mt-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h5 className="section-title mb-2">
                Our Commitment to Excellence
              </h5>
              <p className="lead">
                Our team comprises professionals who are not just skilled but
                also deeply passionate about automobiles. Whether you own a
                vintage classic or a modern marvel, your vehicle will receive
                the specialized care it deserves, enhancing both its aesthetics
                and longevity.
              </p>
              <p className="lead">
                From ceramic coatings to paint protection, our services are a
                testament to our pursuit of perfection. Step into the world of
                Attention to Detail Auto, and experience car care that goes
                beyond the conventional - it's an investment in your vehicle’s
                future.
              </p>
              <Button variant="primary" className="mt-3">
                Learn More
              </Button>
            </Col>
            <Col>
              <Image
                src="./aboutimg.jpeg"
                alt="Commitment to Excellence"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section text-center py-5 bg-primary text-light">
        <Container>
          <h2>Join Our Satisfied Customers</h2>
          <p>
            We invite you to join the ranks of our satisfied customers.
            Experience the unparalleled value and care that Attention to Detail
            Auto provides. It’s not just detailing; it’s a commitment to
            preserving and elevating your vehicle's beauty and value.
          </p>
          <Link to="/services">
            <Button variant="light" size="lg">
              Schedule Today
            </Button>
          </Link>
        </Container>
      </section>

      <section className="faq-section py-5">
        <Container>
          <h2 className="text-center mb-3">Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="none">
            {faqData.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={faq.id}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      <section className="more-questions-section">
        <Container className="text-center py-5">
          <h2 className="mb-3">More Questions?</h2>
          <p className="lead mb-4">Contact us today for more information.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="contact-button">
              Contact Us
            </Button>
          </Link>
        </Container>
      </section>
    </div>
  );
}

export default About;
