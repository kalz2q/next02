"use client";

import { useState } from "react";

type CountryData = {
  name: string;
  neighboringCountries: string[];
  sea: string[];
  capital: string;
};

const data: CountryData[] = [
  {
    name: "アルバニア",
    neighboringCountries: [
      "モンテネグロ",
      "コソボ",
      "北マケドニア",
      "ギリシャ",
    ],
    sea: ["アドリア海", "イオニア海"],
    capital: "ティラナ",
  },
  {
    name: "アンドラ",
    neighboringCountries: ["フランス", "スペイン"],
    sea: [],
    capital: "アンドラ・ラ・ベリャ",
  },
  {
    name: "オーストリア",
    neighboringCountries: [
      "ドイツ",
      "チェコ",
      "スロバキア",
      "ハンガリー",
      "スロベニア",
      "イタリア",
      "スイス",
      "リヒテンシュタイン",
    ],
    sea: [],
    capital: "ウィーン",
  },
  {
    name: "ベラルーシ",
    neighboringCountries: [
      "ラトビア",
      "リトアニア",
      "ポーランド",
      "ウクライナ",
      "ロシア",
    ],
    sea: [],
    capital: "ミンスク",
  },
  {
    name: "ベルギー",
    neighboringCountries: ["フランス", "ルクセンブルク", "ドイツ", "オランダ"],
    sea: ["北海"],
    capital: "ブリュッセル",
  },
  {
    name: "ボスニア・ヘルツェゴビナ",
    neighboringCountries: ["クロアチア", "セルビア", "モンテネグロ"],
    sea: ["アドリア海"],
    capital: "サラエボ",
  },
  {
    name: "ブルガリア",
    neighboringCountries: [
      "ルーマニア",
      "セルビア",
      "北マケドニア",
      "ギリシャ",
      "トルコ",
    ],
    sea: ["黒海"],
    capital: "ソフィア",
  },
  {
    name: "クロアチア",
    neighboringCountries: [
      "スロベニア",
      "ハンガリー",
      "セルビア",
      "ボスニア・ヘルツェゴビナ",
      "モンテネグロ",
    ],
    sea: ["アドリア海"],
    capital: "ザグレブ",
  },
  {
    name: "キプロス",
    neighboringCountries: [],
    sea: ["地中海"],
    capital: "ニコシア",
  },
  {
    name: "チェコ",
    neighboringCountries: [
      "ドイツ",
      "ポーランド",
      "スロバキア",
      "オーストリア",
    ],
    sea: [],
    capital: "プラハ",
  },
  {
    name: "デンマーク",
    neighboringCountries: ["ドイツ"],
    sea: ["北海", "バルト海"],
    capital: "コペンハーゲン",
  },
  {
    name: "エストニア",
    neighboringCountries: ["ラトビア", "ロシア"],
    sea: ["バルト海", "フィンランド湾"],
    capital: "タリン",
  },
  {
    name: "フィンランド",
    neighboringCountries: ["スウェーデン", "ノルウェー", "ロシア"],
    sea: ["バルト海", "ボスニア湾"],
    capital: "ヘルシンキ",
  },
  {
    name: "フランス",
    neighboringCountries: [
      "ベルギー",
      "ルクセンブルク",
      "ドイツ",
      "スイス",
      "イタリア",
      "モナコ",
      "アンドラ",
      "スペイン",
    ],
    sea: ["北海", "大西洋", "地中海"],
    capital: "パリ",
  },
  {
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
    sea: ["北海", "バルト海"],
    capital: "ベルリン",
  },
  {
    name: "ギリシャ",
    neighboringCountries: [
      "アルバニア",
      "北マケドニア",
      "ブルガリア",
      "トルコ",
    ],
    sea: ["エーゲ海", "イオニア海", "地中海"],
    capital: "アテネ",
  },
  {
    name: "ハンガリー",
    neighboringCountries: [
      "スロバキア",
      "ウクライナ",
      "ルーマニア",
      "セルビア",
      "クロアチア",
      "スロベニア",
      "オーストリア",
    ],
    sea: [],
    capital: "ブダペスト",
  },
  {
    name: "アイスランド",
    neighboringCountries: [],
    sea: ["大西洋", "グリーンランド海", "ノルウェー海"],
    capital: "レイキャビク",
  },
  {
    name: "アイルランド",
    neighboringCountries: ["イギリス"],
    sea: ["大西洋", "アイリッシュ海"],
    capital: "ダブリン",
  },
  {
    name: "イタリア",
    neighboringCountries: [
      "フランス",
      "スイス",
      "オーストリア",
      "スロベニア",
      "サンマリノ",
      "バチカン",
    ],
    sea: ["地中海", "アドリア海", "ティレニア海", "イオニア海"],
    capital: "ローマ",
  },
  {
    name: "コソボ",
    neighboringCountries: [
      "セルビア",
      "北マケドニア",
      "アルバニア",
      "モンテネグロ",
    ],
    sea: [],
    capital: "プリシュティナ",
  },
  {
    name: "ラトビア",
    neighboringCountries: ["エストニア", "リトアニア", "ベラルーシ", "ロシア"],
    sea: ["バルト海"],
    capital: "リガ",
  },
  {
    name: "リヒテンシュタイン",
    neighboringCountries: ["スイス", "オーストリア"],
    sea: [],
    capital: "ファドゥーツ",
  },
  {
    name: "リトアニア",
    neighboringCountries: [
      "ラトビア",
      "ベラルーシ",
      "ポーランド",
      "ロシア（カリーニングラード）",
    ],
    sea: ["バルト海"],
    capital: "ビリニュス",
  },
  {
    name: "ルクセンブルク",
    neighboringCountries: ["ベルギー", "フランス", "ドイツ"],
    sea: [],
    capital: "ルクセンブルク",
  },
  {
    name: "マルタ",
    neighboringCountries: [],
    sea: ["地中海"],
    capital: "バレッタ",
  },
  {
    name: "モルドバ",
    neighboringCountries: ["ルーマニア", "ウクライナ"],
    sea: [],
    capital: "キシナウ",
  },
  {
    name: "モナコ",
    neighboringCountries: ["フランス"],
    sea: ["地中海"],
    capital: "モナコ",
  },
  {
    name: "モンテネグロ",
    neighboringCountries: [
      "クロアチア",
      "ボスニア・ヘルツェゴビナ",
      "セルビア",
      "コソボ",
      "アルバニア",
    ],
    sea: ["アドリア海"],
    capital: "ポドゴリツァ",
  },
  {
    name: "オランダ",
    neighboringCountries: ["ベルギー", "ドイツ"],
    sea: ["北海"],
    capital: "アムステルダム",
  },
  {
    name: "北マケドニア",
    neighboringCountries: [
      "セルビア",
      "コソボ",
      "ブルガリア",
      "ギリシャ",
      "アルバニア",
    ],
    sea: [],
    capital: "スコピエ",
  },
  {
    name: "ノルウェー",
    neighboringCountries: ["スウェーデン", "フィンランド", "ロシア"],
    sea: ["北海", "ノルウェー海", "バレンツ海"],
    capital: "オスロ",
  },
  {
    name: "ポーランド",
    neighboringCountries: [
      "ドイツ",
      "チェコ",
      "スロバキア",
      "ウクライナ",
      "ベラルーシ",
      "リトアニア",
      "ロシア（カリーニングラード）",
    ],
    sea: ["バルト海"],
    capital: "ワルシャワ",
  },
  {
    name: "ポルトガル",
    neighboringCountries: ["スペイン"],
    sea: ["大西洋", "地中海"],
    capital: "リスボン",
  },
  {
    name: "ルーマニア",
    neighboringCountries: [
      "ウクライナ",
      "モルドバ",
      "ブルガリア",
      "セルビア",
      "ハンガリー",
    ],
    sea: ["黒海"],
    capital: "ブカレスト",
  },
  {
    name: "ロシア",
    neighboringCountries: [
      "ノルウェー",
      "フィンランド",
      "エストニア",
      "ラトビア",
      "リトアニア",
      "ポーランド",
      "ベラルーシ",
      "ウクライナ",
      "ジョージア",
      "アゼルバイジャン",
      "カザフスタン",
    ],
    sea: ["バルト海", "黒海", "バレンツ海", "白海", "オホーツク海", "日本海"],
    capital: "モスクワ",
  },
  {
    name: "サンマリノ",
    neighboringCountries: ["イタリア"],
    sea: [],
    capital: "サンマリノ",
  },
  {
    name: "セルビア",
    neighboringCountries: [
      "ハンガリー",
      "ルーマニア",
      "ブルガリア",
      "北マケドニア",
      "コソボ",
      "モンテネグロ",
      "ボスニア・ヘルツェゴビナ",
      "クロアチア",
    ],
    sea: [],
    capital: "ベオグラード",
  },
  {
    name: "スロバキア",
    neighboringCountries: [
      "チェコ",
      "ポーランド",
      "ウクライナ",
      "ハンガリー",
      "オーストリア",
    ],
    sea: [],
    capital: "ブラチスラバ",
  },
  {
    name: "スロベニア",
    neighboringCountries: [
      "オーストリア",
      "ハンガリー",
      "クロアチア",
      "イタリア",
    ],
    sea: ["アドリア海"],
    capital: "リュブリャナ",
  },
  {
    name: "スペイン",
    neighboringCountries: ["フランス", "アンドラ", "ポルトガル"],
    sea: ["大西洋", "地中海"],
    capital: "マドリード",
  },
  {
    name: "スウェーデン",
    neighboringCountries: ["ノルウェー", "フィンランド"],
    sea: ["バルト海", "ボスニア湾"],
    capital: "ストックホルム",
  },
  {
    name: "スイス",
    neighboringCountries: [
      "ドイツ",
      "フランス",
      "イタリア",
      "オーストリア",
      "リヒテンシュタイン",
    ],
    sea: [],
    capital: "ベルン",
  },
  {
    name: "トルコ",
    neighboringCountries: [
      "ブルガリア",
      "ギリシャ",
      "ジョージア",
      "アルメニア",
      "アゼルバイジャン",
      "イラン",
      "イラク",
      "シリア",
    ],
    sea: ["黒海", "エーゲ海", "地中海"],
    capital: "アンカラ",
  },
  {
    name: "ウクライナ",
    neighboringCountries: [
      "ポーランド",
      "スロバキア",
      "ハンガリー",
      "ルーマニア",
      "モルドバ",
      "ベラルーシ",
      "ロシア",
    ],
    sea: ["黒海"],
    capital: "キーウ",
  },
  {
    name: "イギリス",
    neighboringCountries: ["アイルランド"],
    sea: ["北海", "大西洋", "アイリッシュ海", "ケルト海"],
    capital: "ロンドン",
  },
  {
    name: "バチカン",
    neighboringCountries: ["イタリア"],
    sea: [],
    capital: "バチカン市国",
  },
];

export default function Home() {
  const [currentCountry, setCurrentCountry] = useState<CountryData>(data[0]);
  const [showAnswer, setShowAnswer] = useState(false);

  // 次の問題をロードする関数 (仮実装)
  const loadNextQuestion = () => {
    // ここで実際にはランダムな国を取得する
    setShowAnswer(false);
    setCurrentCountry(data[Math.floor(Math.random() * data.length)]);
  };

  // Wikipedia検索を開く関数
  const searchOnWikipedia = () => {
    window.open(
      `https://ja.wikipedia.org/wiki/${currentCountry.name}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <title>ヨーロッパの国クイズ</title>
      <meta
        name="description"
        content="ヨーロッパの国について学べるクイズアプリ"
      />

      <main className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-blue-800">
          ヨーロッパの国クイズ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 周辺の国表示エリア */}
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <h2 className="text-lg font-semibold mb-2 text-green-700">
              周辺の国
            </h2>
            <div className="min-h-20 p-3 bg-white rounded">
              {currentCountry.neighboringCountries.join(",")}
            </div>
          </div>

          {/* 海表示エリア */}
          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
            <h2 className="text-lg font-semibold mb-2 text-purple-700">海</h2>
            <div className="min-h-20 p-3 bg-white rounded">
              {currentCountry.sea.join(",")}
            </div>
          </div>

          {/* 首都表示エリア */}
          <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
            <h2 className="text-lg font-semibold mb-2 text-yellow-700">首都</h2>
            <div className="min-h-20 p-3 bg-white rounded">
              {currentCountry.capital}
            </div>
          </div>
        </div>

        {/* 国名表示エリア */}
        <div className="mb-8 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h2 className="text-lg font-semibold mb-2 text-blue-700">国名</h2>
          <p className="text-3xl font-bold text-center py-4">
            {showAnswer ? (
              <p>{currentCountry.name}</p>
            ) : (
              <p className="text-gray-500 italic">答えを表示するをクリック</p>
            )}
          </p>
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
            onClick={searchOnWikipedia}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Wikipediaで調べる
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
