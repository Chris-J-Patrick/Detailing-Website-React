import React, { useEffect, useState } from "react";
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
  ];

  const [isShrunk, setIsShrunk] = useState(false);

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (
      navbarToggler &&
      navbarToggler.getAttribute("aria-expanded") === "true"
    ) {
      navbarToggler.click();
    }
  };

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

  return (
    <nav
      className={`navbar navbar-expand-lg ${isShrunk ? "navbarshrink" : ""}`}
    >
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
        <div className="collapse navbar-collapse" id="navbarNav">
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
      </div>
      <NavLink className="navbar-brand" to="/">
        <LogoDiamond
          size={isShrunk ? "1" : "1.5"}
          sizeUnit="em"
          color="#ffffff"
          textColor="#ffffff"
          textFontSize={isShrunk ? "1" : "1.5"}
          textFontSizeUnit="em"
        />
      </NavLink>
    </nav>
  );
}

export default Header;
