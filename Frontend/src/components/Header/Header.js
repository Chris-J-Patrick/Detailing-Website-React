import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

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

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isShrunk ? "navbar-shrink" : ""
      } fixed-top`}
    >
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {NAV_LINKS.map((link, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={closeNavbar}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
        {" "}
        <LogoDiamond
          size={isShrunk ? 0.8 : 1.2}
          sizeUnit="em"
          color="#ffffff"
          textColor="#ffffff"
          textFontSize={isShrunk ? 0.8 : 1.2}
          textFontSizeUnit="em"
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default Header;
