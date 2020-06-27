import React, { useEffect, useState } from "react";
import "./CardNumber.scss";

export function CardNumber({ number }: CardNumberProps) {
  // Will have 4-digits groups to show card number with spaces like a real card
  const [fixedNumber, setFixedNumber] = useState<string[]>([]);

  useEffect(() => {
    const _number = fillNumber();
    const groups: number = _number.length / 4;
    const _fixedNumber: string[] = [];

    // Split the card number in 4-digit groups
    for (let i = 0; i < groups; i++) {
      const group: string = _number.slice(i * 4, i * 4 + 4);
      _fixedNumber.push(group);
    }

    setFixedNumber(_fixedNumber);
  }, [number]);

  // If the card number is not completed (16 or 15 digits)
  // it should be filled with •
  function fillNumber(): string {
    let _number: string = number;

    // If the card number is less than 16 it should be filled
    // TODO - Certain cards has less than 16 digits
    if (_number.length < 16) {
      const difference: number = 16 - _number.length;

      for (let i = 0; i < difference; i++) {
        _number = `${_number}•`;
      }
    }

    return _number;
  }

  // Get the card number with spaces every 4 digits
  function getCardNumber(): string {
    let _number: string = "";

    if (fixedNumber.length > 0) {
      _number = `${fixedNumber[0]} `;

      for (let i = 1; i < fixedNumber.length; i++) {
        _number = `${_number} ${fixedNumber[i]}`;
      }
    }

    return _number;
  }

  return <p className="card-number">{getCardNumber()}</p>;
}

interface CardNumberProps {
  number: string;
  last4?: string;
}
