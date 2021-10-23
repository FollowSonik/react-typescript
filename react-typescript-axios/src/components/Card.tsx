import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary"
};

interface ICardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: React.FC<ICardProps> = ({ width, height, children, variant, onClick }) => {
  return (
    <div style={{
      width, height,
      border: variant === CardVariant.outlined ? "1px solid gray" : "none",
      background: variant === CardVariant.primary ? "lightgray" : ""
    }}

    >
      {children}
    </div>
  );
};

export default Card;