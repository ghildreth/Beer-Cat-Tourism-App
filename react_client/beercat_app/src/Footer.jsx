import React from "react";

function Footer({ children }) {
  return (
    <div>
      <div className= "phantomStyle" />
      <div className="footerStyle">{children}</div>
    </div>
  );
}

export default Footer