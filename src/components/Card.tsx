import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary"
}

interface ICardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children: React.ReactNode;
  onClick?(num: number | any): void;
}

// eslint-disable-next-line
export default function ({
    width,
    height,
    variant,
    children,
    onClick
  }: ICardProps) {
  return (
    <div style={{
      width,
      height,
      border: variant === CardVariant.outlined ? "1px solid gray" : "none",
      background: variant === CardVariant.primary ? "lightgray" : ""
    }}
    onClick={onClick}
    >
      {children}
    </div>
  );
}