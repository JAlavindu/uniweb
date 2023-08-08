/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Downvote } from "../Downvote";
import { Upvote } from "../Upvote";
import "./style.css";

export const UpDownVotes = ({
  className,
  upDownVotesClassName,
  divClassName,
  divClassNameOverride,
  upvoteUpvoteClassName,
  upvoteUpvote = "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/upvote-4.svg",
  downvoteDownvoteClassName,
  downvoteDownvote = "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/downvote-4.svg",
}) => {
  return (
    <div className={`up-down-votes ${className}`}>
      <div className="overlap-group-2">
        <div className={`div-4 ${upDownVotesClassName}`} />
        <div className={`text-wrapper-3 ${divClassName}`}>Upvote . 48K</div>
        <div className={`text-wrapper-4 ${divClassNameOverride}`}>|</div>
        <Upvote className={upvoteUpvoteClassName} upvote={upvoteUpvote} />
        <Downvote className={downvoteDownvoteClassName} downvote={downvoteDownvote} />
      </div>
    </div>
  );
};

UpDownVotes.propTypes = {
  upvoteUpvote: PropTypes.string,
  downvoteDownvote: PropTypes.string,
};
