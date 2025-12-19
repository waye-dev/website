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

      const containerRect = containerRef.current.getBoundingClientRect();
      const rightEdge = containerRect.right;

      const shuffledIndices = Array.from({ length: dotsRef.current.length }, (_, i) => i);
      for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
      }

      let shadowAppliedToLeftTarget = false;
      let shadowAppliedToRightTarget = false;

      dotsRef.current.forEach((dot, index) => {
        if (!dot) return;

        // Use shuffled index to determine target
        const shuffledIndex = shuffledIndices[index];
        const isLeftTarget = shuffledIndex < darkCircleCount;
        const targetRef = isLeftTarget ? targetRef1 : targetRef2;
        const targetRect = targetRef.current!.getBoundingClientRect();
        const dotRect = dot.getBoundingClientRect();

        const dotCenterX = dotRect.left + dotRect.width / 2;
        const dotCenterY = dotRect.top + dotRect.height / 2;
        const targetCenterX = targetRect.left;
        const targetCenterY = targetRect.top;

        const rightPoint = rightEdge - dotCenterX - 50;
        const downDistance = 150;

        const finalX = targetCenterX - dotCenterX;
        const finalY = targetCenterY - dotCenterY;
        const scale = 3.5;

        const bgColor = "#C4DEF9";

        gsap.set(dot, { transformOrigin: "center center" });
        tl.to(
          dot,
          {
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: rightPoint, y: 0 },
                { x: rightPoint, y: downDistance },
                { x: finalX, y: finalY }
              ],
              curviness: 1.2,
            },
            background: bgColor,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );

        tl.to(
          dot,
          {
            scale: scale,
            duration: 0.2,
            ease: "power2.out",
          },
          0.8
        );

        // Apply shadow based on which target this dot is going to
        if (isLeftTarget && !shadowAppliedToLeftTarget) {
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
        } else if (!isLeftTarget && !shadowAppliedToRightTarget) {
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
      <h5 className='text-xl md:text-2xl lg:text-[32px] leading-[120%] font-bold font-inknutAntiqua text-center'>Project focus </h5>

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

        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[12px] text-lg'>
          <li>Core protocol development dominates in the Bitcoin ecosystem.</li>
          <li>
            Application work (payments, messaging, hardware) is evenly distributed between the Bitcoin and Nostr ecosystems. This mirrors the
            ecosystem's maturation: infrastructure exists, user-facing tools are now needed.
          </li>
          <li>Nostr developers cluster primarily in applications.</li>
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