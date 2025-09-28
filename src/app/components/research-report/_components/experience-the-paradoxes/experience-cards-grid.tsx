import { Card } from "./card";
import { ExperienceStage } from "./types";
import { useCardSwitchAnimation } from "./use-card-switch-animation";

interface ExperienceCardsGridProps {
  cards: any[];
  currentStage: ExperienceStage;
  previousStage?: ExperienceStage | null;
  isAnimating: boolean;
  onAnimationComplete: () => void;
}

export const ExperienceCardsGrid = ({ 
  cards, 
  currentStage, 
  previousStage, 
  isAnimating, 
  onAnimationComplete 
}: ExperienceCardsGridProps) => {
  const { registerCardRef } = useCardSwitchAnimation({
    currentStage,
    previousStage: previousStage || undefined,
    isAnimating,
    onAnimationComplete
  });

  return (
    <div className="flex justify-center pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {cards.map((card: any, index: number) => (
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
