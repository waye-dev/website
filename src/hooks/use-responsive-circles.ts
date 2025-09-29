import { useMemo } from "react";

interface CircleConfig {
  circleCount: number;
  circleSize: number;
  gap: number;
  darkCircleCount: number;
  lightCircleCount: number;
}

interface UseResponsiveCirclesOptions {
  availableWidth: number;
  darkPercentage?: number;
  minCircleSize?: number;
  maxCircleSize?: number;
  gapRatio?: number;
}

export const useResponsiveCircles = ({
  availableWidth,
  darkPercentage = 0.76,
  minCircleSize = 20,
  maxCircleSize = 24,
  gapRatio = 0.5,
}: UseResponsiveCirclesOptions): CircleConfig => {
  return useMemo(() => {
    // Handle edge case
    if (availableWidth <= 0) {
      return {
        circleCount: 0,
        circleSize: 0,
        gap: 0,
        darkCircleCount: 0,
        lightCircleCount: 0,
      };
    }

    let bestConfig = { circleCount: 0, circleSize: 0, gap: 0 };

    // Find optimal configuration by trying different circle sizes
    for (let circleSize = maxCircleSize; circleSize >= minCircleSize; circleSize--) {
      const gap = Math.max(1, Math.round(circleSize * gapRatio));

      // Calculate maximum circles that fit
      // Formula: availableWidth = (n * circleSize) + ((n-1) * gap)
      // Solving for n: n = (availableWidth + gap) / (circleSize + gap)
      const maxCircles = Math.floor((availableWidth + gap) / (circleSize + gap));

      if (maxCircles > bestConfig.circleCount) {
        bestConfig = { circleCount: maxCircles, circleSize, gap };
      }
    }

    // Calculate distribution
    const darkCircleCount = Math.round(bestConfig.circleCount * darkPercentage);
    const lightCircleCount = bestConfig.circleCount - darkCircleCount;

    return {
      ...bestConfig,
      darkCircleCount,
      lightCircleCount,
    };
  }, [availableWidth, darkPercentage, minCircleSize, maxCircleSize, gapRatio]);
};
