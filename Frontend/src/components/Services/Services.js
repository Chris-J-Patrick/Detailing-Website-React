import React from "react";
import ServiceTable from "../ServiceTable/ServiceTable"; // Importing the new ServicesTable component
import "./Services.css";
import {
  FaCarSide,
  FaWater,
  FaPaintBrush,
  FaMedal,
  FaMagic,
} from "react-icons/fa"; // Choose the appropriate icons here

function Services() {
  return <ServiceTable services={servicesData}></ServiceTable>;
}

const servicesData = [
  {
    title: "Basic Detail",
    icon: <FaCarSide />,
    description: "Thorough cleaning and 6-12 Months of Protection",
    price: "$169.99",
    salePrice: "$149.99",
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
    schedulingUrl:
      "https://AttentiontoDetailAuto.as.me/?appointmentType=56802077",
  },
  {
    title: "Deluxe Detail",
    icon: <FaWater />,
    description:
      "Advanced cleaning techniques and 12 Months of increased Gloss and Protection.",
    price: "$399.99",
    isMostPopular: true,

    salePrice: "$299.99",
    inclusions: [
      "Basic Detail",
      "Clay Bar treatment to remove embedded paint contaminates",
      "One-Step Paint Correction",
      "12 Month Ceramic Coating or Hand Wax",
      "12 Month Glass Coating",
      "Undercarriage wash",
    ],
    schedulingUrl:
      "https://AttentiontoDetailAuto.as.me/?appointmentType=56802692",
  },

  {
    title: "Premium Detail",
    icon: <FaPaintBrush />,
    description: "2 Years of Extreme Gloss and Protection",
    price: "$499.99",
    salePrice: "$399.99",
    inclusions: [
      "Two-Step Paint Correction",
      "Two Year Premium Ceramic Coating",
      "Two Year Premium Glass Coating",
    ],
    schedulingUrl:
      "https://AttentiontoDetailAuto.as.me/?appointmentType=56802718",
  },
  {
    title: "Ultimate Detail",
    icon: <FaMedal />,
    description: "5 Years of ULTIMATE Gloss and Protection",
    price: "$999.99",
    salePrice: "$799.99",
    inclusions: [
      "Three-Step Paint Correction",
      "Five Year Premium Ceramic Coating",
      "Five Year Premium Ceramic Glass Coating",
      "Five Year Warranty on Ceramic Coatings",
    ],
    schedulingUrl:
      "https://AttentiontoDetailAuto.as.me/?appointmentType=56802761",
  },
  {
    title: "Custom Detail",
    icon: <FaMagic />,
    description: "Protective waxing.",
    price: "$$$$$$$$",
    inclusions: ["Buffing", "High-quality wax", "Protective sealant"],
    schedulingUrl:
      "https://app.acuityscheduling.com/schedule.php?owner=31108192&ref=booking_button",
  },
];

export default Services;
