"use client";

import { useState } from "react";
import { GlossarySection } from "./_components/glossary-section";
import { GlossaryChart } from "./_components/glossary-chart";
import { GLOSSARY_TEXT_SECTIONS } from "./constants";

export const Glossary = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className='flex flex-col lg:flex-row w-full gap-16'>
      <section className='flex-1 relative'>
        <div className='flex flex-col gap-6 lg:pt-[70dvh] pb-[85px]'>
          {GLOSSARY_TEXT_SECTIONS.map((section, index) => {
            const itemId = index + 1;
            return (
              <GlossarySection
                key={index}
                title={section.title}
                index={itemId}
                summary={section.summary}
                onInViewChange={(id, inView) => {
                  if (inView) {
                    setActiveId(id);
                  } else {
                    setActiveId((prev) => (prev === id ? null : prev));
                  }
                }}
              />
            );
          })}
        </div>
      </section>

      <div className='hidden lg:block lg:sticky top-0 h-screen-dynamic'>
        <div className='w-full h-full flex items-center'>
          <GlossaryChart activeId={activeId} />
        </div>
      </div>
    </div>
  );
};

export { GlossarySection } from "./_components/glossary-section";
export { GlossaryChart } from "./_components/glossary-chart";
export { GLOSSARY_TEXT_SECTIONS, GLOSSARY_LIST, sectionSelectors } from "./constants";
