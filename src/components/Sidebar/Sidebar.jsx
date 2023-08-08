/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Follow } from "../Follow";
import { New } from "../New";
import { Popular } from "../Popular";
import "./style.css";

export const Sidebar = ({
  dark,
  className,
  mainClassName,
  newClassName,
  mainClassNameOverride,
  newIconClassName,
  newNewClassName,
  newGroupDivClassName,
  newGroupGroupClassName,
  newGroupOverlapGroupClassName,
  titleClassName,
  divClassName,
  divClassNameOverride,
  popularClassName,
  mainClassName1,
  popularIconClassName,
  popularPopular = "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/frame-15-2.svg",
  popularPopularClassName,
  titleClassNameOverride,
  divClassName1,
  pClassName,
  followingClassName,
  mainClassName2,
  followingIconClassName,
  followFollowClassName,
  followFollow = "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/follow-3.svg",
  titleClassName1,
  nAmeClassName,
  divClassName2,
  frameClassName,
  divClassName3,
  pClassNameOverride,
}) => {
  return (
    <div className={`sidebar ${dark} ${className}`}>
      <div className={`main ${mainClassName}`}>
        <div className={`main-wrapper ${newClassName}`}>
          <div className={`main-2 ${mainClassNameOverride}`}>
            <div className={`new-icon ${newIconClassName}`}>
              <New
                className={newNewClassName}
                groupDivClassName={newGroupDivClassName}
                groupGroupClassName={newGroupGroupClassName}
                groupOverlapGroupClassName={newGroupOverlapGroupClassName}
              />
            </div>
            <div className={`title ${titleClassName}`}>
              <div className={`text-wrapper-9 ${divClassName}`}>Newest and Recent</div>
              <div className={`text-wrapper-10 ${divClassNameOverride}`}>Find the latest update</div>
            </div>
          </div>
        </div>
        <div className={`popular-2 ${popularClassName}`}>
          <div className={`main-2 ${mainClassName1}`}>
            <div className={`popular-icon ${popularIconClassName}`}>
              <Popular className={popularPopularClassName} popular={popularPopular} />
            </div>
            <div className={`title ${titleClassNameOverride}`}>
              <div className={`text-wrapper-11 ${divClassName1}`}>Popular of the day</div>
              <p className={`text-wrapper-10 ${pClassName}`}>Shots featured today by curators</p>
            </div>
          </div>
        </div>
        <div className={`following ${followingClassName}`}>
          <div className={`main-2 ${mainClassName2}`}>
            <div className={`following-icon ${followingIconClassName}`}>
              <Follow className={followFollowClassName} follow={followFollow} />
            </div>
            <div className={`title ${titleClassName1}`}>
              <div className={`n-ame ${nAmeClassName}`}>
                <div className={`text-wrapper-12 ${divClassName2}`}>Following</div>
                <div className={`frame ${frameClassName}`}>
                  <div className={`text-wrapper-13 ${divClassName3}`}>24</div>
                </div>
              </div>
              <p className={`text-wrapper-10 ${pClassNameOverride}`}>Explore from your favorite person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  dark: PropTypes.oneOf(["off", "on"]),
  popularPopular: PropTypes.string,
  followFollow: PropTypes.string,
};
