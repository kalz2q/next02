"use client";

import { useState } from "react";

// 日本の一般的な名前のリスト
const names = [
  "田中太郎",
  "佐藤花子",
  "山本一郎",
  "中村美咲",
  "小林健太",
  "加藤優子",
  "吉田直樹",
  "山田彩花",
  "松本大輔",
  "石川真由美",
];

export default function Home() {
  const [randomName, setRandomName] = useState<string>("");

  // ランダムに名前を選ぶ関数
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setRandomName(names[randomIndex]);
  };

  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>ランダム名前ジェネレーター</h1>
      <p style={{ fontSize: "24px", margin: "20px 0" }}>
        {randomName || "ボタンを押して名前を表示"}
      </p>
      <button
        onClick={getRandomName}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        新しい名前を生成
      </button>
    </main>
  );
}
