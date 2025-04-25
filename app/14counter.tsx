"use client";

import { useState } from "react";

export default function Counter() {
  // MODEL
  const [count, setCount] = useState<number>(0);

  // UPDATE
  type Msg = "Increment" | "Decrement";

  const update = (msg: Msg, model: number): number => {
    switch (msg) {
      case "Increment":
        return model + 1;
      case "Decrement":
        return model - 1;
      default:
        return model;
    }
  };

  const handleClick = (msg: Msg) => {
    setCount((prevCount) => update(msg, prevCount));
  };

  // VIEW
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
        <button
          onClick={() => handleClick("Decrement")}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          -
        </button>
        <div className="text-2xl font-semibold">{count}</div>
        <button
          onClick={() => handleClick("Increment")}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          +
        </button>
      </div>
    </div>
  );
}
