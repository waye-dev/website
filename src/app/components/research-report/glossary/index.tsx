"use client";

import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GLOSSARY_PARTS, TOTAL_PARTS } from "./constants";
import { useGlossaryScroll } from "./_components/use-glossary-scroll";
import { BookStack } from "./_components/book-stack";
import { CardsList } from "./_components/cards-list";

export const Glossary = () => {
  const { activePart, progress, containerRef, cardsRef } = useGlossaryScroll();

  // Navigate to the actual report section when card is clicked
  const handleCardClick = (partId: number) => {
    const part = GLOSSARY_PARTS.find(p => p.id === partId);
    if (!part) return;

    const element = document.querySelector(part.sectionSelector);
    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Navigate within the glossary to show the selected part
  const handleBookClick = (partId: number) => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate the target scroll progress for this part (0 to 1)
    const targetProgress = (partId - 1) / (TOTAL_PARTS - 1);

    // Get the ScrollTrigger for the glossary
    const st = ScrollTrigger.getById("glossary-scroll-main");
    if (st) {
      // Calculate the scroll position that corresponds to this progress
      const start = st.start;
      const end = st.end;
      const targetScroll = start + (end - start) * targetProgress;

      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="h-screen flex flex-col justify-center items-center relative">
      {/* Desktop: Side-by-side layout */}
      <div className="hidden lg:flex lg:flex-row w-full gap-16 h-full items-center px-4">
        {/* Left: Cards - Container with justify-center to center the first card initially */}
        <div ref={cardsRef} className="flex-1 h-full flex items-start justify-center" style={{ paddingTop: '50vh' }}>
          <CardsList activePart={activePart} progress={progress} onCardClick={handleCardClick} />
        </div>

        {/* Right: Book Stack */}
        <div className="flex items-center justify-end">
          <BookStack activePart={activePart} onBookClick={handleBookClick} />
        </div>
      </div>

      {/* Mobile: 50/50 Split (Book Stack top, Cards bottom) */}
      <div className="lg:hidden flex flex-col w-full h-full">
        {/* Top 50vh: Book Stack */}
        <div className="h-[50vh] w-full flex items-center justify-center px-4 bg-gray-custom-400">
          <BookStack activePart={activePart} onBookClick={handleBookClick} />
        </div>

        {/* Bottom 50vh: Cards */}
        <div className="h-[50vh] w-full flex items-start justify-center px-4" style={{ paddingTop: '25vh' }}>
          <CardsList activePart={activePart} progress={progress} onCardClick={handleCardClick} />
        </div>
      </div>
    </div>
  );
};

// Export components for potential reuse
export { BookStack } from "./_components/book-stack";
export { CardsList } from "./_components/cards-list";
export { GLOSSARY_PARTS, TOTAL_PARTS, GLOSSARY_LIST } from "./constants";

