import React from "react";

export default function CalculatorKey(props) {
  return (
    <button
      className={`box ${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </button>
  );
}
