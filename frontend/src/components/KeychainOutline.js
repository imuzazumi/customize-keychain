import React from "react";

const KeychainOutline = ({ width, height, showHole, shape }) => {
  const holeRadius = 8;
  const holeCX = width / 2;
  const holeCY = 15;

  const renderShape = () => {
    switch (shape) {
      case "circle":
        return (
          <circle
            cx={width / 2}
            cy={height / 2 + 20}
            r={Math.min(width, height) / 2}
            fill="none"
            stroke="#444"
            strokeDasharray="6,4"
            strokeWidth="2"
          />
        );
      case "heart":
        const path = `
          M ${width / 2},${height / 2 + 40}
          C ${width / 2 - 60},${height / 2 - 30} ${width / 2 - 50},${height / 2 - 70} ${width / 2},${height / 2 - 10}
          C ${width / 2 + 50},${height / 2 - 70} ${width / 2 + 60},${height / 2 - 30} ${width / 2},${height / 2 + 40}
          Z
        `;
        return (
          <path
            d={path}
            fill="none"
            stroke="#444"
            strokeDasharray="6,4"
            strokeWidth="2"
          />
        );
      case "square":
        return (
          <rect
            x="0"
            y="20"
            width={width}
            height={height}
            rx="0"
            ry="0"
            fill="none"
            stroke="#444"
            strokeDasharray="6,4"
            strokeWidth="2"
          />
        );
      default:
        return (
          <rect
            x="0"
            y="20"
            width={width}
            height={height}
            rx="20"
            ry="20"
            fill="none"
            stroke="#444"
            strokeDasharray="6,4"
            strokeWidth="2"
          />
        );
    }
  };

  return (
    <svg width={width} height={height + 40}>
      {renderShape()}
      {showHole && (
        <circle
          cx={holeCX}
          cy={holeCY}
          r={holeRadius}
          fill="none"
          stroke="#444"
          strokeWidth="2"
        />
      )}
    </svg>
  );
};

export default KeychainOutline;
