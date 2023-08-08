/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Heart } from "../Heart";
import { Share } from "../Share";
import { Star } from "../Star";
import { UpDownVotes } from "../UpDownVotes";
import "./style.css";

export const ReactionBar = ({ className }) => {
  return (
    <div className={`reaction-bar ${className}`}>
      <div className="text-wrapper-5">Share</div>
      <Share
        className="share-instance"
        share="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/share-1.svg"
      />
      <div className="text-wrapper-6">Star</div>
      <Star
        className="star-instance"
        star="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/star-2.svg"
      />
      <div className="text-wrapper-7">Love</div>
      <Heart
        className="heart-instance"
        heart="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/heart-1.svg"
      />
      <UpDownVotes
        className="UP-down-votes"
        divClassName="design-component-instance-node"
        divClassNameOverride="UP-down-votes-2"
        downvoteDownvote="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/downvote-1.svg"
        downvoteDownvoteClassName="UP-down-votes-4"
        upDownVotesClassName="up-down-votes-instance"
        upvoteUpvote="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/upvote-1.svg"
        upvoteUpvoteClassName="UP-down-votes-3"
      />
    </div>
  );
};
