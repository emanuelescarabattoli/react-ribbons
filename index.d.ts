import React from "react";

export interface RibbonContainerProps {
  children: React.ReactNode
}

declare class RibbonContainer extends React.Component<RibbonContainerProps, any> {}

export interface RibbonProps {
  children: React.ReactNode
  backgroundColor: string
  color: string
  fontFamily?: string
}

export class RightCornerRibbon extends React.Component<RibbonProps, any> {}
export class RightCornerLargeRibbon extends React.Component<RibbonProps, any> {}
export class LeftCornerRibbon extends React.Component<RibbonProps, any> {}
export class LeftCornerLargeRibbon extends React.Component<RibbonProps, any> {}
export class RightRibbon extends React.Component<RibbonProps, any> {}
export class RightLargeRibbon extends React.Component<RibbonProps, any> {}
export class LeftRibbon extends React.Component<RibbonProps, any> {}
export class LeftLargeRibbon extends React.Component<RibbonProps, any> {}
