import React from "react";

export interface RibbonContainerProps {
  children: React.ReactNode
}

declare class RibbonContainer extends React.Component<RibbonContainerProps, any> { }

export interface RibbonProps {
  side: "right" | "left"
  type: "edge" | "corner"
  size: "normal" | "large"
  children: React.ReactNode
  backgroundColor: string
  color: string
  fontFamily?: string
}

export class Ribbon extends React.Component<RibbonProps, any> { }
