"use client";

const SvgShapes = () => {
  return (
    <div className="flex justify-center p-8">
      <svg
        viewBox="0 0 350 200"
        width="400"
        height="300"
        className="border border-gray-200 shadow-lg"
      >
        {/* 円 */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="red"
          stroke="black"
          strokeWidth="3"
        />

        {/* 四角形 */}
        <rect
          x="100"
          y="10"
          width="40"
          height="40"
          fill="green"
          stroke="black"
          strokeWidth="2"
        />

        {/* 直線 */}
        <line
          x1="20"
          y1="200"
          x2="200"
          y2="20"
          stroke="blue"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* 折れ線 */}
        <polyline
          points="200,40 240,40 240,80 280,80 280,120 320,120 320,160"
          fill="none"
          stroke="red"
          strokeWidth="4"
          strokeDasharray="20,2"
        />

        {/* テキスト */}
        <text
          x="130"
          y="130"
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
          transform="rotate(-45 130,130)"
          className="text-sm font-medium"
        >
          Welcome to Shapes Club
        </text>
      </svg>
    </div>
  );
};

export default SvgShapes;
