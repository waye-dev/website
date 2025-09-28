import { useRef, useEffect } from "react";
import gsap from "gsap";

const ANIMATION_CONSTANTS = {
  CONVERGENCE_DURATION: 0.6,    // How long cards take to meet in center
  SWITCH_DURATION: 0.1,         // How long the switch effect takes
  RETURN_DURATION: 0.5,         // How long cards take to return to positions
  CONVERGENCE_STAGGER_DELAY: 0.1, // Delay between each card starting movement (ordered)
  
  VERTICAL_OFFSET: 0,         // How much to move up from center (negative = up)
  SCALE_WHEN_TOGETHER: 0.8,    // How small cards get when together (0.8 = 80% size)
  
  PRIMARY_ANGLE: 15,            // Main angle for first two cards
  SECONDARY_ANGLE_REDUCTION: 0.7, // Multiplier for additional cards (0.7 = 70% of primary)
  
  OPACITY_DURING_SWITCH: 0.7,   // Opacity during the switch phase (0.7 = 70% opacity)
  Z_INDEX_OFFSET: 10            // Z-index offset for layering
} as const;

interface CardSwitchAnimationProps {
  currentStage: string;
  previousStage?: string;
  isAnimating: boolean;
  onAnimationComplete: () => void;
  onContentSwitch?: () => void;
}

export const useCardSwitchAnimation = ({
  currentStage,
  previousStage,
  isAnimating,
  onAnimationComplete,
  onContentSwitch
}: CardSwitchAnimationProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationTimeline = useRef<gsap.core.Timeline | null>(null);

  const registerCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  const animateCardSwitch = () => {
    if (!cardRefs.current.length || !isAnimating) return;

    if (animationTimeline.current) {
      animationTimeline.current.kill();
    }

    const cards = cardRefs.current.filter(Boolean);
    if (cards.length < 2) return;

    animationTimeline.current = gsap.timeline({
      onComplete: onAnimationComplete
    });

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 1.5 + ANIMATION_CONSTANTS.VERTICAL_OFFSET;


    // Phase 1: Bring cards to center in order (1, 2, 3...)
    cards.forEach((card, index) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const currentX = rect.left + rect.width / 2;
      const currentY = rect.top + rect.height / 2;
      
      const moveX = centerX - currentX;
      const moveY = centerY - currentY;
      
      const angle = index % 2 === 0 ? ANIMATION_CONSTANTS.PRIMARY_ANGLE : -ANIMATION_CONSTANTS.PRIMARY_ANGLE;
      const finalAngle = index < 2 ? angle : angle * ANIMATION_CONSTANTS.SECONDARY_ANGLE_REDUCTION;

      animationTimeline.current!.to(card, {
        x: moveX,
        y: moveY,
        rotation: finalAngle,
        scale: ANIMATION_CONSTANTS.SCALE_WHEN_TOGETHER,
        duration: ANIMATION_CONSTANTS.CONVERGENCE_DURATION,
        ease: "power2.inOut"
      }, index * ANIMATION_CONSTANTS.CONVERGENCE_STAGGER_DELAY);
    });

    // Phase 2: Switch cards by changing z-index and opacity effect
    animationTimeline.current.to(cards, {
      opacity: ANIMATION_CONSTANTS.OPACITY_DURING_SWITCH,
      duration: ANIMATION_CONSTANTS.SWITCH_DURATION,
      ease: "power2.inOut",
      onComplete: () => {
        // Trigger content switch when cards are together and hidden
        if (onContentSwitch) {
          onContentSwitch();
        }

        cards.forEach((card, index) => {
          if (!card) return;
          gsap.set(card, {
            zIndex: cards.length - index + ANIMATION_CONSTANTS.Z_INDEX_OFFSET,
            opacity: 1
          });
        });
      }
    }, ANIMATION_CONSTANTS.CONVERGENCE_DURATION);

    // Phase 3: Return cards to their original positions
    const returnStartTime = ANIMATION_CONSTANTS.CONVERGENCE_DURATION + ANIMATION_CONSTANTS.SWITCH_DURATION;
    
    // Simply reset all transforms to return to original positions
    animationTimeline.current.to(cards, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      duration: ANIMATION_CONSTANTS.RETURN_DURATION,
      ease: "power2.inOut"
    }, returnStartTime);

    const totalDuration = ANIMATION_CONSTANTS.CONVERGENCE_DURATION + ANIMATION_CONSTANTS.SWITCH_DURATION + ANIMATION_CONSTANTS.RETURN_DURATION;
    animationTimeline.current.set(cards, { 
      zIndex: "auto",
      clearProps: "transform,opacity"
    }, totalDuration);
  };

  useEffect(() => {
    if (isAnimating && previousStage && previousStage !== currentStage) {
      animateCardSwitch();
    }
  }, [currentStage, previousStage, isAnimating]);

  return {
    registerCardRef,
    animateCardSwitch
  };
};
