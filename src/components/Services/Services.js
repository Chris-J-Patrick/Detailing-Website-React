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
    price: "$149.99",
    salePrice: "$129.99",
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
      "https://squareup.com/appointments/buyer/widget/4zswtc5co77mu8/LZXAGKBY2SVMC", // Replace with the actual URL for this service
  },
  {
    title: "Deluxe Detail",
    icon: <FaWater />,
    description:
      "Advanced cleaning techniques and 12 Months of increased Gloss and Protection.",
    price: "$299.99",
    salePrice: "$249.99",
    inclusions: [
      "Clay Bar treatment to remove embedded paint contaminates",
      "One-Step Paint Correction",
      "12 Month Ceramic Coating or Hand Wax",
      "12 Month Glass Coating",
      "Undercarriage wash",
    ],
    schedulingUrl:
      "https://squareup.com/appointments/buyer/widget/g3taquupuwf9mc/LZXAGKBY2SVMC", // Replace with the actual URL for this service
  },
  // ... more services with their respective schedulingUrl

  {
    title: "Premium Detail",
    icon: <FaPaintBrush />,
    description: "2 Years of Extreme Gloss and Protection",
    price: "$399.99",
    salePrice: "$299.99",
    isMostPopular: true,
    inclusions: [
      "Two-Step Paint Correction",
      "Two Year Premium Ceramic Coating",
      "Two Year Premium Glass Coating",
    ],
    schedulingUrl:
      "https://squareup.com/appointments/buyer/widget/j6oq1du564lybv/LZXAGKBY2SVMC", // Replace with the actual URL for this service
  },
  {
    title: "Ultimate Detail",
    icon: <FaMedal />,
    description: "5 Years of ULTIMATE Gloss and Protection",
    price: "$849.99",
    salePrice: "$649.99",
    inclusions: [
      "Three-Step Paint Correction",
      "Five Year Premium Ceramic Coating",
      "Five Year Premium Ceramic Glass Coating",
      "Five Year Warranty on Ceramic Coatings",
    ],
    schedulingUrl:
      "https://squareup.com/appointments/buyer/widget/tzp0t7iur35pz6/LZXAGKBY2SVMC", // Replace with the actual URL for this service
  },
  {
    title: "Custom Detail",
    icon: <FaMagic />,
    description: "Protective waxing.",
    price: "$$$$$$$$",
    inclusions: ["Buffing", "High-quality wax", "Protective sealant"],
    schedulingUrl:
      "https://squareup.com/appointments/buyer/widget/5bc0lgsjfn7l1p/LZXAGKBY2SVMC", // Replace with the actual URL for this service
  },
];

export default Services;