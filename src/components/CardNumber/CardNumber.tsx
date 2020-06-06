import React from "react";
import "./CardNumber.scss";

export function CardNumber({ number }: CardNumberProps) {
  return <div className="card-number">{number}</div>;
}

interface CardNumberProps {
  number: string;
  last4?: string;
}
