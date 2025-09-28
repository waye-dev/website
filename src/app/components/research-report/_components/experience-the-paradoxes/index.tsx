"use client";

import { ExperienceParadoxesData } from "./types";
import { useExperienceScroll } from "./use-experience-scroll";
import { ExperienceHeader } from "./experience-header";
import { ExperienceTimeline } from "./experience-timeline";
import { ExperienceCardsGrid } from "./experience-cards-grid";

export const ExperienceParadoxes = ({ data }: { data: ExperienceParadoxesData }) => {
  const {
    currentStage,
    previousStage,
    isAnimating,
    targetStage,
    containerRef,
    avatarRef,
    lineRef,
    handleAnimationComplete,
    progress
  } = useExperienceScroll();
  
  const cardsStage = isAnimating ? targetStage : currentStage;
  const currentLevel = data[cardsStage];
  const previousLevel = previousStage ? data[previousStage] : null;

  return (
    <div ref={containerRef} className="h-screen flex flex-col justify-center items-center px-4 relative z-10">
      <ExperienceHeader title="Experience the paradoxes" />

      <ExperienceTimeline
        lineRef={lineRef}
        avatarRef={avatarRef}
        data={data}
        currentLevel={currentLevel}
        progress={progress}
      />

      <div className="md:block hidden">
        <ExperienceCardsGrid
          cards={currentLevel.cards}
          previousCards={previousLevel?.cards}
          currentStage={cardsStage}
          previousStage={previousStage}
          isAnimating={isAnimating}
          onAnimationComplete={handleAnimationComplete}
        />
      </div>

      <div className="md:hidden block absolute left-1/2 -translate-x-1/4 top-1/2 -translate-y-1/2 w-3/5 pt-56">
        <ExperienceCardsGrid
          cards={currentLevel.cards}
          previousCards={previousLevel?.cards}
          currentStage={cardsStage}
          previousStage={previousStage}
          isAnimating={isAnimating}
          onAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
  );
};