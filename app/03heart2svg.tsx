// app/page.tsx
"use client";

import { useState } from "react";
// components/HeartIcon.tsx
import { FC, SVGProps } from "react";

interface HeartIconProps extends SVGProps<SVGSVGElement> {
  filled?: boolean;
}

export const HeartIcon: FC<HeartIconProps> = ({ filled = true, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth="0.5"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
};

export default function Playground() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="select-none flex items-center">
      <button
        onClick={handleClick}
        className="flex items-center focus:outline-none"
        aria-label="Like"
      >
        <HeartIcon
          className={`mr-1 cursor-pointer transition-all ${
            count > 10 ? "scale-125" : "scale-500"
          }`}
          style={{ color: "red" }}
        />
        <span className="text-xl text-gray-400">{count}</span>
      </button>
    </div>
  );
}
