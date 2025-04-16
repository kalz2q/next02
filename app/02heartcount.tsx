"use client"; // クライアントコンポーネントとして使用

import { useState } from "react";
import { HeartFill } from "react-bootstrap-icons"; //npm install react-bootstrap-icons

export default function Home() {
  // クリック回数の状態管理
  const [count, setCount] = useState(0);

  // ハートアイコンをクリックしたときの処理
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="select-none">
      <button
        onClick={handleClick}
        className="flex items-center focus:outline-none"
      >
        <HeartFill
          className={`text-red-500 mr-1 cursor-pointer ${
            count > 10 ? "text-2xl" : "text-xl"
          }`}
        />
        <span className="text-xl text-gray-400">{count}</span>
      </button>
    </div>
  );
}
