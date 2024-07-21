import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogoDiamond.css";
import { Container } from "react-bootstrap";
function LogoDiamond({
  size,
  sizeUnit = "em",
  color = "#e6e6e6",
  textColor = "#000000",
  textFontSize = "1.5",
  textFontSizeUnit = "em",
}) {
  return (
    <Container fluid className="logoContainer">
      <div
        className="logoText"
        style={{
          color: textColor,
          fontSize: `${textFontSize}${textFontSizeUnit}`,
        }}
      >
        Attention to Detail
      </div>
    </Container>
  );
}

export default LogoDiamond;
