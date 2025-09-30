import React from "react";

interface MobileTimelineLineProps {
  className?: string;
  progress?: number;
  scrollDirection?: 'up' | 'down';
  avatarHeight?: number;
}

const createSmoothPath = (points: { x: number; y: number }[]) => {
  if (points.length < 2) return ''
  let d = `M ${points[0].x} ${points[0].y}`

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] || p2

    const tension = 0.25
    const cp1x = p1.x + (p2.x - p0.x) * tension
    const cp1y = p1.y + (p2.y - p0.y) * tension
    const cp2x = p2.x - (p3.x - p1.x) * tension
    const cp2y = p2.y - (p3.y - p1.y) * tension

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
  }

  return d
}


export const MobileTimelineLine = ({ className = "", progress = 0}: MobileTimelineLineProps) => {
  const lineCoordinates = {
    startX: -70,
    startY: -60,

    horizontalEndX: 80,
    horizontalEndY: -60,

    curveControl1X: 20,
    curveControl1Y: -10,
    curveControl2X: 20,
    curveControl2Y: 30,
    curveEndX: 60,
    curveEndY: 90,

    verticalEndY: 300
  };

  const pathData = createSmoothPath([
    { x: lineCoordinates.startX, y: lineCoordinates.startY },
    { x: lineCoordinates.horizontalEndX, y: lineCoordinates.horizontalEndY },
    { x: lineCoordinates.curveEndX, y: lineCoordinates.curveEndY },
    { x: lineCoordinates.curveEndX, y: lineCoordinates.verticalEndY }
  ])

  const dashOffset = (progress * 200) % 36;

  return (
    <div className={`relative ${className}`}>
      <svg
        width="150"
        height="400"
        viewBox="0 0 150 400"
        className="absolute left-0 top-0"
        style={{ overflow: 'visible' }}
      >
        <path
          d={pathData}
          stroke="#334A59"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="20 20"
          strokeDashoffset={dashOffset}
          style={{
            filter: 'drop-shadow(0 0 3px rgba(51, 74, 89, 0.4))'
          }}
        />

        <circle
          cx={lineCoordinates.startX}
          cy={lineCoordinates.startY}
          r="4.5"
          fill="#334A59"
          style={{
            filter: 'drop-shadow(0 0 2px rgba(51, 74, 89, 0.3))'
          }}
        />
        <circle
          cx={lineCoordinates.curveEndX}
          cy={lineCoordinates.verticalEndY}
          r="4.5"
          fill="#334A59"
          style={{
            filter: 'drop-shadow(0 0 2px rgba(51, 74, 89, 0.3))'
          }}
        />
      </svg>
    </div>
  );
};

export const avatarHeightPresets = {
  top: 40,       
  high: 60,
  default: 80,
  middle: 120,
  low: 160
};