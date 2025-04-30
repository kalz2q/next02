"use client";

import React from "react";

// ランダムな色を生成する関数
const getRandomColor = () => {
  const colors = ["red", "blue", "yellow", "black", "white"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// 再帰的に四角形を描画するコンポーネント
const MondrianSquare = ({
  x,
  y,
  width,
  height,
  depth,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
}) => {
  if (depth === 0) return null; // 再帰の終了条件

  // 四角形のスタイル
  const squareStyle = {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: getRandomColor(),
  };

  // 再帰的に次の四角形を描画
  const splitHorizontally = Math.random() > 0.5;
  if (splitHorizontally) {
    const splitHeight = Math.random() * (height / 2);
    return (
      <div style={squareStyle}>
        <MondrianSquare
          x={x}
          y={y}
          width={width}
          height={splitHeight}
          depth={depth - 1}
        />
        <MondrianSquare
          x={x}
          y={y + splitHeight}
          width={width}
          height={height - splitHeight}
          depth={depth - 1}
        />
      </div>
    );
  } else {
    const splitWidth = Math.random() * (width / 2);
    return (
      <div style={squareStyle}>
        <MondrianSquare
          x={x}
          y={y}
          width={splitWidth}
          height={height}
          depth={depth - 1}
        />
        <MondrianSquare
          x={x + splitWidth}
          y={y}
          width={width - splitWidth}
          height={height}
          depth={depth - 1}
        />
      </div>
    );
  }
};

const MondrianArt = () => {
  return (
    <div className="relative w-full h-screen">
      <MondrianSquare x={0} y={0} width={800} height={800} depth={10} />
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-4xl my-8">モンドリアン風アート</h1>
      <MondrianArt />
    </div>
  );
}
