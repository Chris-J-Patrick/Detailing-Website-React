import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <Row>
          <Col md={4} className="text-md-left mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>Email: info@attentiontodetail.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white mx-2">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-white mx-2">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-white mx-2">
                <FaLinkedin />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-md-right">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
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
