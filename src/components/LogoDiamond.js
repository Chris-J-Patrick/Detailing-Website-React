import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import "./LogoDiamond.css";

function LogoDiamond({
  size,
  sizeUnit = "em",
  color = "#e6e6e6",
  textColor = "#000000",
  textFontSize = "1.5",
  textFontSizeUnit = "em",
}) {
  return (
    <div className="logoContainer">
      <div
        className="logoText"
        style={{
          color: textColor,
          fontSize: `${textFontSize}${textFontSizeUnit}`,
        }}
      >
        Attention to Detail
      </div>
      <IoDiamondOutline
        color={color}
        size={`${size}${sizeUnit}`}
        className="logoIcon"
      />
    </div>
  );
}

export default LogoDiamond;
