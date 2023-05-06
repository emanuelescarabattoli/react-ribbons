import React from "react";

export interface RibbonContainerProps {
  children: React.ReactNode
}

declare class RibbonContainer extends React.Component<RibbonContainerProps, any> { }

export interface RibbonProps {
  side: "right" | "left"
  type: "corner" | "edge"
  size: "normal" | "large"
  children: React.ReactNode
  backgroundColor?: string
  color?: string
  fontFamily?: string
  withStripes?: boolean
}

export class Ribbon extends React.Component<RibbonProps, any> { }
