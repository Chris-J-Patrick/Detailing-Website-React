import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import "./HomePage.css";
import LogoDiamond from "../LogoDiamond/LogoDiamond";
import ImageCompareSlider from "../ImageCompareSlider/ImageCompareSlider";
function HomePage() {
  const [showBanner, setShowBanner] = useState(true);
  const [bannerTransition, setBannerTransition] = useState(false);

  const handleCloseBanner = () => {
    setBannerTransition(true);
    setTimeout(() => setShowBanner(false), 300);
  };

  return (
    <div className=" homepage-content">
      {showBanner && (
        <div
          className={`alert col m-1 alert-warning alert-dismissible fade ${
            bannerTransition ? "fade-out" : "show"
          }`}
          role="alert"
        >
          <strong>Limited Time Sale!</strong> Enter Code: "Grand10" for an extra
          10% off - GRAND OPENING!
          <button
            type="button"
            className="btn-close"
            onClick={handleCloseBanner}
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="Welcome rounded-1">
        <div className="text-center mb-1">
          <LogoDiamond
            size={6}
            sizeUnit="dvw"
            color="white"
            textColor="white"
            textFontSize={6}
            textFontSizeUnit="dvw"
          />
        </div>
        <p className="fs-5 text-center mb-4">
          Your destination for{" "}
          <span className="Highlight">premier car detailing</span>. Experience{" "}
          <span className="Highlight">unparalleled shine</span>, inside and out!
        </p>
        <div className="d-flex flex-wrap justify-content-center m-4">
          {[
            {
              title: "Hassle-Free Online Booking",
              detail: "Book in less than 30 seconds!",
            },
            {
              title: "Flat Rates",
              detail: "Same price for all sizes! Cars & Trucks.",
            },
            {
              title: "Price Match Guarantee",
              detail:
                "Best Price & Service Guarantee - if you find a better price, we will beat it!",
            },
            {
              title: "Fully Insured",
              detail: "Full Coverage Insurance for your peace of mind",
            },
            {
              title: "Paint Correction",
              detail:
                "Process of removing imperfections to create the ultimate shine.",
            },
            {
              title: "Ceramic Coatings",
              detail: "Offering Industry leading paint protection",
            },
          ].map((feature, index) => (
            <div
              className="m-2 p-2 border rounded text-center bg-white"
              key={index}
            >
              <FaCheck className="text-success me-2" />
              <strong>{feature.title}</strong>
              <div>{feature.detail}</div>
            </div>
          ))}
        </div>
        <div className="text-center mb-1">
          <Link to="/services" className="btn btn-primary btn-lg">
            View Our Services
          </Link>
        </div>
        <h5 className="text-center">Starting at ONLY $149.99</h5>
      </div>

      <div className="my-5">
        <h3 className="text-center mb-4">
          See the difference our detailing makes!
        </h3>
        <ImageCompareSlider />

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            {
              title: "Unparalleled Value",
              description:
                "Delivering top-quality service at competitive prices, we ensure excellence without overspending. Our services are designed to exceed expectations affordably.",
            },
            {
              title: "Easiest Scheduling in the Industry!",
              description:
                "With our user-friendly online platform, booking services is quick and hassle-free. Enjoy efficient scheduling in under a minute.",
            },
            {
              title: "Passion and Enthusiasm",
              description:
                "More than a business, our passionate team is committed to excellence, offering detailed, creative solutions for unparalleled customer satisfaction.",
            },
            {
              title: "Embracing Sustainability",
              description:
                "Committed to eco-friendly practices, we use sustainable products and methods to provide services that respect the environment.",
            },
            {
              title: "Expert Team with Exceptional Skill",
              description:
                "Our expert team brings unparalleled skill and industry knowledge, ensuring top-quality results and setting the standard in our field.",
            },
          ].map((feature, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
