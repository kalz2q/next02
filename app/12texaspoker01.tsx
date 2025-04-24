"use client";
import React, { useState, useEffect } from "react";

type Suit = "hearts" | "diamonds" | "clubs" | "spades";
type CardValue =
  | "A"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

interface Card {
  suit: Suit;
  value: CardValue;
}

interface Player {
  name: string;
  cards: Card[];
  chips: number;
  isFolded: boolean;
  betAmount: number;
}

export default function PokerGame() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [communityCards, setCommunityCards] = useState<Card[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [pot, setPot] = useState(0);
  const [gamePhase, setGamePhase] = useState<
    "preflop" | "flop" | "turn" | "river" | "showdown"
  >("preflop");
  const [betAmount, setBetAmount] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);

  // カードコンポーネント
  const CardComponent = ({
    suit,
    value,
    faceUp = true,
    onClick,
  }: {
    suit: Suit;
    value: CardValue;
    faceUp?: boolean;
    onClick?: () => void;
  }) => {
    const suitSymbols = {
      hearts: "♥",
      diamonds: "♦",
      clubs: "♣",
      spades: "♠",
    };

    const suitColors = {
      hearts: "text-red-600",
      diamonds: "text-red-600",
      clubs: "text-black",
      spades: "text-black",
    };

    if (!faceUp) {
      return (
        <div
          className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 bg-blue-800 rounded-lg border-2 border-white shadow-lg flex items-center justify-center cursor-pointer"
          onClick={onClick}
        >
          <div className="text-white text-xl sm:text-2xl">🂠</div>
        </div>
      );
    }

    return (
      <div
        className={`w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-36 bg-white rounded-lg border-2 border-gray-300 shadow-lg flex flex-col p-1 sm:p-2 ${suitColors[suit]} cursor-pointer`}
        onClick={onClick}
      >
        <div className="text-sm sm:text-lg font-bold">{value}</div>
        <div className="text-xl sm:text-3xl flex-grow flex items-center justify-center">
          {suitSymbols[suit]}
        </div>
        <div className="text-sm sm:text-lg font-bold self-end transform rotate-180">
          {value}
        </div>
      </div>
    );
  };

  // デッキ作成
  const createDeck = (): Card[] => {
    const suits: Suit[] = ["hearts", "diamonds", "clubs", "spades"];
    const values: CardValue[] = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    const deck: Card[] = [];
    for (const suit of suits) {
      for (const value of values) {
        deck.push({ suit, value });
      }
    }
    return deck;
  };

  // ゲーム開始
  const startGame = () => {
    const newDeck = createDeck();
    // シャッフル
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    const newPlayers: Player[] = [
      {
        name: "Player 1",
        cards: [],
        chips: 1000,
        isFolded: false,
        betAmount: 0,
      },
      {
        name: "CPU",
        cards: [],
        chips: 1000,
        isFolded: false,
        betAmount: 0,
      },
    ];

    // カードを配る
    newPlayers[0].cards = [newDeck.pop()!, newDeck.pop()!];
    newPlayers[1].cards = [newDeck.pop()!, newDeck.pop()!];

    setDeck(newDeck);
    setPlayers(newPlayers);
    setCommunityCards([]);
    setCurrentPlayerIndex(0);
    setPot(0);
    setGamePhase("preflop");
    setGameStarted(true);
  };

  // CPUのアクション（ランダムで選択）
  const cpuTurn = () => {
    if (
      players[currentPlayerIndex].chips <= 0 ||
      players[currentPlayerIndex].isFolded
    ) {
      nextPlayer();
      return;
    }

    const action = Math.random();
    const maxBet = players[currentPlayerIndex].chips;
    if (action < 0.33) {
      // フォールド
      handleFold();
    } else if (action < 0.66) {
      // ベット
      const bet = Math.floor(Math.random() * Math.min(maxBet, 100));
      setBetAmount(bet);
      handleBet();
    } else {
      // チェック
      handleCheck();
    }
  };

  // ベット
  const handleBet = () => {
    if (betAmount <= 0 || betAmount > players[currentPlayerIndex].chips) return;

    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].chips -= betAmount;
    updatedPlayers[currentPlayerIndex].betAmount += betAmount;

    setPlayers(updatedPlayers);
    setPot(pot + betAmount);
    nextPlayer();
  };

  // フォールド
  const handleFold = () => {
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].isFolded = true;
    setPlayers(updatedPlayers);
    nextPlayer();
  };

  // チェック
  const handleCheck = () => {
    nextPlayer();
  };

  // 次のプレイヤー
  const nextPlayer = () => {
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  // フロップを配る
  const dealFlop = () => {
    const newDeck = [...deck];
    newDeck.pop(); // バーンカード
    const newCommunityCards = [...communityCards];
    newCommunityCards.push(newDeck.pop()!, newDeck.pop()!, newDeck.pop()!);

    setDeck(newDeck);
    setCommunityCards(newCommunityCards);
    setGamePhase("flop");
  };

  // ターンまたはリバーを配る
  const dealTurnOrRiver = () => {
    const newDeck = [...deck];
    newDeck.pop(); // バーンカード
    const newCommunityCards = [...communityCards, newDeck.pop()!];

    setDeck(newDeck);
    setCommunityCards(newCommunityCards);
    setGamePhase(gamePhase === "flop" ? "turn" : "river");
  };

  // ゲームリセット
  const resetGame = () => {
    setGameStarted(false);
  };

  // プレイヤーのターン時にCPUのターンも管理
  useEffect(() => {
    if (players[currentPlayerIndex]?.name === "CPU") {
      cpuTurn();
    }
  }, [currentPlayerIndex, players]);

  return (
    <div className="min-h-screen bg-green-800 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Texas Hold'em Poker
        </h1>

        {!gameStarted ? (
          <div className="flex justify-center">
            <button
              onClick={startGame}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-xl"
            >
              Start Game
            </button>
          </div>
        ) : (
          <>
            <div className="bg-yellow-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
              <span className="text-white font-bold text-xl">${pot}</span>
            </div>

            <div className="bg-green-700 rounded-lg p-4 mb-8">
              <h2 className="text-xl text-white mb-2">
                Community Cards ({gamePhase})
              </h2>
              <div className="flex justify-center space-x-2">
                {communityCards.map((card, index) => (
                  <CardComponent
                    key={index}
                    suit={card.suit}
                    value={card.value}
                  />
                ))}
                {communityCards.length === 0 && (
                  <div className="text-gray-300">Waiting for flop...</div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {players.map((player, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-lg p-4 ${
                    player.isFolded ? "opacity-50" : ""
                  } ${
                    index === currentPlayerIndex ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <h3 className="text-xl text-white">
                    {player.name}{" "}
                    {index === currentPlayerIndex && "(Your Turn)"}
                  </h3>
                  <p className="text-yellow-400">Chips: ${player.chips}</p>
                  <p className="text-blue-400">Bet: ${player.betAmount}</p>
                  <div className="flex justify-center space-x-2 mt-2">
                    {player.cards.map((card, cardIndex) => (
                      <CardComponent
                        key={cardIndex}
                        suit={card.suit}
                        value={card.value}
                      />
                    ))}
                  </div>
                  {player.isFolded && (
                    <p className="text-red-500 mt-2">Folded</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(parseInt(e.target.value) || 0)}
                  className="w-24 p-2 rounded bg-gray-700 text-white"
                  min="1"
                  max={players[currentPlayerIndex]?.chips || 1000}
                />
                <button
                  onClick={handleBet}
                  disabled={players[currentPlayerIndex]?.chips < betAmount}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 text-white px-4 py-2 rounded disabled:cursor-not-allowed"
                >
                  Bet
                </button>
                <button
                  onClick={handleCheck}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Check
                </button>
                <button
                  onClick={handleFold}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Fold
                </button>
              </div>

              <div className="flex justify-center gap-4">
                {gamePhase === "preflop" && (
                  <button
                    onClick={dealFlop}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                  >
                    Deal Flop
                  </button>
                )}
                {(gamePhase === "flop" || gamePhase === "turn") && (
                  <button
                    onClick={dealTurnOrRiver}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                  >
                    Deal {gamePhase === "flop" ? "Turn" : "River"}
                  </button>
                )}
                <button
                  onClick={resetGame}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                >
                  Reset Game
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
