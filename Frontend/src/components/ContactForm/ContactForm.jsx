import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import "./ContactForm.css";
import PageTitle from "../PageTitle";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="contact-form-container bg-transparent">
      <PageTitle
        title={"We're Here to Help"}
        subtitle={"Have questions? Our team is just a message away."}
      />
      <Row className="justify-content-center p-3">
        <Col md={6} className="mb-1">
          <Card className="cardAbout p-2 shadow-lg border-0 rounded-lg">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name" className="mx-1 mb-0">
                    Name:
                  </Form.Label>
                  <Form.Control type="text" id="name" className="py-2" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email" className="mx-1 mb-0">
                    Email:
                  </Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    className="py-2  mb-0"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="message" className="mx-1 mb-0">
                    {" "}
                    Message:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    rows={4}
                    className="py-2"
                  />
                  <Form.Text className="text-muted">
                    We'll get back to you as soon as possible.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 py-2">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} className="mb-4">
          <Card className="cardAbout p-2 shadow-lg border-0 rounded-lg contact-info-card">
            <Card.Body>
              <Card.Title className="mb-3">Contact Information</Card.Title>
              <Card.Text className="contact-info">
                <FaPhone className="mx-2" />
                <a href="tel:1234567890">(123) 456-7890</a>
              </Card.Text>
              <Card.Text className="contact-info">
                <FaEnvelope className="mx-2" />
                <a href="mailto:info@atdauto.com">info@atdauto.net</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ContactForm;
