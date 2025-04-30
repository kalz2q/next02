"use client";

import React, { useState, useEffect } from "react";

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

// const MondrianArt: React.FC = () => {
export default function MondrianArt() {
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);
  const [containerSize, setContainerSize] = useState({
    width: 600,
    height: 600,
  });
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-300",
    "bg-white",
    "bg-black",
  ];

  // コンポーネントのマウント時とリサイズ時にサイズを設定
  useEffect(() => {
    const updateSize = () => {
      const size = Math.min(window.innerWidth - 40, 600);
      setContainerSize({ width: size, height: size });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // 再帰的に矩形を分割
  const splitRectangle = (rect: Rectangle, depth: number): Rectangle[] => {
    if (depth <= 0) {
      // 一定の確率で色を付ける（黒は枠線用なのでここでは使わない）
      const shouldColor = Math.random() > 0.7;
      const color = shouldColor
        ? colors[Math.floor(Math.random() * (colors.length - 1))]
        : "bg-white";

      return [{ ...rect, color }];
    }

    const splitVertically = Math.random() > 0.5;
    const splitAt = Math.random() * 0.6 + 0.2; // 20%～80%の位置で分割

    if (splitVertically) {
      const leftWidth = rect.width * splitAt;
      const rightWidth = rect.width - leftWidth;

      return [
        ...splitRectangle({ ...rect, width: leftWidth }, depth - 1),
        ...splitRectangle(
          {
            x: rect.x + leftWidth,
            y: rect.y,
            width: rightWidth,
            height: rect.height,
            color: "",
          },
          depth - 1
        ),
      ];
    } else {
      const topHeight = rect.height * splitAt;
      const bottomHeight = rect.height - topHeight;

      return [
        ...splitRectangle({ ...rect, height: topHeight }, depth - 1),
        ...splitRectangle(
          {
            x: rect.x,
            y: rect.y + topHeight,
            width: rect.width,
            height: bottomHeight,
            color: "",
          },
          depth - 1
        ),
      ];
    }
  };

  // 新しいアートワークを生成
  const generateArt = () => {
    const initialRect: Rectangle = {
      x: 0,
      y: 0,
      width: containerSize.width,
      height: containerSize.height,
      color: "",
    };

    const newRectangles = splitRectangle(initialRect, 5);
    setRectangles(newRectangles);
  };

  // 初期生成とボタンクリック時の再生成
  useEffect(() => {
    generateArt();
  }, [containerSize]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Mondrian Art Generator
      </h1>

      <div
        className="relative border-4 border-black bg-white overflow-hidden"
        style={{ width: containerSize.width, height: containerSize.height }}
      >
        {rectangles.map((rect, index) => (
          <div
            key={index}
            className={`absolute border border-black ${rect.color}`}
            style={{
              left: rect.x,
              top: rect.y,
              width: rect.width,
              height: rect.height,
            }}
          />
        ))}
      </div>

      <button
        onClick={generateArt}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Generate New Art
      </button>
    </div>
  );
}

// export default MondrianArt;
