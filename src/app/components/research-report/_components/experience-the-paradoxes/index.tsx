"use client";

import { ExperienceParadoxesData } from "./types";
import { useExperienceScroll } from "./use-experience-scroll";
import { ExperienceTimeline } from "./experience-timeline";
import { ExperienceCardsGrid } from "./experience-cards-grid";
import { SectionTitleDescription } from "../../section-title-description";

export const ExperienceParadoxes = ({ data }: { data: ExperienceParadoxesData }) => {
  const {
    currentStage,
    previousStage,
    isAnimating,
    targetStage,
    containerRef,
    avatarRef,
    mobileAvatarRef,
    mobileAvatarNewRef,
    mobileAvatarMidRef,
    mobileAvatarExpertRef,
    lineRef,
    handleAnimationComplete,
    progress,
    scrollDirection
  } = useExperienceScroll();
  
  const cardsStage = isAnimating ? targetStage : currentStage;
  const currentLevel = data[cardsStage];
  const previousLevel = previousStage ? data[previousStage] : null;

  const mobileStage = progress < 0.3 ? 'new' : progress < 0.8 ? 'mid' : 'expert';
  const mobileCurrentLevel = data[mobileStage];

  return (
    <section className="flex flex-col gap-12">
     
    
    <div ref={containerRef} className="h-screen flex flex-col justify-center items-center px-4 relative z-10" suppressHydrationWarning>

      <ExperienceTimeline
        lineRef={lineRef}
        avatarRef={avatarRef}
        mobileAvatarRef={mobileAvatarRef}
        mobileAvatarNewRef={mobileAvatarNewRef}
        mobileAvatarMidRef={mobileAvatarMidRef}
        mobileAvatarExpertRef={mobileAvatarExpertRef}
        data={data}
        currentLevel={currentLevel}
        progress={progress}
        scrollDirection={scrollDirection}
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
          cards={mobileCurrentLevel.cards}
          previousCards={previousLevel?.cards}
          currentStage={mobileStage}
          previousStage={previousStage}
          isAnimating={false}
          onAnimationComplete={handleAnimationComplete}
        />
      </div>
    </div>
    </section>
  );
};