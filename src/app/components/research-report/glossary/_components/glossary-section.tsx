"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { sectionSelectors } from "../constants";

export const GlossarySection = ({ summary, title, index, onInViewChange }: { title: string; index: number; summary: string | React.ReactNode; onInViewChange?: (id: number, inView: boolean) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0% -50% 0%" });

  useEffect(() => {
    if(onInViewChange) {
      onInViewChange(index, isInView);
    }
  }, [isInView, index, onInViewChange])

  const handleSectionClick = () => {
    const selector = sectionSelectors[index as keyof typeof sectionSelectors];
    const element = document.querySelector(selector);

    if (element) {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY - 100;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={ref}
      id={`glossary-item-${index}`}
      onClick={handleSectionClick}
      className={
        `flex flex-col w-full gap-2.5 py-[1.875rem] px-[0.9375rem] pr-[1.875rem] rounded-[10px] text-black transition-all duration-500 ease-in-out cursor-pointer`
        + (isInView ? " bg-blue-custom-900 text-white" : "")
      }
    >
      <section className='hidden sm:flex flex-row items-center justify-between gap-6'>
        <h4 className='uppercase text-xl font-normal font-josefinSans'>{title}</h4>
        <p className='uppercase text-xl font-josefinSans text-gray-custom-500 font-normal whitespace-nowrap'>PART {index}</p>
      </section>
      <section className='flex sm:hidden flex-col items-start justify-between gap-3'>
      <p className='uppercase text-xl font-josefinSans text-gray-custom-500 font-normal whitespace-nowrap'>PART {index}</p>
        <h4 className='uppercase text-xl font-normal font-josefinSans'>{title}</h4>
      </section>

      <div
        className={
          "text-sm sm:text-lg cursor-pointer justify-normal font-normal transition-all duration-500 ease-in-out"
          + (isInView ? " text-white" : "text-gray-custom-600")
        }
      >
        {summary}
      </div>
    </div>
  );
};

