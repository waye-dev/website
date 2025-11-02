"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";
import { projectFocus } from "./ecosystem-data";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface ProjectFocusProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  dotsRef: React.MutableRefObject<HTMLDivElement[]>;
  darkCircleCount: number;
  onAnimationComplete: () => void;
}

export const ProjectFocus = ({ containerRef, dotsRef, darkCircleCount, onAnimationComplete }: ProjectFocusProps) => {
  const targetRef1 = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || dotsRef.current.length === 0 || !targetRef1.current || !targetRef2.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
      });

      // Find the rightmost dot position to calculate common path
      const containerRect = containerRef.current.getBoundingClientRect();
      const rightEdge = containerRect.right;

      // Randomize which dots go to which target
      const shuffledIndices = Array.from({ length: dotsRef.current.length }, (_, i) => i);
      for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
      }

      // Track if we've applied shadow to one dot per target
      let shadowAppliedToLeftTarget = false;
      let shadowAppliedToRightTarget = false;

      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;

        // Use shuffled index to determine target
        const shuffledIndex = shuffledIndices[index];
        const targetRef = shuffledIndex < darkCircleCount ? targetRef1 : targetRef2;
        const isGoingToLightCircle = shuffledIndex >= darkCircleCount; // Right circle is the light one
        const targetRect = targetRef.current!.getBoundingClientRect();
        const dotRect = dot.getBoundingClientRect();

        // Calculate centers
        const dotCenterX = dotRect.left + dotRect.width / 2;
        const dotCenterY = dotRect.top + dotRect.height / 2;
        const targetCenterX = targetRect.left;
        const targetCenterY = targetRect.top;

        // Common path points for all dots
        const rightPoint = rightEdge - dotCenterX - 50; // Right edge of section
        const downDistance = 150; // How far down to go

        // Final target offset - center to center
        const finalX = targetCenterX - dotCenterX;
        const finalY = targetCenterY - dotCenterY;

        // Same scale for both targets
        const scale = 3.5;

        // Get original color from Tailwind config
        const isDark = index < darkCircleCount;
        const bgColor = isDark ? "#1B1F35" : "#C4DEF9"; // blue-custom-900 : #C4DEF9

        // Set transform origin to center for proper scaling
        gsap.set(dot, { transformOrigin: "center center" });

        // All dots follow same path: right -> down (arc) -> left to target
        // First animate the path
        tl.to(
          dot,
          {
            motionPath: {
              path: [
                { x: 0, y: 0 },                    // Start position
                { x: rightPoint, y: 0 },           // Move right to edge
                { x: rightPoint, y: downDistance }, // Move down
                { x: finalX, y: finalY }           // Move left to final position
              ],
              curviness: 1.2,
            },
            background: bgColor,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );

        // Then scale up at the very end
        tl.to(
          dot,
          {
            scale: scale,
            duration: 0.2,
            ease: "power2.out",
          },
          0.8
        );

        // Add shadow to only one dot per target
        const isGoingToLeftTarget = !isGoingToLightCircle;

        if (isGoingToLeftTarget && !shadowAppliedToLeftTarget) {
          // Apply shadow to first dot going to left target
          tl.to(
            dot,
            {
              boxShadow: "0 0 6px 3px rgba(196, 222, 249, 0.8)",
              duration: 0.3,
              ease: "power1.inOut",
            },
            0.95
          );
          shadowAppliedToLeftTarget = true;
        } else if (isGoingToLightCircle && !shadowAppliedToRightTarget) {
          // Apply shadow to first dot going to right target
          tl.to(
            dot,
            {
              boxShadow: "0 0 6px 3px rgba(196, 222, 249, 0.8)",
              duration: 0.3,
              ease: "power1.inOut",
            },
            0.95
          );
          shadowAppliedToRightTarget = true;
        }
      });

      // Fade in text at the end
      tl.to([textRef1.current, textRef2.current], {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }, 0.9);

      tl.call(() => {
        onAnimationComplete();
      }, [], 1);
    },
    { scope: containerRef, dependencies: [darkCircleCount] }
  );

  return (
    <div className='flex flex-col gap-14'>
      <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-bold font-inknutAntiqua text-center'>Project focus </h5>

      <section className='flex flex-col gap-10 text-xl font-inter font-normal items-center'>
        <section className='flex flex-row gap-20 justify-center w-full max-w-[600px]'>
          {projectFocus.map((distribution, index) => (
            <div
              key={distribution.title}
              className='flex flex-col gap-4 items-center'
            >
              <div
                ref={index === 0 ? textRef1 : textRef2}
                className='flex flex-col gap-2 items-center'
                style={{ opacity: 0 }}
              >
                <div className='relative w-[120px] h-[120px] flex items-center justify-center'>
                  <div
                    ref={index === 0 ? targetRef1 : targetRef2}
                    className='absolute'
                    style={{
                      width: '0px',
                      height: '0px',
                      top: '50%',
                      left: '50%'
                    }}
                  />
                  <p className='text-center text-black font-inknutAntiqua text-sm z-50 relative'>{distribution.value}</p>
                </div>
                <p className='text-center text-black text-sm'>{distribution.title}</p>
              </div>
            </div>
          ))}
        </section>

        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[12px]'>
          <li>Core protocol development dominates in the Bitcoin ecosystem.</li>
          <li>
            Application work (payments, messaging, hardware) is evenly distributed between the Bitcoin and Nostr ecosystems. This mirrors the
            ecosystem's maturation: infrastructure exists, user-facing tools are now needed.
          </li>
          <li>
            Infrastructure work (19.2%), comprising developer toolkits and libraries, appears to be the domain of either newcomers or veterans,
            with no middle ground.
          </li>
          <li>Within our sample, no expert contributors (6+ years OSS experience) worked on core protocol development.</li>
        </ul>
      </section>
    </div>
  );
};