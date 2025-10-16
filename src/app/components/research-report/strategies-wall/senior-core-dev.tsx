import React from "react";
import Link from "next/link";
import Image from "next/image";
import { QuoteCards } from "../_components/quotes";
import { StrategySubSection, StrategySubSectionWithList } from "./strategy-sub-sections";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

export const SeniorCoreDev = () => {
  return (
      <div className='flex flex-col gap-16'>
      <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>Senior core dev: looking beyond the protocol</h1>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
        <Image src='/svgs/senior-core-dev.svg' alt='senior core dev' width={516} height={580} />

        <div className='flex flex-col gap-8'>
          <StrategySubSection
            title='Key motivators vs lived reality: '
            description={
              <p>
                Interestingly, in our sample there were no senior core contributors. Of the experienced developers we interviewed working on core
                infrastructure (3-6 years in OSS), only one was actively working in a grant-funded role. The others had moved on to found their own
                projects or were hired by companies in the ecosystem. One contributor reported leaving their role due to burnout. This aligns with
                the broader ecosystem pattern: at present, there are only 5 active Bitcoin Core maintainers and 41 active Core Developers total{" "}
                <span>
                  <Link href='https://s3.amazonaws.com/1a1z.com/files/1A1z%20-%20Funding%20Bitcoin%20-%20Part%201.pdf' target='_blank'>
                    (1A1z 2024)
                  </Link>
                </span>{" "}
                — an extremely small and concentrated space despite the broader ecosystem's growth.
              </p>
            }
          />
          <StrategySubSectionWithList
            title='Departure patterns: '
            description={[
              "Contributors navigate years of protocol work without clear impact metrics, until the motivation that sustained them fades, leading to what one contributor described as a 'fog of motivation.'",
              "Expertise in core development paradoxically leads away from core development: the skills gained — protocol knowledge, ecosystem understanding —  makes contributors too valuable (or too burned out) to remain in grant-funded roles.",
              "This suggests that grant-funded core development may be inherently transitional, a launching pad rather than a destination for experienced developers.",
            ]}
          />
          <StrategySubSectionWithList
            title='Key Challenges : '
            description={[
              "Predictability of motivation in unpredictable environment [Institutional]",
              "The amorphous scope of OSS contribution [Human]",
              "Realizing your vision vs working for the grant [Institutional]",
              "No clear career pathways beyond cycling through grants [Structural]",
            ]}
          />
        </div>
      </section>

      <QuoteCards
        quotes={[
          {
            id: "2",
            text: `At some point, I stopped being able to believe that I could just build a better technology and trust that it would be used well, and [became] more focused on how that technology is entering the world. > >`,
            shareId: SHAREABLE_description_IDS.SENIOR_APP_DEV_QUOTE_23,
            author: {
              type: "mid",
              respondentNumber: 2,
            },
          },
          {
            id: "4",
            text: "[Motivation] was all the things. It was research, then it was ideology, then it was making money, then it was back to ideology. … It was always hard to reflect on this, so it was always kind of foggy. … I was working for many years, and I wish I spent more time thinking about meta questions about why I work than actually working. So if somebody had asked me more often, I would have a good answer by now, and maybe I would have quit earlier, or maybe I would just have enjoyed it better. … I wish I did more thinking about this exact question at the time.",
            shareId: SHAREABLE_description_IDS.MOTIVATION_QUOTE_4,
            author: {
              type: "mid",
              respondentNumber: 4,
            },
          },
        ]}
      />
      </div>
  );
};

