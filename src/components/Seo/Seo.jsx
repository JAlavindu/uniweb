/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Seo = ({
  className,
  seo = "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/seo-1.svg",
}) => {
  return <img className={`seo ${className}`} alt="Seo" src={seo} />;
};

Seo.propTypes = {
  seo: PropTypes.string,
};
