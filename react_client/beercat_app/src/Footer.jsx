import React from "react";
import { render } from "react-dom";

const footerStyle = {
  backgroundColor: "#cccccc",
  fontSize: "20px",
  color: "black",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

export default Footer