"use client";

import { useState } from "react";

export default function TextReverser() {
  // MODEL (状態管理)
  const [content, setContent] = useState<string>("");

  // UPDATE (状態更新)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // VIEW (表示部分)
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Text Reverser</h1>
        <p className="text-gray-600">
          A text input for reversing text. Very useful!
        </p>

        {/* 入力フィールド */}
        <input
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Text to reverse"
          value={content}
          onChange={handleChange}
        />

        {/* 反転結果表示 */}
        <div className="p-4 bg-white border border-gray-200 rounded-md">
          <p className="font-mono text-lg break-all">
            {content.split("").reverse().join("")}
          </p>
        </div>
      </div>
    </div>
  );
}
