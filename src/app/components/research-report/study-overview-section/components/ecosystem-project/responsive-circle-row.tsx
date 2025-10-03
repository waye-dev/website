"use client";

import { useResponsiveCircles } from "@/hooks/use-responsive-circles";

interface ResponsiveCircleRowProps {
  availableWidth: number;
  darkPercentage?: number;
  dotsRef: React.MutableRefObject<HTMLDivElement[]>;
}

export const ResponsiveCircleRow = ({ availableWidth, darkPercentage = 0.76, dotsRef }: ResponsiveCircleRowProps) => {
  const circleConfig = useResponsiveCircles({
    availableWidth,
    darkPercentage,
  });

  const { circleCount, circleSize, gap, darkCircleCount } = circleConfig;

  const circles = Array.from({ length: circleCount }, (_, i) => ({
    id: i,
    isDark: i < darkCircleCount,
  }));

  return (
    <section className='flex flex-row justify-center flex-nowrap' style={{ width: availableWidth }}>
      {circles.map((circle, index) => (
        <div
          key={circle.id}
          ref={(el) => {
            if (el) dotsRef.current[index] = el;
          }}
          className={`rounded-full ${circle.isDark ? "bg-blue-custom-900" : "bg-gray-custom-800"}`}
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            marginRight: index < circleCount - 1 ? `${gap}px` : "0",
          }}
        />
      ))}
    </section>
  );
};
