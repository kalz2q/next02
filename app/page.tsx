"use client";

import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = (): number => {
    if (firstOperand === null || operator === null) return parseFloat(display);

    const inputValue = parseFloat(display);

    switch (operator) {
      case "+":
        return firstOperand + inputValue;
      case "-":
        return firstOperand - inputValue;
      case "*":
        return firstOperand * inputValue;
      case "/":
        return firstOperand / inputValue;
      default:
        return inputValue;
    }
  };

  const calculateResult = () => {
    if (firstOperand === null || operator === null) return;

    const result = performCalculation();
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handlePercentage = () => {
    const value = parseFloat(display) / 100;
    setDisplay(String(value));
  };

  const toggleSign = () => {
    const value = parseFloat(display) * -1;
    setDisplay(String(value));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4 p-3 bg-gray-50 rounded-lg text-right">
          <div className="text-gray-500 text-sm h-6">
            {firstOperand !== null ? `${firstOperand} ${operator}` : ""}
          </div>
          <div className="text-3xl font-semibold overflow-x-auto">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clearDisplay}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition"
          >
            AC
          </button>
          <button
            onClick={toggleSign}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            +/-
          </button>
          <button
            onClick={handlePercentage}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            %
          </button>

          <button
            onClick={() => handleOperator("/")}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition text-xl"
          >
            ÷
          </button>
          <button
            onClick={() => inputDigit("7")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            7
          </button>
          <button
            onClick={() => inputDigit("8")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            8
          </button>
          <button
            onClick={() => inputDigit("9")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            9
          </button>
          <button
            onClick={() => handleOperator("*")}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition text-xl"
          >
            ×
          </button>
          <button
            onClick={() => inputDigit("4")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            4
          </button>
          <button
            onClick={() => inputDigit("5")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            5
          </button>
          <button
            onClick={() => inputDigit("6")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            6
          </button>
          <button
            onClick={() => handleOperator("-")}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition text-xl"
          >
            -
          </button>
          <button
            onClick={() => inputDigit("1")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            1
          </button>
          <button
            onClick={() => inputDigit("2")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            2
          </button>
          <button
            onClick={() => inputDigit("3")}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            3
          </button>
          <button
            onClick={() => handleOperator("+")}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition text-xl"
          >
            +
          </button>

          <button
            onClick={() => inputDigit("0")}
            className="col-span-2 bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="bg-gray-200 hover:bg-gray-300 font-bold py-3 rounded-lg transition"
          >
            .
          </button>
          <button
            onClick={calculateResult}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition text-xl"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
