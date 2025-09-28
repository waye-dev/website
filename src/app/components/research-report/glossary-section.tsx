"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion"

export const GlossarySection = ({ summary, title, index, onInViewChange }: { title: string; index: number; summary: string | React.ReactNode; onInViewChange?: (id: number, inView: boolean) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%" });

  useEffect(() => {
    if(onInViewChange) {
      onInViewChange(index, isInView);
    }
  }, [isInView, index, onInViewChange])

  return (
    <div
      ref={ref}
      className={
        `flex flex-col w-full gap-2.5 py-[1.875rem] px-[0.9375rem] pr-[1.875rem] rounded-[10px] text-black transition-all duration-500 ease-in-out`
        + (isInView ? " bg-blue-custom-900 text-white" : "")
      }
      style={{ opacity: isInView ? 1 : 0.3 }}
    >
      <section className='flex flex-col-reverse md:flex-row md:items-center justify-between gap-2 md:gap-6'>
        <h4 className='uppercase text-2xl font-normal font-josefinSans'>{title}</h4>
        <p className='uppercase text-2xl font-josefinSans text-gray-custom-500 font-normal whitespace-nowrap'>PART {index}</p>
      </section>

      <div
        className={
          "text-lg cursor-pointer justify-normal font-normal transition-all duration-500 ease-in-out"
          + (isInView ? " text-white" : "text-gray-custom-600")
        }
      >
        {summary}
      </div>
    </div>
  );
};

export const GLOSSARY_TEXT_SECTIONS = [
  {
    title: "STUDY OVERVIEW",
    summary:
      "Context, methodology, and participant demographics. Our 26 participants span 10+ countries. 42% of them have less than 3 years of OSS experience, reflecting a steady inflow of developers, while 69% have been grant-funded for 2 years or less, indicating potential sustainability challenges.",
  },
  {
    title: "TOP LEVEL ANALYSIS",
    summary:
      "Early reflections with participants surfaced core tensions between commons ideals and commercial realities, sustainable vision and unsustainable practice, especially as experience grows.",
  },
  {
    title: "THE TYRANNY OF PERMISSIONLESSNESS",
    summary: (
      <div>
        <p>Our core findings reveal that four converging dimensions create unsustainable conditions:</p>
        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
          <li>
            <span className='font-semibold'>Ideological :</span> The social mission that attracts developers justifies self-exploitation
          </li>
          <li>
            <span className='font-semibold'>Structural:</span> Permissionless architecture and work practices create isolated, overwhelming work
          </li>
          <li>
            <span className='font-semibold'>Human:</span> Self-management without support leads to invisible labor and unsustainable patterns
          </li>
          <li>
            <span className='font-semibold'>Institutional:</span> Grant systems reinforce individual struggles rather than providing collective
            support
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "FOUR STRATEGIES FOR CHAOS",
    summary:
      "Contributors adopt distinct approaches based on experience and project type. With experience, they do not build more sustainable approaches — they simply learn to lean into chaos.",
  },
  {
    title: "BEYOND FINANCIAL SUSTAINABILITY",
    summary: (
      <div>
        Three critical tensions emerge for a sustainable work environment:
        <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
          <li>
            <span>The ecosystem depends on constant developer turnover while losing critical knowledge</span>
          </li>
          <li>
            <span>Grant structures actively discourage the revenue models that could sustain application development</span>
          </li>
          <li>
            <span>
              Over half of participants have experienced burnout, yet the ecosystem treats this as individual failure rather than systemic dysfunction
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "TOWARD SUSTAINABLE PERMISSIONLESSNESS",
    summary: (
      <div>
        <p>
          Concrete recommendations for creating support structures: team-based funding, extended renewal cycles, administrative infrastructure, mental
          health resources, and transition pathways that maintain engagement beyond direct development.
        </p>
        <p>
          The opportunity is clear: By building human support systems that match our technical infrastructure, freedom tech can fulfill its promise of
          sustainable, decentralized development — maintaining permissionlessness while ending the tyranny.
        </p>
      </div>
    ),
  },
];

export const GLOSSARY_LIST = [
  {
    id: 1,
    title: "Study Overview",
    heightPercentage: 0.6,
    widthPercentage: 0.75,
  },
  {
    id: 2,
    title: "Top-Level Analysis",
    heightPercentage: 0.75,
    widthPercentage: 1.25,
  },
  {
    id: 3,
    title: "The Tyranny of Permissionlessness",
    heightPercentage: 0.9,
    widthPercentage: 0.75,
  },
  {
    id: 4,
    title: "Four Strategies for Chaos",
    heightPercentage: 0.75,
    widthPercentage: 1.25,
  },
  {
    id: 5,
    title: "Beyond Financial Sustainability",
    heightPercentage: 1,
    widthPercentage: 3.5,
  },
  {
    id: 6,
    title: "Toward Sustainable Permissionlessness",
    heightPercentage: 0.9,
    widthPercentage: 2.5,
  },
];

export const GlossaryChart = ({ activeId }: { activeId: number | null }) => {
  const [isClient, setIsClient] = useState(false);
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0); // Track width for mobile detection

  useEffect(() => {
    setIsClient(true);
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if the screen is mobile (e.g., width < 640px)
  const isMobile = isClient && screenWidth < 640;

  // Scale down height for mobile (50% of screen height, capped at 300px)
  const estimatedScreenHeight = isMobile
    ? Math.min(screenHeight * 0.5, 300)
    : screenHeight * 0.75;

  // Scale down width multiplier for mobile
  const widthMultiplier = isMobile ? 8 : 12;

  return (
    <div className="flex flex-row items-end gap-2">
      {GLOSSARY_LIST.map((part) => {
        const isActive = part.id === activeId;
        return (
          <div
            key={part.id}
            className="bg-blue-custom-900 rounded-[2px] p-4 transition-transform duration-500 ease-in-out flex justify-center items-end"
            style={{
              height: isClient ? `${estimatedScreenHeight * part.heightPercentage}px` : "300px",
              width: isMobile
                ? `${Math.floor(widthMultiplier * part.widthPercentage)}vw`
                : `${Math.floor(widthMultiplier * part.widthPercentage)}%`,
              transform: isActive ? "translateY(-30px)" : "translateY(0)",
            }}
          >
            <h1
              className="font-inknutAntiqua text-white text-xl [writing-mode:vertical-rl] rotate-180 whitespace-nowrap"
              style={{ fontSize: `${estimatedScreenHeight * (isMobile ? 0.02 : 0.025)}px` }}
            >
              Part {part.id}: {part.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
