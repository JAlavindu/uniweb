/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Downvote = ({
  className,
  downvote = "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/downvote-4.svg",
}) => {
  return <img className={`downvote ${className}`} alt="Downvote" src={downvote} />;
};

Downvote.propTypes = {
  downvote: PropTypes.string,
};
