"use client";

import { useState } from "react";

export default function PasswordChecker() {
  // MODEL (状態管理)
  const [form, setForm] = useState({
    name: "",
    password: "",
    passwordAgain: "",
  });

  // UPDATE (状態更新)
  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  // VIEW (表示部分)
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Account Registration
        </h1>
        <p className="text-gray-600">
          Input a user name and password. Make sure the password matches.
        </p>

        {/* 名前入力フィールド */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            value={form.name}
            onChange={handleChange("name")}
          />
        </div>

        {/* パスワード入力フィールド */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={form.password}
            onChange={handleChange("password")}
          />
        </div>

        {/* パスワード再入力フィールド */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Re-enter Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Re-enter Password"
            value={form.passwordAgain}
            onChange={handleChange("passwordAgain")}
          />
        </div>

        {/* バリデーション表示 */}
        <div
          className={`mt-4 p-3 rounded-md ${
            form.password && form.passwordAgain
              ? form.password === form.passwordAgain
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {form.password && form.passwordAgain
            ? form.password === form.passwordAgain
              ? "OK"
              : "Passwords do not match!"
            : "Please enter both passwords"}
        </div>
      </div>
    </div>
  );
}
