"use client";

import { useState, KeyboardEvent } from "react";

export default function TextReverser() {
  const [inputText, setInputText] = useState<string>("");
  const [reversedText, setReversedText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setReversedText(inputText.split("").reverse().join(""));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Text Reverser</h1>
        <p className="text-gray-600">Press Enter to reverse text</p>

        {/* 入力フィールド */}
        <input
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Text to reverse (press Enter)"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        {/* 反転結果表示 */}
        {reversedText && (
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <p className="font-mono text-lg break-all">{reversedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
