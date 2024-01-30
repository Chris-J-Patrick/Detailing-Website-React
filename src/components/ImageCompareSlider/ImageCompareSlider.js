import React, { useState, useRef } from "react";
import "./ImageCompareSlider.css"; // Make sure to create this CSS file

const ImageCompareSlider = ({ leftImage, rightImage }) => {
  return (
    <div className="image-comparison-container">
      <img src={leftImage} alt="Left" className="comparison-image" />
      <img src={rightImage} alt="Right" className="comparison-image" />
    </div>
  );
};

export default ImageCompareSlider;
