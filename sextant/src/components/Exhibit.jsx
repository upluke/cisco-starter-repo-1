import React from "react";
import "./Exhibit.css";

function Exhibit({ heading, children }) {
  return (
    <div className="exhibit">
      <h2 className="heading">{heading}</h2>
      <div className="content">{children}</div>
    </div>
  );
}

export default Exhibit;
