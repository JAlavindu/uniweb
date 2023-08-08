/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ActionSearch = ({
  icon = "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-8.svg",
}) => {
  return (
    <div className="action-search">
      <img className="icon" alt="Icon" src={icon} />
    </div>
  );
};

ActionSearch.propTypes = {
  icon: PropTypes.string,
};
