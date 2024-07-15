import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./ContactForm.css"; // Assume you have a CSS file for additional styles

function ContactForm() {
  return (
    <Container fluid className="contact-form-container">
      <h2 className="text-center mb-5 section-title">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <Card className="p-4 shadow-lg border-0 rounded-lg">
            <Card.Body>
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label htmlFor="name">Name:</Form.Label>
                  <Form.Control type="text" id="name" className="p-3" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label htmlFor="email">Email:</Form.Label>
                  <Form.Control type="email" id="email" className="p-3" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label htmlFor="message">Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    rows={4}
                    className="p-3"
                  />
                  <Form.Text className="text-muted">
                    We'll get back to you as soon as possible.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 py-3">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} className="mb-4">
          <Card className="p-4 shadow-lg border-0 rounded-lg contact-info-card">
            <Card.Body>
              <Card.Title className="mb-4">Contact Information</Card.Title>
              <Card.Text className="contact-info">
                <strong>Phone:</strong> +1 234 567 890
              </Card.Text>
              <Card.Text className="contact-info">
                <strong>Email:</strong> info@atdauto.net
              </Card.Text>
              <Card.Text className="contact-info">
                <strong>Address:</strong> 123 Main St, South Jersey, NJ 08001
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
