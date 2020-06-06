import React from "react";
import { CardChip } from "../../CardChip";
import { CardLogo } from "../../CardLogo";
import "./Mastercard.scss";

export function Mastercard() {
  return (
    <div className="credit-card mastercard">
      <CardChip />
      <CardLogo brand="mastercards" />
    </div>
  );
}
