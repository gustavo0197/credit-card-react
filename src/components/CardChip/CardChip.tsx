import React from "react";
import "./CardChip.scss";

export function CardChip() {
  return (
    <div className="credit-card__chip">
      <span className="credit-card__chip--top-left-cell" />
      <span className="credit-card__chip--center-cell" />
      <span className="credit-card__chip--top-right-cell" />
      <span className="credit-card__chip--top-left-cell" />
      <span className="credit-card__chip--top-right-cell" />
      <span className="credit-card__chip--bottom-left-cell" />
      <span className="credit-card__chip--bottom-right-cell" />
    </div>
  );
}
