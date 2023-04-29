import React from "react";
import PropTypes from "prop-types";
import style from "./ReactRibbons.scss";

export const RibbonContainer = ({ children, className }) => {
  return (
    <div className={`${style.ribbonContainer} ${className || ""}`}>
      {children}
    </div>
  );
};

RibbonContainer.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

RibbonContainer.defaultProps = {
  className: undefined
};

const RightCornerRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightCornerRibbon}>
      <svg height="70" width="70">
        <polygon points="0 0, 0 10, 10 10" fill={`${backgroundColor}77`} strokeWidth="0" />
        <polygon points="0 0, 70 70, 70 40, 30 0" fill={backgroundColor} strokeWidth="0" />
        <polygon points="60 60, 60 70, 70 70" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightCornerRibbonText}>{children}</span>
    </div>
  );
};

RightCornerRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

RightCornerRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

const RightCornerLargeRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightCornerLargeRibbon}>
      <svg height="84" width="84">
        <polygon points="0 0, 0 12, 12 12" fill={`${backgroundColor}77`} strokeWidth="0" />
        <polygon points="0 0, 84 84, 84 48, 36 0" fill={backgroundColor} strokeWidth="0" />
        <polygon points="72 72, 72 84, 84 84" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightCornerLargeRibbonText}>{children}</span>
    </div>
  );
};

RightCornerLargeRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

RightCornerLargeRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

const LeftCornerRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.leftCornerRibbon}>
      <svg height="70" width="70">
        <g transform="rotate(-90, 35, 35)">
          <polygon points="0 0, 0 10, 10 10" fill={`${backgroundColor}77`} strokeWidth="0" />
          <polygon points="0 0, 70 70, 70 40, 30 0" fill={backgroundColor} strokeWidth="0" />
          <polygon points="60 60, 60 70, 70 70" fill={`${backgroundColor}77`} strokeWidth="0" />
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftCornerRibbonText}>{children}</span>
    </div>
  );
};

LeftCornerRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

LeftCornerRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

const LeftCornerLargeRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.leftCornerLargeRibbon}>
      <svg height="84" width="84">
        <g transform="rotate(-90, 42, 42)">
          <polygon points="0 0, 0 12, 12 12" fill={`${backgroundColor}77`} strokeWidth="0" />
          <polygon points="0 0, 84 84, 84 48, 36 0" fill={backgroundColor} strokeWidth="0" />
          <polygon points="72 72, 72 84, 84 84" fill={`${backgroundColor}77`} strokeWidth="0" />
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftCornerLargeRibbonText}>{children}</span>
    </div>
  );
};

LeftCornerLargeRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

LeftCornerLargeRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

const RightRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightRibbon}>
      <svg height="40" width="70">
        <polygon points="0 10, 10 20, 0 30, 70 30, 70 10" fill={backgroundColor} strokeWidth="0" />
        <polygon points="60 40, 60 30, 70 30" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightRibbonText}>{children}</span>
    </div>
  );
};

RightRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

RightRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

const RightLargeRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.rightLargeRibbon}>
      <svg height="60" width="90">
        <polygon points="0 15, 15 30, 0 45, 90 45, 90 15" fill={backgroundColor} strokeWidth="0" />
        <polygon points="75 60, 75 40, 90 45" fill={`${backgroundColor}77`} strokeWidth="0" />
      </svg>
      <span style={{ color, fontFamily }} className={style.rightLargeRibbonText}>{children}</span>
    </div>
  );
};

RightLargeRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

RightLargeRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

const LeftRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.leftRibbon}>
      <svg height="40" width="70">
        <g transform="scale(-1,1) translate(-70, 0)">
          <polygon points="0 10, 10 20, 0 30, 70 30, 70 10" fill={backgroundColor} strokeWidth="0" />
          <polygon points="60 40, 60 30, 70 30" fill={`${backgroundColor}77`} strokeWidth="0" />
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftRibbonText}>{children}</span>
    </div>
  );
};

LeftRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

LeftRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

const LeftLargeRibbon = ({ children, backgroundColor, color, fontFamily }) => {
  return (
    <div className={style.leftLargeRibbon}>
      <svg height="60" width="90">
        <g transform="scale(-1,1) translate(-90, 0)">
          <polygon points="0 15, 15 30, 0 45, 90 45, 90 15" fill={backgroundColor} strokeWidth="0" />
          <polygon points="75 60, 75 40, 90 45" fill={`${backgroundColor}77`} strokeWidth="0" />
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftLargeRibbonText}>{children}</span>
    </div>
  );
};

LeftLargeRibbon.propTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string
};

LeftLargeRibbon.defaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
};

export const Ribbon = ({ side = "right", type = "corner", size = "normal", ...props }) => {
  if(side === "right" && type === "edge" && size === "normal") return <RightRibbon {...props} />
  if(side === "right" && type === "edge" && size === "large") return <RightLargeRibbon {...props} />
  if(side === "right" && type === "corner" && size === "normal") return <RightCornerRibbon {...props} />
  if(side === "right" && type === "corner" && size === "large") return <RightCornerLargeRibbon {...props} />
  if(side === "left" && type === "edge" && size === "normal") return <LeftRibbon {...props} />
  if(side === "left" && type === "edge" && size === "large") return <LeftLargeRibbon {...props} />
  if(side === "left" && type === "corner" && size === "normal") return <LeftCornerRibbon {...props} />
  if(side === "left" && type === "corner" && size === "large") return <LeftCornerLargeRibbon {...props} />
  return <></>
};

Ribbon.propTypes = {
  side: PropTypes.oneOf(["right", "left"]),
  type: PropTypes.oneOf(["edge", "corner"]),
  size: PropTypes.oneOf(["normal", "large"]),
};