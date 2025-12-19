"use client";

import { useState, useEffect, useRef } from "react";
import { useResponsiveCircles } from "@/hooks/use-responsive-circles";
import { EcosystemDistribution } from "./ecosystem-distribution";
import { ProjectFocus } from "./project-focus";

export const EcosystemProject = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resizedWidthForDesign = screenWidth * 0.64;

  const circleConfig = useResponsiveCircles({
    availableWidth: resizedWidthForDesign,
    darkPercentage: 0.76,
  });

  const { darkCircleCount } = circleConfig;

  const handleAnimationComplete = () => {
    // Animation completion callback if needed
  };

  return (
    <div ref={containerRef} className='flex flex-col gap-14'>
      <h5 className='text-lg md:text-xl lg:text-2xl leading-[120%] font-bold font-inknutAntiqua text-center'>Ecosystem distribution </h5>

      <EcosystemDistribution availableWidth={resizedWidthForDesign} dotsRef={dotsRef} />

      <ProjectFocus 
        containerRef={containerRef}
        dotsRef={dotsRef}
        darkCircleCount={darkCircleCount}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
};
