"use client";

import React, { useState, useEffect } from "react";
import { GLOSSARY_PARTS } from "../constants";

interface BookStackProps {
  activePart: number;
  onBookClick: (partId: number) => void;
}

export const BookStack: React.FC<BookStackProps> = ({ activePart, onBookClick }) => {
  const [isClient, setIsClient] = useState(false);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    setIsClient(true);
    setScreenHeight(window.visualViewport?.height || window.innerHeight);

    const handleResize = () => {
      setScreenHeight(window.visualViewport?.height || window.innerHeight);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      return () => window.visualViewport?.removeEventListener("resize", handleResize);
    } else {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const estimatedScreenHeight = screenHeight * 0.75;

  return (
    <div className="flex flex-row items-end gap-3 justify-center">
      {GLOSSARY_PARTS.map((part) => {
        const isActive = part.id === activePart;

        const heightMultiplier = part.id === 5 ? 1.0 : part.id === 3 || part.id === 6 || part.id === 7 ? 0.9 : part.id === 2 || part.id === 4 ? 0.75 : 0.6;
        const height = isClient ? estimatedScreenHeight * heightMultiplier : 450;

        const widthMultiplier = part.id === 5 || part.id === 6 || part.id === 7 ? 2.5 : part.id === 2 || part.id === 4 ? 1.25 : 0.75;
        const width = Math.floor(12 * widthMultiplier);

        return (
          <div
            key={part.id}
            onClick={() => onBookClick(part.id)}
            className="bg-blue-custom-900 rounded-[5px] p-6 flex justify-center items-end cursor-pointer"
            style={{
              height: `${height}px`,
              width: `${width}%`,
              transform: isActive ? "translate3d(0, -60px, 0)" : "translate3d(0, 0, 0)",
              transition: "transform 0.4s ease-out",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              willChange: "transform",
            }}
          >
            <h1
              className="font-inknutAntiqua text-white text-xl [writing-mode:vertical-rl] rotate-180 whitespace-nowrap"
              style={{
                fontSize: `${estimatedScreenHeight * 0.025}px`,
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
              }}
            >
              Part {part.id}: {part.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
