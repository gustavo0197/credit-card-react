import React from "react";
import { brandIcon } from "../../services";
import "./CardLogo.scss";

export function CardLogo({ brand }: CardLogoProps) {
  return (
    <div className="card-icon">
      {brandIcon[brand] ? (
        <img
          src={brandIcon[brand]}
          alt="Brand icon"
          className={`card-icon--${brand}`}
        />
      ) : (
        <img
          src={brandIcon.unknown}
          alt="Brand icon"
          className="card-icon--unknown"
        />
      )}
    </div>
  );
}

interface CardLogoProps {
  brand: string;
}
