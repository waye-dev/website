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
  const [showProjectFocus, setShowProjectFocus] = useState<boolean>(false);
  const targetRef1 = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);

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

      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;

        const targetRef = index < darkCircleCount ? targetRef1 : targetRef2;
        const targetRect = targetRef.current!.getBoundingClientRect();
        const dotRect = dot.getBoundingClientRect();

        // Calculate center-to-center offset
        const dotCenterX = dotRect.left + dotRect.width / 2;
        const dotCenterY = dotRect.top + dotRect.height / 2;
        const targetCenterX = targetRect.left + targetRect.width / 2;
        const targetCenterY = targetRect.top + targetRect.height / 2;

        // Common path points for all dots
        const rightPoint = rightEdge - dotCenterX - 50; // Right edge of section
        const downDistance = 150; // How far down to go
        const arcBottomY = dotRect.top + downDistance;

        // Final target offset
        const finalX = targetCenterX - dotCenterX;
        const finalY = targetCenterY - dotCenterY;

        // Different scales: first target dots smaller, accumulated dots bigger
        const scale = index < darkCircleCount ? 2.0 : 3.5;

        // All dots follow same path: right -> down (arc) -> left to target
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
            scale: scale,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );
      });

      // Show project focus values after animation completes
      tl.call(() => {
        setShowProjectFocus(true);
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
              className='flex flex-col gap-2 items-center'
            >
              <div
                ref={index === 0 ? targetRef1 : targetRef2}
                className='w-0 h-0'
                style={{ position: 'relative' }}
              >
                {showProjectFocus && (
                  <p className='text-center font-inknutAntiqua text-3xl text-white'>{distribution.value}</p>
                )}
              </div>
              {showProjectFocus && (
                <p className='text-center text-white'>{distribution.title}</p>
              )}
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