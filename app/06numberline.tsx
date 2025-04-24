"use client";

import React from "react";

interface NumberLineProps {
  min: number;
  max: number;
  step?: number;
  highlightedValues?: number[];
}

const NumberLine: React.FC<NumberLineProps> = ({
  min,
  max,
  step = 1,
  highlightedValues = [],
}) => {
  const totalSteps = Math.floor((max - min) / step) + 1;
  const values = Array.from({ length: totalSteps }, (_, i) => min + i * step);

  return (
    <div className="flex flex-col items-center my-4">
      {/* 数値ラベル */}
      <div className="flex justify-between w-full px-2">
        {values.map((value) => (
          <span
            key={value}
            className={`text-xs ${
              highlightedValues.includes(value) ? "font-bold text-blue-600" : ""
            }`}
            style={{ width: `${100 / (totalSteps - 1)}%`, textAlign: "center" }}
          >
            {value}
          </span>
        ))}
      </div>

      {/* 線と目盛り */}
      <div className="relative w-full h-8">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-400"></div>
        {values.map((value) => (
          <div
            key={`tick-${value}`}
            className="absolute top-0 h-4 w-0.5 bg-gray-600"
            style={{
              left: `${((value - min) / (max - min)) * 100}%`,
            }}
          ></div>
        ))}
        {highlightedValues.map((value) => (
          <div
            key={`highlight-${value}`}
            className="absolute top-2 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2"
            style={{
              left: `${((value - min) / (max - min)) * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">数直線の例</h2>
      <NumberLine min={-5} max={5} highlightedValues={[-2, 3]} />
      <NumberLine min={0} max={10} step={2} highlightedValues={[4, 8]} />
    </div>
  );
}
