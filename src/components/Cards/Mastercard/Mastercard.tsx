import React from "react";
import { CardChip } from "../../CardChip";
import { CardLogo } from "../../CardLogo";
import { CardNumber } from "../../CardNumber";
import "./Mastercard.scss";

export function Mastercard() {
  return (
    <div className="credit-card mastercard">
      <CardChip />
      <CardLogo brand="mastercard" />
      <CardNumber number="4242 4242 424 24242" />
    </div>
  );
}
