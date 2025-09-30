'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface AnimatedSVGProps {
  stage: 'framesOnly' | 'innerOnly' | 'complete';
  replayKey: number;
}

export const AnimatedSVG = ({ stage, replayKey }: AnimatedSVGProps) => {
  // Stage 1 paths (outer frames)
  const frame1Ref = useRef<SVGPathElement>(null);
  const frame2Ref = useRef<SVGPathElement>(null);
  const frame3Ref = useRef<SVGPathElement>(null);

  // Stage 2 paths (inner elements)
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);

  const circle1aRef = useRef<SVGCircleElement>(null);
  const circle1bRef = useRef<SVGCircleElement>(null);
  const circle1cRef = useRef<SVGCircleElement>(null);
  const circle2aRef = useRef<SVGCircleElement>(null);
  const circle2bRef = useRef<SVGCircleElement>(null);
  const circle2cRef = useRef<SVGCircleElement>(null);
  const circle3aRef = useRef<SVGCircleElement>(null);
  const circle3bRef = useRef<SVGCircleElement>(null);
  const circle3cRef = useRef<SVGCircleElement>(null);

  const allCircles = [
    circle1aRef, circle1bRef, circle1cRef,
    circle2aRef, circle2bRef, circle2cRef,
    circle3aRef, circle3bRef, circle3cRef
  ];

  useGSAP(() => {
    const framePaths = [frame1Ref.current, frame2Ref.current, frame3Ref.current];
    const stage2Paths = [
      line1Ref.current, line2Ref.current, line3Ref.current,
      circle1aRef.current, circle1bRef.current, circle1cRef.current,
      circle2aRef.current, circle2bRef.current, circle2cRef.current,
      circle3aRef.current, circle3bRef.current, circle3cRef.current
    ];

    // Initialize stroke dash arrays
    framePaths.forEach(path => {
      if (!path) return;
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = stage === 'innerOnly' ? '0' : `${pathLength}`;
    });

    stage2Paths.forEach(path => {
      if (!path) return;
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
    });

    allCircles.forEach(circleRef => {
      const circle = circleRef.current;
      if (!circle) return;
      circle.style.fill = 'none';
    });

    // Animate based on stage
    if (stage === 'framesOnly') {
      // Stage 1: Draw frames only
      framePaths.forEach(path => {
        if (!path) return;
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut"
        });
      });
    } else if (stage === 'innerOnly') {
      // Only animate inner elements (frames already drawn)
      stage2Paths.forEach(path => {
        if (!path) return;
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut"
        });
      });

      // Fill circles after stroke animation
      allCircles.forEach(circleRef => {
        const circle = circleRef.current;
        if (!circle) return;
        gsap.to(circle, {
          fill: 'black',
          duration: 0.5,
          delay: 1.5,
          ease: "power2.inOut"
        });
      });
    } else if (stage === 'complete') {
      // Draw frames first, then inner elements
      framePaths.forEach(path => {
        if (!path) return;
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut"
        });
      });

      // Draw inner elements after frames complete
      stage2Paths.forEach(path => {
        if (!path) return;
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          delay: 2,
          ease: "power2.inOut"
        });
      });

      // Fill circles after inner elements are drawn
      allCircles.forEach(circleRef => {
        const circle = circleRef.current;
        if (!circle) return;
        gsap.to(circle, {
          fill: 'black',
          duration: 0.5,
          delay: 3.5, // 2 (frames) + 1.5 (inner elements) = 3.5
          ease: "power2.inOut"
        });
      });
    }
  }, { dependencies: [stage, replayKey] });

  return (
    <div className="flex gap-4 items-center w-[1410px]">
      <svg width="459" height="274" viewBox="0 0 459 274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={frame1Ref}
          d="M2.13261 263.466L52.0534 7.65798C52.6973 4.37608 55.5707 2.00122 58.915 2.00122H449.551C453.996 2.00122 457.312 6.08628 456.398 10.4344L402.635 266.242C401.956 269.483 399.097 271.795 395.787 271.795H8.99413C4.59057 271.795 1.28791 267.779 2.13261 263.459V263.466Z"
          stroke="black"
          strokeWidth="3.46192"
          strokeMiterlimit="10"
          fill="none"
        />
        <circle ref={circle1aRef} cx="65.4167" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <circle ref={circle1bRef} cx="75.7192" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <circle ref={circle1cRef} cx="86.0291" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <path
          ref={line1Ref}
          d="M47.9134 28.8427H452.757"
          stroke="black"
          strokeWidth="2.07715"
          strokeMiterlimit="10"
        />
      </svg>

      <svg width="459" height="274" viewBox="0 0 459 274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={frame2Ref}
          d="M2.13261 263.466L52.0534 7.65798C52.6973 4.37608 55.5707 2.00122 58.915 2.00122H449.551C453.996 2.00122 457.312 6.08628 456.398 10.4344L402.635 266.242C401.956 269.483 399.097 271.795 395.787 271.795H8.99413C4.59057 271.795 1.28791 267.779 2.13261 263.459V263.466Z"
          stroke="black"
          strokeWidth="3.46192"
          strokeMiterlimit="10"
          fill="none"
        />
        <circle ref={circle2aRef} cx="65.4167" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <circle ref={circle2bRef} cx="75.7192" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <circle ref={circle2cRef} cx="86.0291" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <path
          ref={line2Ref}
          d="M47.9134 28.8427H452.757"
          stroke="black"
          strokeWidth="2.07715"
          strokeMiterlimit="10"
        />
      </svg>

      <svg width="459" height="274" viewBox="0 0 459 274" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={frame3Ref}
          d="M2.13261 263.466L52.0534 7.65798C52.6973 4.37608 55.5707 2.00122 58.915 2.00122H449.551C453.996 2.00122 457.312 6.08628 456.398 10.4344L402.635 266.242C401.956 269.483 399.097 271.795 395.787 271.795H8.99413C4.59057 271.795 1.28791 267.779 2.13261 263.459V263.466Z"
          stroke="black"
          strokeWidth="3.46192"
          strokeMiterlimit="10"
          fill="none"
        />
        <circle ref={circle3aRef} cx="65.4167" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <circle ref={circle3bRef} cx="75.7192" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <circle ref={circle3cRef} cx="86.0291" cy="17.3749" r="3.448" stroke="black" strokeWidth="1" fill="none" />
        <path
          ref={line3Ref}
          d="M47.9134 28.8427H452.757"
          stroke="black"
          strokeWidth="2.07715"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};