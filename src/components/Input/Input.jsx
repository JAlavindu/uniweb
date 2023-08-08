/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { NavigationColorDot } from "../NavigationColorDot";
import "./style.css";

export const Input = ({
  labelText = "Label",
  text = "Text",
  type,
  size,
  corner,
  label,
  style,
  className,
  override = <NavigationColorDot className="navigation-color-dot-3" />,
  inputClassName,
}) => {
  return (
    <div className={`input label-${label} ${corner} ${type} ${size} ${style} ${className}`}>
      {!label && type === "default" && <div className="text">{text}</div>}

      {type === "left-icon" && !label && (
        <>
          {override}
          <div className={`div ${inputClassName}`}>{text}</div>
        </>
      )}

      {!label && ["right-icon", "two-icons"].includes(type) && (
        <>
          <div className="text-2">
            {type === "right-icon" && <>{text}</>}

            {type === "two-icons" && (
              <>
                <NavigationColorDot
                  icon={
                    style === "dark"
                      ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-225.svg"
                      : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg"
                  }
                />
                <div className="text-3">{text}</div>
              </>
            )}
          </div>
          <NavigationColorDot
            className={`${size === "default" && "navigation-color-dot-3"} ${size === "small" && "class"}`}
            icon={
              style === "dark"
                ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-225.svg"
                : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg"
            }
          />
        </>
      )}

      {label && (
        <>
          <div className="label">
            <div className="label-2">{labelText}</div>
          </div>
          <div className={`div-2 ${inputClassName}`}>
            {type === "left-icon" && (
              <NavigationColorDot
                className={`${size === "default" && "navigation-color-dot-3"} ${size === "small" && "class-3"}`}
                icon={
                  style === "light" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-102.svg"
                    : style === "dark" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-225.svg"
                    : size === "small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-99.svg"
                    : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg"
                }
                iconClassName={`${size === "small" && "class-2"}`}
              />
            )}

            {["default", "left-icon"].includes(type) && <div className="text-4">{text}</div>}

            {["right-icon", "two-icons"].includes(type) && (
              <>
                <div className="text-5">
                  {type === "right-icon" && <>{text}</>}

                  {type === "two-icons" && (
                    <>
                      <NavigationColorDot
                        icon={
                          style === "dark"
                            ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-225.svg"
                            : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg"
                        }
                      />
                      <div className="text-6">{text}</div>
                    </>
                  )}
                </div>
                <NavigationColorDot
                  className={`${size === "default" && "navigation-color-dot-3"} ${size === "small" && "class"}`}
                  icon={
                    style === "dark"
                      ? "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-225.svg"
                      : "https://generation-sessions.s3.amazonaws.com/cbbcb22f2ce0bedaa37319e70672751a/img/icon-254.svg"
                  }
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(["right-icon", "two-icons", "left-icon", "default"]),
  size: PropTypes.oneOf(["large", "small", "default"]),
  corner: PropTypes.oneOf(["rounded", "rectangle"]),
  label: PropTypes.bool,
  style: PropTypes.oneOf(["dark", "light"]),
};
