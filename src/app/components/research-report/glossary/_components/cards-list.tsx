"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { GLOSSARY_PARTS, TOTAL_PARTS } from "../constants";

interface CardsListProps {
  activePart: number;
  progress: number;
  onCardClick: (partId: number) => void;
}

export const CardsList: React.FC<CardsListProps> = ({ activePart, progress, onCardClick }) => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!cardsContainerRef.current || cardRefs.current.length === 0) return;

    // Center the active card (activePart - 1 because activePart is 1-indexed)
    const targetCardIndex = activePart - 1;

    // Calculate cumulative offset to center the target card
    let offsetY = 0;
    for (let i = 0; i < targetCardIndex; i++) {
      if (cardRefs.current[i]) {
        const cardHeight = cardRefs.current[i]!.offsetHeight;
        const gap = 48; // mb-12 = 3rem = 48px
        offsetY -= (cardHeight + gap);
      }
    }

    gsap.to(cardsContainerRef.current, {
      y: offsetY,
      duration: 0.5,
      ease: "power2.out",
      overwrite: true,
      force3D: true
    });
  }, [activePart]);

  return (
    <div className="w-full flex-shrink-0">
      <div ref={cardsContainerRef} className="w-full" style={{ willChange: 'transform' }}>
        {GLOSSARY_PARTS.map((part, index) => {
          const isActive = activePart === part.id;

          return (
            <div
              key={part.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              onClick={() => onCardClick(part.id)}
              data-card-id={part.id}
              className={
                `flex flex-col w-full gap-2.5 py-[1.875rem] px-[0.9375rem] pr-[1.875rem] rounded-[10px] transition-all duration-500 ease-out cursor-pointer mb-12 ${
                  isActive
                    ? "bg-blue-custom-900 text-white scale-105"
                    : "bg-transparent text-black scale-100"
                }`
              }
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "background-color, color, transform",
              }}
            >
            <section className="hidden sm:flex flex-row items-center justify-between gap-6">
              <h4 className="uppercase text-xl font-normal font-josefinSans">{part.title}</h4>
              <p className={`uppercase text-xl font-josefinSans font-normal whitespace-nowrap ${
                isActive ? "text-gray-300" : "text-gray-custom-500"
              }`}>
                PART {part.id}
              </p>
            </section>

            <section className="flex sm:hidden flex-col items-start justify-between gap-3">
              <p className={`uppercase text-xl font-josefinSans font-normal whitespace-nowrap ${
                isActive ? "text-gray-300" : "text-gray-custom-500"
              }`}>
                PART {part.id}
              </p>
              <h4 className="uppercase text-xl font-normal font-josefinSans">{part.title}</h4>
            </section>

            <div
              className={
                `text-sm sm:text-lg cursor-pointer justify-normal font-normal transition-all duration-300 ease-out ${
                  isActive ? "text-white" : "text-gray-custom-600"
                }`
              }
            >
              {part.summary}
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
