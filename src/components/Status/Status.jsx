/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Status = ({ type, border, style, className }) => {
  return <div className={`status ${type} ${border} style-7-${style} ${className}`} />;
};

Status.propTypes = {
  type: PropTypes.oneOf(["color-border", "color-center", "center-color"]),
  border: PropTypes.oneOf(["two", "three", "four"]),
  style: PropTypes.oneOf(["dark", "light"]),
};
