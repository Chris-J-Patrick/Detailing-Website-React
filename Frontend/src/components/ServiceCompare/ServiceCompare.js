import React from "react";
import { Table } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const ServicesCompare = () => {
  const services = [
    {
      title: "Basic Detail",
      level: 1,
      inclusions: [
        "Pressure Wash",
        "Foam Soak",
        "Two Bucket Hand Wash",
        "Interior Vacuum",
        "Interior Protection",
        "Wheel Cleaning",
        "Tire Dressing",
        "Glass Cleaning",
        "6 Month Paint Protection",
        "Glass Coating",
      ],
    },
    {
      title: "Deluxe Detail",
      level: 2,
      inclusions: [
        "Clay Bar treatment",
        "One-Step Paint Correction",
        "12 Month Ceramic Coating or Hand Wax",
        "12 Month Glass Coating",
        "Undercarriage wash",
      ],
    },
    {
      title: "Premium Detail",
      level: 3,
      inclusions: [
        "Two-Step Paint Correction",
        "Two Year Premium Ceramic Coating",
        "Two Year Premium Glass Coating",
      ],
    },
    {
      title: "Ultimate Detail",
      level: 4,
      inclusions: [
        "Three-Step Paint Correction",
        "Five Year Premium Ceramic Coating",
        "Five Year Premium Ceramic Glass Coating",
        "Five Year Warranty on Ceramic Coatings",
      ],
    },
  ];

  const includesFeature = (service, feature) => {
    for (let i = service.level - 1; i >= 0; i--) {
      if (services[i].inclusions.includes(feature)) {
        return true;
      }
    }
    return false;
  };

  const allInclusions = [
    ...new Set(services.flatMap((service) => service.inclusions)),
  ];

  return (
    <Table responsive="sm" bordered hover striped size="sm">
      <thead className="thead-light">
        <tr>
          <th>Services</th>
          {services.map((service, index) => (
            <th key={index}>{service.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allInclusions.map((inclusion, index) => (
          <tr key={index}>
            <td>{inclusion}</td>
            {services.map((service, serviceIndex) => (
              <td key={serviceIndex}>
                {includesFeature(service, inclusion) ? (
                  <FaCheck className="text-success" />
                ) : (
                  "-"
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ServicesCompare;
