"use client";

import { useState, useEffect } from "react";

export default function NumberGuessingGame() {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">(
    "playing"
  );
  const [hint, setHint] = useState<"higher" | "lower" | null>(null);
  const [maxAttempts] = useState<number>(7); // 最大試行回数

  // ゲーム初期化
  const initGame = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNumber);
    setGuess("");
    setMessage("1から100までの数を当ててください！");
    setAttempts(0);
    setGameStatus("playing");
    setHint(null);
  };

  // 初期ゲーム設定
  useEffect(() => {
    initGame();
  }, []);

  // 入力処理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value.replace(/[^0-9]/g, ""));
  };

  // 推測処理
  const handleGuess = () => {
    const guessedNumber = parseInt(guess, 10);

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      setMessage("1から100までの有効な数字を入力してください！");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guessedNumber === targetNumber) {
      setMessage(`正解です！${newAttempts}回目で当たりました！🎉`);
      setGameStatus("won");
    } else {
      const newHint = guessedNumber < targetNumber ? "higher" : "lower";
      setHint(newHint);
      setMessage(
        `違います！もっと${newHint === "higher" ? "大きい" : "小さい"}です。`
      );

      if (newAttempts >= maxAttempts) {
        setMessage(`ゲームオーバー！正解は ${targetNumber} でした。`);
        setGameStatus("lost");
      }
    }
  };

  // キーボード入力処理
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleGuess();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          数当てゲーム
        </h1>

        <p className="text-center mb-6">
          1から100までの数を{maxAttempts}回以内で当ててください！
        </p>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              試行回数: {attempts}/{maxAttempts}
            </span>
            {hint && (
              <span
                className={`text-sm font-medium px-2 py-1 rounded ${
                  hint === "higher"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                ヒント: {hint === "higher" ? "もっと大きい" : "もっと小さい"}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              value={guess}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              disabled={gameStatus !== "playing"}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100"
              placeholder="数字を入力"
              maxLength={3}
            />
            {gameStatus === "playing" && (
              <button
                onClick={handleGuess}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                確認
              </button>
            )}
          </div>
        </div>

        <div
          className={`p-4 rounded-lg mb-6 ${
            gameStatus === "won"
              ? "bg-green-100 text-green-800"
              : gameStatus === "lost"
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          <p className="text-center font-medium">{message}</p>
        </div>

        {(gameStatus === "won" || gameStatus === "lost") && (
          <button
            onClick={initGame}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          >
            もう一度遊ぶ
          </button>
        )}
      </div>
    </div>
  );
}
