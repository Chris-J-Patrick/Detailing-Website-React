import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Scroll from "./components/Scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import Particles from "react-tsparticles";
import ParticlesBackground from "./components/ParticlesBackground";
import { useEffect, useMemo, useState } from "react";

import { loadFull } from "tsparticles";

function App() {
  return (
    <Router>
      <Scroll />
      <div className="AppContainer">
        <div className="NavContainer">
          {/* Navigation */}
          <Header />
        </div>

        <div className="ContentContainer">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/services" element={<Services />} />
            {/* ... other routes */}
          </Routes>
        </div>
        <div className="FooterContainer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
