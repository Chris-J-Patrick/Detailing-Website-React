import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <Row>
          <Col md={4} className="text-md-left mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope className="mx-1" />
              <a href="mailto:info@atdauto.com">info@atdauto.net</a>
            </p>
            <p>
              <FaPhone className="mx-1" />
              <a href="tel:1234567890">(123) 456-7890</a>
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white mx-2">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="text-white mx-2">
                <FaInstagram />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-md-right">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="mb-0">
              &copy; 2024 Attention to Detail Auto. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
