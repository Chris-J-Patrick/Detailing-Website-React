import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ShApp from "../ShApp/ShApp";
import ServicesCompare from "../ServiceCompare/ServiceCompare";
import SmoothScroll from "smooth-scroll";

function ServiceTable({ services }) {
  useEffect(() => {
    new SmoothScroll(".scroll-to-compare", {
      speed: 300,
      speedAsDuration: true,
      easing: "easeInOutCubic",
      offset: 70,
    });
  }, []);

  return (
    <div className="servicesTable container-fluid bg-light py-4 justify-content-center">
      <div className="alert alert-info text-center" role="alert">
        <strong>Advancing to a higher tier?</strong> Rest assured, all the
        services from the lower tiers come with you.
        <NavLink
          className="btn btn-primary btn-sm ml-3 scroll-to-compare"
          to="#service-compare"
        >
          Compare All Services
        </NavLink>
      </div>

      <div className="row">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4 mb-4 ">
            <div
              className={`card ${
                service.isMostPopular ? "border-primary" : ""
              }`}
            >
              {service.isMostPopular && (
                <div className="card-header bg-primary text-white">
                  Most Popular
                </div>
              )}
              <div className="card-body">
                <h4 className="card-title">{service.title}</h4>
                <p className="card-text">{service.description}</p>
                <h5>
                  {service.salePrice ? (
                    <>
                      <span className="text-danger">{service.salePrice}</span>
                      <span className="text-muted">
                        <del>{service.price}</del>
                      </span>
                    </>
                  ) : (
                    <span>{service.price}</span>
                  )}
                </h5>
                <ul className="list-unstyled">
                  {service.inclusions.map((inclusion, index) => (
                    <li className="" key={index}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-success"
                      />{" "}
                      <span>{inclusion}</span>
                    </li>
                  ))}
                </ul>
                <ShApp
                  serviceUrl={service.schedulingUrl}
                  buttonText="Schedule"
                />
              </div>
            </div>
          </div>
        ))}
        <ServicesCompare />
      </div>
    </div>
  );
}

ServiceTable.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      salePrice: PropTypes.string,
      inclusions: PropTypes.arrayOf(PropTypes.string).isRequired,
      schedulingUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServiceTable;
