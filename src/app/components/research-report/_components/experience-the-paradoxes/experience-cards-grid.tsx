import { useState, useEffect } from "react";
import { Card } from "./card";
import { ExperienceStage } from "./types";
import { useCardSwitchAnimation } from "./use-card-switch-animation";

interface ExperienceCardsGridProps {
  cards: any[];
  previousCards?: any[];
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
  const [displayCards, setDisplayCards] = useState(cards);

  // Initialize display cards and handle non-animation updates
  useEffect(() => {
    if (!isAnimating) {
      setDisplayCards(cards);
    }
  }, [cards, isAnimating]);

  // When animation starts, show previous cards if available
  useEffect(() => {
    if (isAnimating && previousCards) {
      setDisplayCards(previousCards);
    }
  }, [isAnimating, previousCards]);

  const handleContentSwitch = () => {
    setDisplayCards(cards);
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-7xl mx-auto px-4">
        {displayCards.map((card: any, index: number) => (
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
              currentStage={currentStage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
