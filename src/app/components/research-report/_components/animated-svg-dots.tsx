'use client';

import { useEffect, useState } from 'react';
import { useAnimateSvgCircles } from '@/hooks/use-animate-svg-circles';

interface AnimatedSvgDotsProps {
  svgPath: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  staggerDelay?: number;
  animationDuration?: number;
  triggerOnce?: boolean;
  threshold?: number;
  ease?: string;
  numerator?: number;
  denominator?: number;
  numeratorColor?: string;
}

export const AnimatedSvgDots = ({
  svgPath,
  alt,
  width,
  height,
  className = '',
  staggerDelay = 0.05,
  animationDuration = 0.6,
  triggerOnce = true,
  threshold = 0.3,
  ease = 'back.out(1.7)',
  numerator,
  denominator,
  numeratorColor = 'white',
}: AnimatedSvgDotsProps) => {
  const [svgContent, setSvgContent] = useState<string>('');

  const containerRef = useAnimateSvgCircles<HTMLDivElement>({
    staggerDelay,
    animationDuration,
    triggerOnce,
    threshold,
    ease,
  });

  useEffect(() => {
    fetch(svgPath)
      .then((response) => response.text())
      .then((data) => {
        setSvgContent(data);
      })
      .catch((error) => {
        console.error('Error loading SVG:', error);
      });
  }, [svgPath]);

  const showNumbers = numerator !== undefined && denominator !== undefined;

  return (
    <div className={`relative ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      {showNumbers && (
        <div className='absolute top-3 -right-4 font-inknutAntiqua text-[26px] leading-none font-semibold'>
          <span style={{ color: numeratorColor }}>{numerator}</span>
          <span className='text-white'>/{denominator}</span>
        </div>
      )}
      <div
        ref={containerRef}
        style={{ width: `${width}px`, height: `${height}px` }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        aria-label={alt}
      />
    </div>
  );
};

