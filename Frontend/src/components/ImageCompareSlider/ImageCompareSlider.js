import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import "./ImageCompareSlider.css";

function ImageCompareSlider({ firstImage, secondImage }) {
  const FIRST_IMAGE = {
    imageUrl: firstImage,
  };
  const SECOND_IMAGE = {
    imageUrl: secondImage,
  };

  return (
    <Container fluid className="image-compare-slider">
      <Row>
        <Col xs={10} md={7} lg={4} className="mx-auto">
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageCompareSlider;
