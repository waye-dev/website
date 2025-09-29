import { useRef, useEffect } from "react";
import gsap from "gsap";

const ANIMATION_CONSTANTS = {
  CONVERGENCE_DURATION: 0.6,   
  SWITCH_DURATION: 0.1,        
  RETURN_DURATION: 0.5,        
  CONVERGENCE_STAGGER_DELAY: 0.1, 
  
  VERTICAL_OFFSET: 0,        
  SCALE_WHEN_TOGETHER: 0.8,   
  
  PRIMARY_ANGLE: 15,           
  SECONDARY_ANGLE_REDUCTION: 0.7,
  
  OPACITY_DURING_SWITCH: 0.7,  
  Z_INDEX_OFFSET: 10           
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
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (!cardRefs.current.length || !isAnimating || isMobile) return;

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

    animationTimeline.current.to(cards, {
      opacity: ANIMATION_CONSTANTS.OPACITY_DURING_SWITCH,
      duration: ANIMATION_CONSTANTS.SWITCH_DURATION,
      ease: "power2.inOut",
      onComplete: () => {
        onContentSwitch?.();

        cards.forEach((card, index) => {
          if (!card) return;
          gsap.set(card, {
            zIndex: cards.length - index + ANIMATION_CONSTANTS.Z_INDEX_OFFSET,
            opacity: 1
          });
        });
      }
    }, ANIMATION_CONSTANTS.CONVERGENCE_DURATION);

    const returnStartTime = ANIMATION_CONSTANTS.CONVERGENCE_DURATION + ANIMATION_CONSTANTS.SWITCH_DURATION;
    
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
