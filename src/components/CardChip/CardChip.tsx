import React from "react";
import "./CardChip.scss";

export function CardChip() {
  return (
    <div className="chip">
      <span className="chip--top-left-cell" />
      <span className="chip--center-cell" />
      <span className="chip--top-right-cell" />
      <span className="chip--top-left-cell" />
      <span className="chip--top-right-cell" />
      <span className="chip--bottom-left-cell" />
      <span className="chip--bottom-right-cell" />
    </div>
  );
}
