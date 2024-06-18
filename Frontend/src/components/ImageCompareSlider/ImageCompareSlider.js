import React, { useState, useRef } from "react";
import "./ImageCompareSlider.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
function ImageCompareSlider() {
  const FIRST_IMAGE = {
    imageUrl: "after.jpeg",
  };
  const SECOND_IMAGE = {
    imageUrl: "before.jpeg",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mx-auto h-100">
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </div>
      </div>
    </div>
  );
}
export default ImageCompareSlider;
