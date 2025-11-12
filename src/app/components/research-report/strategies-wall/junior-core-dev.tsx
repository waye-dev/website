import React from "react";
import Image from "next/image";
import { QuoteCards } from "../_components/quotes";
import { StrategySubSection, StrategySubSectionWithList } from "./strategy-sub-sections";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

export const JuniorCoreDev = () => {
  return (
    <div className='flex flex-col gap-16'>
      <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>Junior core dev: lost in the protocol</h1>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
        <Image src='/svgs/junior-core-dev.svg' alt='junior core dev' width={516} height={580} />

        <div className='flex flex-col gap-8'>
          <StrategySubSection
            title='Key motivators vs lived reality: '
            description='Newer contributors working on core infrastructure are particularly attracted by the endless opportunities the ecosystem offers for personal and professional growth but struggle with self-management, isolation and pressure to deliver in a low feedback environment.'
          />
          <StrategySubSection
            title='Entry pathways: '
            description='Most contributors joined the ecosystem through fellowships or university connections. Some of them had less than 1 year of OS experience prior to their grant-funded positions.'
          />
          <StrategySubSection
            title='Routine: '
            description='Newer core developers (with less than 3 years grant-funded experience) tend to have more structured routines that help them deal with the uncertainty of everyday work. These include: focus tracking, productivity strategies, and tool minimization. As one participant put it: "we minimize the tools as much as possible and maximize the effectiveness of a single tool."'
          />

          <StrategySubSectionWithList
            title='Key Challenges : '
            description={[
              "Growing without guidance [Structural]",
              "Excited to collaborate, but working in isolation [Structural]",
              "Permissionless entry: open but opaque [Institutional]",
              "Bitcoin is forever, grants for a year only [Institutional]",
              "Hands-off funders: autonomous but abandoned [Institutional]",
            ]}
          />
        </div>
      </section>

      <QuoteCards
        quotes={[
          {
            id: "3",
            text: "I've been doing the AIR sessions. … I do that every week, so that next week I know exactly what I'm supposed to do, because there's no one telling me what to do.",
            author: {
              type: "new",
              respondentNumber: 3,
            },
          },
          {
            id: "14",
            text: "I'm quite wary about open communication and coming out as coming across as unprepared or not as informed or knowledgeable about something. So that really impacted how much I wouldn't ask questions because I felt I should know it, and I think that affected how much I could communicate in the community channel.",
            author: {
              type: "new",
              respondentNumber: 14,
            },
          },
          {
            id: "10",
            text: "I knew one person at the beginning. It's probably one of the biggest reasons why I lasted. You know, I survived last year.",
            author: {
              type: "new",
              respondentNumber: 10,
            },
          },
        ]}
      />
    </div>
  );
};
