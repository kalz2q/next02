"use client";
// pages/index.tsx
import React from "react";

const NumberLine: React.FC<{ min: number; max: number; step: number }> = ({
  min,
  max,
  step,
}) => {
  const positions = [];
  for (let i = min; i <= max; i += step) {
    positions.push(i);
  }

  return (
    <div className="relative w-full h-16 flex items-center">
      {/* 数直線の背景 */}
      <div className="absolute top-1/2 left-0 right-0 border-t-2 border-gray-600" />
      {/* 各マーカー */}
      {positions.map((pos) => (
        <div
          key={pos}
          className="absolute"
          style={{ left: `${((pos - min) / (max - min)) * 100}%` }}
        >
          <div className="text-xs text-gray-600">{pos}</div>
          <div className="w-1 h-3 bg-gray-600" />
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">数直線</h1>
      <NumberLine min={0} max={100} step={10} />
    </div>
  );
}
