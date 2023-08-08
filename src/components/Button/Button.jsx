/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavigationColorDot } from "../NavigationColorDot";
import "./style.css";

export const Button = ({
  number = "1",
  showRightIcon = true,
  showLeftIcon = true,
  text = "Button",
  type,
  size,
  corner,
  style,
  className,
  override = (
    <NavigationColorDot icon="https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg" />
  ),
}) => {
  return (
    <div className={`button style-4-${style} type-5-${type} size-9-${size} corner-4-${corner} ${className}`}>
      {["default", "dropdown", "right-icon", "round"].includes(type) && (
        <div className="div-3">
          {["default", "dropdown", "right-icon"].includes(type) && <>{text}</>}

          {type === "round" && <>{number}</>}
        </div>
      )}

      {type === "icon" && <>{override}</>}

      {["left-icon", "two-icons"].includes(type) && (
        <>
          <>
            {showLeftIcon && (
              <NavigationColorDot
                className={`${size === "small" && "class-6"} ${size === "extra-small" && "class-7"}`}
                icon={
                  style === "primary" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-233.svg"
                    : size === "extra-small" && style === "primary"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-185.svg"
                    : style === "light" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg"
                    : style === "light" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-232.svg"
                    : size === "extra-small" && style === "light"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-184.svg"
                    : style === "dark" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-225.svg"
                    : size === "small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-221.svg"
                    : size === "extra-small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-175.svg"
                    : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-255.svg"
                }
                iconClassName={`${size === "small" && "class-4"} ${size === "extra-small" && "class-5"}`}
              />
            )}
          </>
          <div className="text-wrapper-2">{text}</div>
        </>
      )}

      {["right-icon", "two-icons"].includes(type) && (
        <>
          <>
            {showRightIcon && (
              <NavigationColorDot
                className={`${size === "extra-small" ? "class-7" : "class-6"}`}
                icon={
                  style === "light" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg"
                    : style === "primary" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-233.svg"
                    : style === "light" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-232.svg"
                    : size === "extra-small" && style === "primary"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-229.svg"
                    : size === "extra-small" && style === "light"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-228.svg"
                    : style === "dark" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-225.svg"
                    : size === "small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-221.svg"
                    : size === "extra-small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-219.svg"
                    : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-255.svg"
                }
                iconClassName={`${size === "extra-small" ? "class-5" : "class-4"}`}
              />
            )}
          </>
        </>
      )}

      {type === "dropdown" && (
        <img
          className="icon-3"
          alt="Icon"
          src={
            style === "light" && ["default", "large"].includes(size)
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-216.svg"
              : style === "primary" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-209.svg"
              : style === "light" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-208.svg"
              : size === "extra-small" && style === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-205.svg"
              : size === "extra-small" && style === "light"
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-204.svg"
              : style === "dark" && ["default", "large"].includes(size)
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-201.svg"
              : size === "small" && style === "dark"
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-197.svg"
              : size === "extra-small" && style === "dark"
              ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-195.svg"
              : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-217.svg"
          }
        />
      )}
    </div>
  );
};

Button.propTypes = {
  number: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "default", "round", "two-icons", "left-icon", "right-icon", "dropdown"]),
  size: PropTypes.oneOf(["large", "small", "extra-small", "default"]),
  corner: PropTypes.oneOf(["rounded", "rectangle"]),
  style: PropTypes.oneOf(["primary", "dark", "light"]),
};
