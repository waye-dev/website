import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseAnimateSvgCirclesOptions {
  staggerDelay?: number;
  animationDuration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  ease?: string;
}

export const useAnimateSvgCircles = <T extends HTMLElement>({
  staggerDelay = 0.05,
  animationDuration = 0.6,
  triggerOnce = true,
  threshold = 0.3,
  ease = 'back.out(1.7)',
}: UseAnimateSvgCirclesOptions = {}) => {
  const elementRef = useRef<T>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasAnimated.current)) {
            hasAnimated.current = true;
            animateCircles(element);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce, threshold]);

  const animateCircles = (container: T) => {
    const circles = container.querySelectorAll('circle');

    gsap.fromTo(
      circles,
      {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
      },
      {
        scale: 1,
        opacity: 1,
        duration: animationDuration,
        ease,
        stagger: {
          amount: staggerDelay * circles.length,
          from: 'start',
        },
      }
    );
  };

  return elementRef;
};

