import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ServiceTable.css";
import ShApp from "../ShApp/ShApp";
import SmoothScroll from "smooth-scroll";
import ServicesCompare from "../ServiceCompare/ServiceCompare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function ServiceTable({ services }) {
  useEffect(() => {
    new SmoothScroll(".scroll-to-compare", {
      speed: 300,
      speedAsDuration: true,
      easing: "easeInOutCubic",
      offset: 70, // Offset for fixed header height
    });
  }, []);

  return (
    <div className="servicesTable row justify-content-center align-items-center">
      <div class="alert custom-alert " role="alert">
        <strong>Advancing to a higher tier? </strong>Rest assured, all the
        services from the lower tiers come with you.
        <a
          className="compare-button btn btn-primary btn-sm scroll-to-compare"
          data-scroll
          href="#service-compare"
        >
          Compare All Services
        </a>
      </div>

      <div className="row ">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="container card col-12 col-sm-5 col-md-4 col-lg-3"
          >
            {service.isMostPopular && (
              <div className="most-popular-banner">Most Popular</div>
            )}
            <div className="service-card-header text-center">
              <h4 className="mb-1">
                {service.title} {service.icon}
              </h4>
              <p>{service.description}</p>
              <h5 className="mt-0">
                {service.salePrice ? (
                  <>
                    <span className="sale-price">{service.salePrice}</span>{" "}
                    <span className="original-price">{service.price}</span>
                  </>
                ) : (
                  service.price
                )}
              </h5>
            </div>
            <ul className="service-card-inclusions">
              {service.inclusions.map((inclusion, index) => (
                <li className="ServiceCardItems" key={index}>
                  <i className="check-icon">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "green", fontSize: "1em" }}
                    />
                  </i>{" "}
                  {inclusion}
                </li>
              ))}
            </ul>
            <ShApp
              serviceUrl={
                "https://app.acuityscheduling.com/schedule.php?owner=31108192"
              }
              buttonText={"Schedule"}
            />
          </div>
        ))}
      </div>

      <ServicesCompare />
    </div>
  );
}

ServiceTable.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      inclusions: PropTypes.arrayOf(PropTypes.string).isRequired,
      schedulingUrl: PropTypes.string.isRequired, // Ensure this property exists in your services
    })
  ).isRequired,
};

export default ServiceTable;
