"use client";

import React, { useState } from "react";

type Card =
  | "Ace"
  | "Two"
  | "Three"
  | "Four"
  | "Five"
  | "Six"
  | "Seven"
  | "Eight"
  | "Nine"
  | "Ten"
  | "Jack"
  | "Queen"
  | "King";

const cardGenerator = (): Card => {
  const cards: Card[] = [
    "Ace",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Jack",
    "Queen",
    "King",
  ];
  return cards[Math.floor(Math.random() * cards.length)];
};

const viewCard = (card: Card): string => {
  const cardSymbols = {
    Ace: "🂡",
    Two: "🂢",
    Three: "🂣",
    Four: "🂤",
    Five: "🂥",
    Six: "🂦",
    Seven: "🂧",
    Eight: "🂨",
    Nine: "🂩",
    Ten: "🂪",
    Jack: "🂫",
    Queen: "🂭",
    King: "🂮",
  };
  return cardSymbols[card];
};

export default function CardDrawer() {
  const [card, setCard] = useState<Card>("Three");

  return (
    <div className="relative h-screen">
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2">
        <div className="text-[300px] leading-none">{viewCard(card)}</div>
        <button
          onClick={() => setCard(cardGenerator())}
          className="block mx-auto mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Draw
        </button>
      </div>
    </div>
  );
}
