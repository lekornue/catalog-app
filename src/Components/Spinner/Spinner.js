import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
