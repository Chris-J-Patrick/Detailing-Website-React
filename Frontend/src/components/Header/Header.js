import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import LogoDiamond from "../LogoDiamond/LogoDiamond";
import "./Header.css";

function Header() {
  const NAV_LINKS = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/testimonials", text: "Testimonials" },
    { path: "/contact", text: "Contact" },
    { path: "/services", text: "Services" },
    { path: "/rewards", text: "Rewards" },
  ];

  const [isShrunk, setIsShrunk] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shrinkOn = 100;
      setIsShrunk(window.scrollY > shrinkOn);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      expanded={expanded}
      onToggle={setExpanded}
      className={`Header ${isShrunk ? "navbar-shrink" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand as={RouterNavLink} to="/" className="me-3">
          <LogoDiamond
            size={isShrunk ? 0.8 : 1.2}
            sizeUnit="em"
            color="#ffffff"
            textColor="#ffffff"
            textFontSize={isShrunk ? 0.8 : 1.2}
            textFontSizeUnit="em"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {NAV_LINKS.map((link, index) => (
              <Nav.Link
                as={RouterNavLink}
                to={link.path}
                key={index}
                className="mx-2"
                onClick={handleNavLinkClick}
              >
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
