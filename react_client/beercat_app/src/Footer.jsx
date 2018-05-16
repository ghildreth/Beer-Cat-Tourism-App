import React from "react";
import { render } from "react-dom";

function Footer({ children }) {
  return (
    <div>
      <div className= "phantomStyle" />
      <div className="footerStyle">{children}</div>
    </div>
  );
}

export default Footer