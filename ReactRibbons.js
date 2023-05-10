import React from "react";
import PropTypes from "prop-types";
import style from "./ReactRibbons.scss";

const commonPropTypes = {
  children: PropTypes.any.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  withStripes: PropTypes.bool.isRequired,
};

const commonDefaultProps = {
  fontFamily: "sans",
  backgroundColor: "#cc0000",
  color: "#ccffff",
  withStripes: true,
};

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

const RightCornerRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.rightCornerRibbon} style={withStripes ? { top: "-10px", right: "-10px" } : { top: "0", right: "0" }}>
      <svg height="70" width="70">
        {withStripes ? <polygon points="0 0, 0 10, 10 10" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
        <polygon points="0 0, 70 70, 70 40, 30 0" fill={backgroundColor} strokeWidth="0" />
        {withStripes ? <polygon points="60 60, 60 70, 70 70" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
      </svg>
      <span style={{ color, fontFamily }} className={style.rightCornerRibbonText}>{children}</span>
    </div>
  );
};

RightCornerRibbon.propTypes = commonPropTypes;
RightCornerRibbon.defaultProps = commonDefaultProps;

const RightCornerLargeRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.rightCornerLargeRibbon} style={withStripes ? { top: "-12px", right: "-12px" } : { top: "0", right: "0" }}>
      <svg height="84" width="84">
        {withStripes ? <polygon points="0 0, 0 12, 12 12" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
        <polygon points="0 0, 84 84, 84 48, 36 0" fill={backgroundColor} strokeWidth="0" />
        {withStripes ? <polygon points="72 72, 72 84, 84 84" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
      </svg>
      <span style={{ color, fontFamily }} className={style.rightCornerLargeRibbonText}>{children}</span>
    </div>
  );
};

RightCornerLargeRibbon.propTypes = commonPropTypes;
RightCornerLargeRibbon.defaultProps = commonDefaultProps;

const LeftCornerRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.leftCornerRibbon} style={withStripes ? { top: "-10px", left: "-10px" } : { top: "0", left: "0" }}>
      <svg height="70" width="70">
        <g transform="rotate(-90, 35, 35)">
          {withStripes ? <polygon points="0 0, 0 10, 10 10" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
          <polygon points="0 0, 70 70, 70 40, 30 0" fill={backgroundColor} strokeWidth="0" />
          {withStripes ? <polygon points="60 60, 60 70, 70 70" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftCornerRibbonText}>{children}</span>
    </div>
  );
};

LeftCornerRibbon.propTypes = commonPropTypes;
LeftCornerRibbon.defaultProps = commonDefaultProps;

const LeftCornerLargeRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.leftCornerLargeRibbon} style={withStripes ? { top: "-12px", left: "-12px" } : { top: "0", left: "0" }}>
      <svg height="84" width="84">
        <g transform="rotate(-90, 42, 42)">
          {withStripes ? <polygon points="0 0, 0 12, 12 12" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
          <polygon points="0 0, 84 84, 84 48, 36 0" fill={backgroundColor} strokeWidth="0" />
          {withStripes ? <polygon points="72 72, 72 84, 84 84" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftCornerLargeRibbonText}>{children}</span>
    </div>
  );
};

LeftCornerLargeRibbon.propTypes = commonPropTypes;
LeftCornerLargeRibbon.defaultProps = commonDefaultProps;

const RightRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.rightRibbon} style={withStripes ? { top: "-0", right: "-10px" } : { top: "0", right: "0" }}>
      <svg height="40" width="70">
        <polygon points="0 10, 10 20, 0 30, 70 30, 70 10" fill={backgroundColor} strokeWidth="0" />
        {withStripes ? <polygon points="60 40, 60 30, 70 30" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
      </svg>
      <span style={{ color, fontFamily }} className={style.rightRibbonText}>{children}</span>
    </div>
  );
};

RightRibbon.propTypes = commonPropTypes;
RightRibbon.defaultProps = commonDefaultProps;

const RightLargeRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.rightLargeRibbon} style={withStripes ? { top: "0", right: "-15px" } : { top: "0", right: "0" }}>
      <svg height="60" width="90">
        <polygon points="0 15, 15 30, 0 45, 90 45, 90 15" fill={backgroundColor} strokeWidth="0" />
        {withStripes ? <polygon points="75 60, 75 40, 90 45" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
      </svg>
      <span style={{ color, fontFamily }} className={style.rightLargeRibbonText}>{children}</span>
    </div>
  );
};

RightLargeRibbon.propTypes = commonPropTypes;
RightLargeRibbon.defaultProps = commonDefaultProps;

const LeftRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.leftRibbon} style={withStripes ? { top: "-0", left: "-12px" } : { top: "0", left: "0" }}>
      <svg height="40" width="70">
        <g transform="scale(-1,1) translate(-70, 0)">
          <polygon points="0 10, 10 20, 0 30, 70 30, 70 10" fill={backgroundColor} strokeWidth="0" />
          {withStripes ? <polygon points="60 40, 60 30, 70 30" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftRibbonText}>{children}</span>
    </div>
  );
};

LeftRibbon.propTypes = commonPropTypes;
LeftRibbon.defaultProps = commonDefaultProps;

const LeftLargeRibbon = ({ children, backgroundColor, color, fontFamily, withStripes }) => {
  return (
    <div className={style.leftLargeRibbon} style={withStripes ? { top: "-0", left: "-15px" } : { top: "0", left: "0" }}>
      <svg height="60" width="90">
        <g transform="scale(-1,1) translate(-90, 0)">
          <polygon points="0 15, 15 30, 0 45, 90 45, 90 15" fill={backgroundColor} strokeWidth="0" />
          {withStripes ? <polygon points="75 60, 75 40, 90 45" fill={`${backgroundColor}77`} strokeWidth="0" /> : <></>}
        </g>
      </svg>
      <span style={{ color, fontFamily }} className={style.leftLargeRibbonText}>{children}</span>
    </div>
  );
};

LeftLargeRibbon.propTypes = commonPropTypes;
LeftLargeRibbon.defaultProps = commonDefaultProps;

export const Ribbon = ({ side = "right", type = "corner", size = "normal", ...props }) => {
  if (side === "right" && type === "edge" && size === "normal") return <RightRibbon {...props} />;
  if (side === "right" && type === "edge" && size === "large") return <RightLargeRibbon {...props} />;
  if (side === "right" && type === "corner" && size === "normal") return <RightCornerRibbon {...props} />;
  if (side === "right" && type === "corner" && size === "large") return <RightCornerLargeRibbon {...props} />;
  if (side === "left" && type === "edge" && size === "normal") return <LeftRibbon {...props} />;
  if (side === "left" && type === "edge" && size === "large") return <LeftLargeRibbon {...props} />;
  if (side === "left" && type === "corner" && size === "normal") return <LeftCornerRibbon {...props} />;
  if (side === "left" && type === "corner" && size === "large") return <LeftCornerLargeRibbon {...props} />;
  return <></>;
};

Ribbon.propTypes = {
  side: PropTypes.oneOf(["right", "left"]),
  type: PropTypes.oneOf(["edge", "corner"]),
  size: PropTypes.oneOf(["normal", "large"]),
};