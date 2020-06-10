import React, { useEffect, useState } from "react";
import lodash from "lodash";
import "./CardNumber.scss";

export function CardNumber({ number }: CardNumberProps) {
  const [fixedNumber, setFixedNumber] = useState<string[]>([]);

  useEffect(() => {
    const _number = fillNumber();
    const groups: number = _number.length / 4;
    const _fixedNumber: string[] = [];

    for (let i = 0; i < groups; i++) {
      const group: string = _number.slice(i * 4, i * 4 + 4);
      _fixedNumber.push(group);
    }

    setFixedNumber(_fixedNumber);
  }, [number]);

  function fillNumber(): string {
    let _number: string = lodash.trim(number);

    console.log("Number: ", number);
    console.log("Trim number: ", lodash.trim(number));

    if (_number.length < 16) {
      const difference: number = 16 - _number.length;

      for (let i = 0; i < difference; i++) {
        _number = `${_number}•`;
      }
    }

    return _number;
  }

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
