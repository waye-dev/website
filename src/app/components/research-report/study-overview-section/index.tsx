"use client";

import { BitcoinSolution } from "./components/bitcoin-solution";
import { OurResearch } from "./components/our-research";
import { KeyFindings } from "./components/key-findings";
import { Methodology } from "./components/methodology";
import { Demographics } from "./components/demographics";
import { ExperienceLevels } from "./components/experience-levels";
import { GrantFundedTenure } from "./components/grant-funded-tenure";
import { EcosystemProject } from "./components/ecosystem-project";

export const StudyOverviewSection = () => {
  return (
    <div className='flex flex-col gap-14'>
      <section className='flex flex-col gap-9'>
        <h2 className='text-[30px] md:text-[40px] lg:text-[50px] leading-[120%] md:leading-[75.6px] font-inknutAntiqua text-center'>
          Study Overview
        </h2>
        <p className='text-lg font-inter font-normal text-left'>
        Open Source Software (OSS) promises to enable new modes of work that transcend corporate constraints: collaborative development beyond institutional boundaries and creative freedom without hierarchical control. In reality, however, open source development is largely beholden to either unpaid volunteer work or corporate employment. This leaves critical infrastructure vulnerable to both burnout and institutional capture.
        </p>
      </section>

      <div className='flex flex-col gap-24'>
        <BitcoinSolution />
        <OurResearch />
        <KeyFindings />
        <Methodology />
        <Demographics />
        <ExperienceLevels />
        <div className='flex flex-col gap-16'>
          <GrantFundedTenure />
          <EcosystemProject />
        </div>
      </div>

    </div>
  );
};
