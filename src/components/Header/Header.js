import React, { useEffect, useState } from "react";
import { Form, NavLink } from "react-router-dom";
import LogoDiamond from "../LogoDiamond/LogoDiamond";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapsible = document.querySelector(".navbar-collapse");

    if (navbarToggler && !navbarToggler.classList.contains("collapsed")) {
      navbarToggler.click();
    }
  };
  const [TextSize, setTextSize] = useState("1.5em");

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.offsetHeight;
    const shrinkPoint = navbarHeight / 4;
    const logoContainer = document.querySelector(".logoContainer");
    const logoIcon = document.querySelector(".logoIcon");
    const logoText = document.querySelector(".logoText");
    const NavContainer = document.querySelector(".NavContainer");

    const handleScroll = () => {
      if (window.scrollY > shrinkPoint) {
        navbar.classList.add("navbarshrink");
        logoContainer.classList.add("LogoContainer-shrink");
        logoIcon.classList.add("logoIcon-shrink");
        logoText.classList.add("logoTextshrink");
        NavContainer.classList.add("NavContainer-shrink");
      } else {
        navbar.classList.remove("navbarshrink");
        logoContainer.classList.remove("LogoContainer-shrink");
        logoIcon.classList.remove("logoIcon-shrink");
        logoText.classList.remove("logoTextshrink");
        NavContainer.classList.remove("NavContainer-shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup - remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/"
              onClick={closeNavbar}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/about"
              onClick={closeNavbar}
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/Testimonials"
              onClick={closeNavbar}
            >
              Testimonials
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/Contact"
              onClick={closeNavbar}
            >
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/Services"
              onClick={closeNavbar}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink className="navbar-brand active" to="/">
        <LogoDiamond
          size="1.5"
          sizeUnit="em"
          color="#ffffff"
          textColor="#ffffff"
          textFontSize={TextSize}
          textFontSizeUnit="em"
        />
      </NavLink>
    </nav>
  );
}

export default Header;
