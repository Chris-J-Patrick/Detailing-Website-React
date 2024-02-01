import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./HomePage.css";
import LogoDiamond from "../LogoDiamond/LogoDiamond";
import { useState } from "react"; // Import useState here
import ParticlesBackground from "../ParticlesBackground";
import ImageCompareSlider from "../ImageCompareSlider/ImageCompareSlider";
import beforeafter2 from "../beforeafter2.jpeg";
import beforeafter from "../beforeafter.jpeg";

function HomePage() {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerTransition, setBannerTransition] = useState(false);

  const handleCloseBanner = () => {
    setBannerTransition(true); // Start the transition
    setTimeout(() => setShowBanner(false), 300); // Hide banner after transition duration
  };
  return (
    <div className="homepage-content">
      {showBanner && (
        <div
          className={`limited-time-banner${
            bannerTransition ? "banner-hide" : ""
          }`}
        >
          <p className="m-3">
            Limited Time Sale + Enter Code: "Grand10" For An Extra 10% Off -
            GRAND OPENING!
          </p>
          <button
            onClick={handleCloseBanner}
            className="btn btn-info close-banner"
          >
            x
          </button>
        </div>
      )}
      <div className="Welcome">
        <div className="homelogo">
          {" "}
          <LogoDiamond
            size={7}
            sizeUnit="vw"
            color="white"
            textColor="white"
            textFontSize={7}
            textFontSizeUnit="vw"
          />
        </div>
        <p className="HeaderSubtitle">
          Your destination for{" "}
          <span className="Highlight">premier car detailing</span>. Experience{" "}
          <span className="Highlight">unparalleled shine</span>, inside and out!
        </p>
        <div className="CheckMarkFitContainer">
          <div className="checkmark-feature-item">
            <FaCheck className="checkmark" />
            Hassle-Free Online Booking
            <span className="detail">Book in less than 30 seconds!</span>
          </div>

          <div className="checkmark-feature-item">
            <FaCheck className="checkmark" />
            Flat Rates
            <span className="detail">
              Same price for all sizes! Cars & Trucks.
            </span>
          </div>
          <div className="checkmark-feature-item">
            <FaCheck className="checkmark" />
            Price Match Guarantee
            <span className="detail">
              Best Price & Service Guarantee - if you find a better price, we
              will beat it!
            </span>
          </div>
          <div className="checkmark-feature-item">
            <FaCheck className="checkmark" />
            Fully Insured
            <span className="detail">
              Full Coverage Insurance for your peace of mind
            </span>
          </div>
          <div className="checkmark-feature-item">
            <FaCheck className="checkmark" />
            Paint Correction
            <span className="detail">
              Process of removing imperfections to create the ultimate shine.
            </span>
          </div>
          <div className="checkmark-feature-item">
            <FaCheck className="checkmark" />
            Ceramic Coatings
            <span className="detail">
              Offering Industry leading paint protection
            </span>
          </div>
        </div>
        <div>
          <Link to="/services" className="btn btn-primary btn-lg">
            View Our Services
          </Link>{" "}
        </div>
        <h5>Starting at ONLY $149.99</h5>
      </div>
      <div className="why-choose-us">
        <h3 className="text-center">See the difference our detailing makes!</h3>
        <img src={beforeafter} className="beforeafter"></img>
        <img src={beforeafter2} className="beforeafter"></img>

        <div className="features mt-4">
          <div className="feature-item">
            <h5>Unparalleled Value</h5>
            <p>
              Delivering top-quality service at competitive prices, we ensure
              excellence without overspending. Our services are designed to
              exceed expectations affordably.
            </p>
          </div>
          <div className="feature-item">
            <h5>Easiest Scheduling in the Industry!</h5>
            <p>
              With our user-friendly online platform, booking services is quick
              and hassle-free. Enjoy efficient scheduling in under a minute.
            </p>
          </div>
          <div className="feature-item">
            <h5>Passion and Enthusiasm</h5>
            <p>
              More than a business, our passionate team is committed to
              excellence, offering detailed, creative solutions for unparalleled
              customer satisfaction.
            </p>
          </div>
          <div className="feature-item">
            <h5>Embracing Sustainability</h5>
            <p>
              Committed to eco-friendly practices, we use sustainable products
              and methods to provide services that respect the environment.
            </p>
          </div>
          <div className="feature-item">
            <h5>Expert Team with Exceptional Skill</h5>
            <p>
              Our expert team brings unparalleled skill and industry knowledge,
              ensuring top-quality results and setting the standard in our
              field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
