"use client";

import { useState } from "react";

type GroceryItem = {
  id: number;
  name: string;
  completed: boolean;
};

const GroceryList = () => {
  // オブジェクト配列で商品リストを定義
  const [items, setItems] = useState<GroceryItem[]>([
    { id: 1, name: "Black Beans", completed: false },
    { id: 2, name: "Limes", completed: false },
    { id: 3, name: "Greek Yogurt", completed: false },
    { id: 4, name: "Cilantro", completed: false },
    { id: 5, name: "Honey", completed: false },
    { id: 6, name: "Sweet Potatoes", completed: false },
    { id: 7, name: "Cumin", completed: false },
    { id: 8, name: "Chili Powder", completed: false },
    { id: 9, name: "Quinoa", completed: false },
  ]);

  // 商品の完了状態を切り替える関数
  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">My Grocery List</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-center p-2 rounded cursor-pointer ${
              item.completed
                ? "bg-gray-100 text-gray-500 line-through"
                : "hover:bg-gray-50"
            }`}
            onClick={() => toggleItem(item.id)}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleItem(item.id)}
              className="mr-3 h-4 w-4"
              onClick={(e) => e.stopPropagation()}
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
