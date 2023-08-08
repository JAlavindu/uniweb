/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonWrapper = ({ className, divClassName, text = "sdsdsdsd" }) => {
  return (
    <div className={`button-wrapper ${className}`}>
      <div className={`sdsdsdsd ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonWrapper.propTypes = {
  text: PropTypes.string,
};
