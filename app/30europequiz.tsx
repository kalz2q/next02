"use client";

import { useState } from "react";
import Head from "next/head";

type CountryData = {
  name: string;
  neighboringCountries: string[];
  sea: string;
  capital: string;
};

export default function Home() {
  const [currentCountry, setCurrentCountry] = useState<CountryData>({
    name: "フランス",
    neighboringCountries: [
      "ベルギー",
      "ルクセンブルク",
      "ドイツ",
      "スイス",
      "イタリア",
      "モナコ",
      "スペイン",
      "アンドラ",
    ],
    sea: "地中海, 大西洋",
    capital: "パリ",
  });
  const [showAnswer, setShowAnswer] = useState(false);

  // 次の問題をロードする関数 (仮実装)
  const loadNextQuestion = () => {
    // ここで実際にはランダムな国を取得する
    setShowAnswer(false);
    setCurrentCountry({
      name: "ドイツ",
      neighboringCountries: [
        "デンマーク",
        "ポーランド",
        "チェコ",
        "オーストリア",
        "スイス",
        "フランス",
        "ルクセンブルク",
        "ベルギー",
        "オランダ",
      ],
      sea: "北海, バルト海",
      capital: "ベルリン",
    });
  };

  // Google検索を開く関数
  const searchOnGoogle = () => {
    window.open(
      `https://www.google.com/search?q=${currentCountry.name}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <Head>
        <title>ヨーロッパの国クイズ</title>
        <meta
          name="description"
          content="ヨーロッパの国について学べるクイズアプリ"
        />
      </Head>

      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-blue-800">
          ヨーロッパの国クイズ
        </h1>

        {/* 国名表示エリア */}
        <div className="mb-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-lg font-semibold mb-2 text-blue-700">国名</h2>
          <p className="text-3xl font-bold text-center py-4">
            {currentCountry.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 周辺の国表示エリア */}
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <h2 className="text-lg font-semibold mb-2 text-green-700">
              周辺の国
            </h2>
            <div className="min-h-20 p-3 bg-white rounded">
              {showAnswer ? (
                <ul className="list-disc pl-5">
                  {currentCountry.neighboringCountries.map((country, index) => (
                    <li key={index}>{country}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">答えを表示するをクリック</p>
              )}
            </div>
          </div>

          {/* 海表示エリア */}
          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
            <h2 className="text-lg font-semibold mb-2 text-purple-700">海</h2>
            <div className="min-h-20 p-3 bg-white rounded">
              {showAnswer ? (
                <p>{currentCountry.sea}</p>
              ) : (
                <p className="text-gray-500 italic">答えを表示するをクリック</p>
              )}
            </div>
          </div>

          {/* 首都表示エリア */}
          <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
            <h2 className="text-lg font-semibold mb-2 text-yellow-700">首都</h2>
            <div className="min-h-20 p-3 bg-white rounded">
              {showAnswer ? (
                <p>{currentCountry.capital}</p>
              ) : (
                <p className="text-gray-500 italic">答えを表示するをクリック</p>
              )}
            </div>
          </div>
        </div>

        {/* ボタンエリア */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {showAnswer ? "答えを隠す" : "答えを見る"}
          </button>

          <button
            onClick={searchOnGoogle}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Google検索する
          </button>

          <button
            onClick={loadNextQuestion}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            次の問題
          </button>
        </div>
      </main>
    </div>
  );
}
