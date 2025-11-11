"use client";

import { useState, useEffect } from "react";
import { GLOSSARY_LIST } from "../constants";

export const GlossaryChart = ({ activeId }: { activeId: number | null }) => {
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

  const handleChartClick = (itemId: number) => {
    const element = document.getElementById(`glossary-item-${itemId}`);

    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY - 150;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row items-end gap-3">
      {GLOSSARY_LIST.map((part) => {
        const isActive = part.id === activeId;
        return (
          <div
            key={part.id}
            onClick={() => handleChartClick(part.id)}
            className="bg-blue-custom-900 rounded-[5px] p-6 transition-transform duration-500 ease-in-out flex justify-center items-end cursor-pointer"
            style={{
              height: isClient ? `${estimatedScreenHeight * part.heightPercentage}px` : "450px",
              width: `${Math.floor(12 * part.widthPercentage)}%`,
              transform: isActive ? "translateY(-50px)" : "translateY(0)",
            }}
          >
            <h1
              className="font-inknutAntiqua text-white text-xl [writing-mode:vertical-rl] rotate-180 whitespace-nowrap"
              style={{ fontSize: `${estimatedScreenHeight * 0.025}px` }}
            >
              Part {part.id}: {part.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

