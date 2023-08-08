/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Polls = ({ className }) => {
  return (
    <div className={`polls ${className}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="overlap">
            <img
              className="vector"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/vector-5.svg"
            />
            <img
              className="img"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/vector-3.svg"
            />
          </div>
          <div className="text-wrapper">Polls</div>
        </div>
      </div>
    </div>
  );
};
