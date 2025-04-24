"use client";

const SimpleFaces = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-3xl font-bold text-center">Simple Faces</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* 笑顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="yellow"
              stroke="black"
              strokeWidth="2"
            />
            <circle cx="35" cy="40" r="5" fill="black" />
            <circle cx="65" cy="40" r="5" fill="black" />
            <path
              d="M35 70 Q50 80 65 70"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 普通の顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#FFD5C2"
              stroke="black"
              strokeWidth="2"
            />
            <circle cx="35" cy="40" r="5" fill="black" />
            <circle cx="65" cy="40" r="5" fill="black" />
            <line
              x1="35"
              y1="70"
              x2="65"
              y2="70"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* 悲しい顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="lightblue"
              stroke="black"
              strokeWidth="2"
            />
            <circle cx="35" cy="40" r="5" fill="black" />
            <circle cx="65" cy="40" r="5" fill="black" />
            <path
              d="M35 70 Q50 60 65 70"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 驚いた顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="pink"
              stroke="black"
              strokeWidth="2"
            />
            <circle cx="35" cy="40" r="5" fill="black" />
            <circle cx="65" cy="40" r="5" fill="black" />
            <circle
              cx="50"
              cy="70"
              r="10"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* ウインク顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#FFEE93"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M30 40 Q35 35 40 40"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />
            <circle cx="65" cy="40" r="5" fill="black" />
            <path
              d="M35 70 Q50 80 65 70"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ハート目の顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#FFB3BA"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M30 35 Q35 25 40 35 Q45 25 50 35"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M50 35 Q55 25 60 35 Q65 25 70 35"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M35 70 Q50 80 65 70"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 眠い顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="#B5EAD7"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="30"
              y1="40"
              x2="40"
              y2="40"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="60"
              y1="40"
              x2="70"
              y2="40"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M35 70 Q50 75 65 70"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 怒った顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="red"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="30"
              y1="35"
              x2="40"
              y2="45"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="40"
              y1="35"
              x2="30"
              y2="45"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="60"
              y1="35"
              x2="70"
              y2="45"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="70"
              y1="35"
              x2="60"
              y2="45"
              stroke="black"
              strokeWidth="3"
            />
            <path
              d="M35 75 Q50 65 65 75"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* 猫顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="#FFDFD3"
              stroke="black"
              strokeWidth="2"
            />
            {/* 耳 */}
            <path
              d="M30 20 L20 40 L40 30 Z"
              fill="#FFDFD3"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M70 20 L80 40 L60 30 Z"
              fill="#FFDFD3"
              stroke="black"
              strokeWidth="2"
            />
            {/* 目 */}
            <ellipse cx="35" cy="45" rx="5" ry="8" fill="black" />
            <ellipse cx="65" cy="45" rx="5" ry="8" fill="black" />
            {/* 口 */}
            <path
              d="M40 70 Q50 80 60 70"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* ひげ */}
            <line
              x1="40"
              y1="60"
              x2="20"
              y2="55"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="40"
              y1="65"
              x2="20"
              y2="65"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="40"
              y1="70"
              x2="20"
              y2="75"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="60"
              x2="80"
              y2="55"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="65"
              x2="80"
              y2="65"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="60"
              y1="70"
              x2="80"
              y2="75"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* ロボット顔 */}
        <div className="flex justify-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="bg-white rounded-full p-2 shadow-md"
          >
            <rect
              x="10"
              y="20"
              width="80"
              height="60"
              rx="10"
              fill="silver"
              stroke="black"
              strokeWidth="2"
            />
            <rect
              x="30"
              y="10"
              width="40"
              height="10"
              fill="silver"
              stroke="black"
              strokeWidth="2"
            />
            <circle cx="35" cy="45" r="5" fill="black" />
            <circle cx="65" cy="45" r="5" fill="black" />
            <rect x="40" y="60" width="20" height="5" fill="black" />
            <circle cx="30" y="30" r="3" fill="green" />
            <circle cx="70" y="30" r="3" fill="red" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SimpleFaces;
