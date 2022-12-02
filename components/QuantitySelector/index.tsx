import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export interface QuantitySelectorProps {
  onChange?: (quantity: number) => void;
  className?: string;
}

const QuantitySelector = ({ onChange, className }: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(quantity);
    }
  });

  return (
    <div
      className={twMerge(
        "w-full flex flex-row justify-between items-center border-solid border-2 border-slate-200 text-slate-400 py-1 px-4",
        className
      )}
    >
      <button
        className="cursor-pointer py-1 px-2 text-xl"
        onClick={() => {
          if (quantity > 1) setQuantity(quantity - 1);
        }}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="cursor-pointer py-1 px-2 text-xl"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
