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
    handleAnimationComplete 
  } = useExperienceScroll();
  
  // Use targetStage for cards during animation, currentStage otherwise
  const cardsStage = isAnimating ? targetStage : currentStage;
  const currentLevel = data[cardsStage];

  return (
    <div ref={containerRef} className="h-screen flex flex-col justify-center items-center px-4 relative z-10">
      <ExperienceHeader title="Experience the paradoxes" />

      <ExperienceTimeline 
        lineRef={lineRef}
        avatarRef={avatarRef}
        data={data}
        currentStage={currentStage}
        currentLevel={currentLevel}
      />

      <ExperienceCardsGrid 
        cards={currentLevel.cards}
        currentStage={cardsStage}
        previousStage={previousStage}
        isAnimating={isAnimating}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
};