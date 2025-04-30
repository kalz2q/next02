"use client";

import { useState } from "react";

export default function DiceRoller() {
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setDiceResult(null);

    // アニメーション用にランダムな数字を短時間表示
    const rolls = 10; // アニメーション回数
    let count = 0;

    const rollInterval = setInterval(() => {
      count++;
      setDiceResult(Math.floor(Math.random() * 6) + 1);

      if (count >= rolls) {
        clearInterval(rollInterval);
        const finalResult = Math.floor(Math.random() * 6) + 1;
        setDiceResult(finalResult);
        setIsRolling(false);
      }
    }, 100);
  };

  return (
    <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Dice Roller
        </h1>

        <div className="flex flex-col items-center">
          {/* サイコロ結果表示エリア */}
          <div
            className={`w-24 h-24 flex items-center justify-center text-4xl font-bold rounded-lg mb-8
            ${
              diceResult
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-400"
            }
            transition-all duration-300`}
          >
            {diceResult || "?"}
          </div>

          {/* Rollボタン */}
          <button
            onClick={rollDice}
            disabled={isRolling}
            className={`px-6 py-3 rounded-full font-semibold text-white transition-colors
              ${
                isRolling
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }
              shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform`}
          >
            {isRolling ? "Rolling..." : "Roll"}
          </button>
        </div>
      </div>
    </div>
  );
}
