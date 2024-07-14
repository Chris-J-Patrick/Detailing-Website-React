import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./ContactForm.css"; // Assume you have a CSS file for additional styles

function ContactForm() {
  return (
    <Container fluid id="contact" className="contact-form-container">
      <h2 className="text-center mb-3">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-2 shadow-sm border-0 rounded">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name">Name:</Form.Label>
                  <Form.Control type="text" id="name" className="p-3" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email:</Form.Label>
                  <Form.Control type="email" id="email" className="p-3" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="message">Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    rows={4}
                    className="p-3"
                  />
                  <Form.Text className="text-muted">
                    Submit a message.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 py-2">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 shadow-sm border-0 rounded mt-0 mt-md-0">
            <Card.Body>
              <Card.Title className="mb-3">Contact Information</Card.Title>
              <Card.Text>
                <strong>Phone:</strong> +1 234 567 890
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> info@atdauto.net
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
