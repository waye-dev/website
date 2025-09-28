import { useState, useEffect } from "react";
import { Card } from "./card";
import { ExperienceStage, ExperienceCard } from "./types";
import { useCardSwitchAnimation } from "./use-card-switch-animation";

interface ExperienceCardsGridProps {
  cards: ExperienceCard[];
  previousCards?: ExperienceCard[];
  currentStage: ExperienceStage;
  previousStage?: ExperienceStage | null;
  isAnimating: boolean;
  onAnimationComplete: () => void;
}

export const ExperienceCardsGrid = ({
  cards,
  previousCards,
  currentStage,
  previousStage,
  isAnimating,
  onAnimationComplete
}: ExperienceCardsGridProps) => {
  const [displayCards, setDisplayCards] = useState<ExperienceCard[]>(cards);
  const [hasContentSwitched, setHasContentSwitched] = useState(false);

  // Reset content switch flag when animation starts
  useEffect(() => {
    if (isAnimating && previousStage !== currentStage) {
      setHasContentSwitched(false);
      setDisplayCards(previousCards || cards);
    }
  }, [isAnimating, previousStage, currentStage, previousCards, cards]);

  // Reset to current cards when animation completes
  useEffect(() => {
    if (!isAnimating) {
      setDisplayCards(cards);
      setHasContentSwitched(false);
    }
  }, [isAnimating, cards]);

  const handleContentSwitch = () => {
    if (!hasContentSwitched) {
      setDisplayCards(cards);
      setHasContentSwitched(true);
    }
  };

  const { registerCardRef } = useCardSwitchAnimation({
    currentStage,
    previousStage: previousStage || undefined,
    isAnimating,
    onAnimationComplete,
    onContentSwitch: handleContentSwitch
  });

  return (
    <div className="flex justify-center pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {displayCards.map((card: ExperienceCard, index: number) => (
          <div
            key={`${currentStage}-card-${index}`}
            ref={registerCardRef(index)}
            className="card"
            style={{
              willChange: "transform, opacity",
              position: "relative"
            }}
          >
            <Card
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              alt={card.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
