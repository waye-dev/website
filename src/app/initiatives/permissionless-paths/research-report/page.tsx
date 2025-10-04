"use client";

import { useState } from "react";
import Wrapper from "@/app/components/wrapper";
import { StudyOverviewSection } from "@/app/components/research-report/study-overview-section";
import { GLOSSARY_TEXT_SECTIONS, GlossaryChart, GlossarySection } from "@/app/components/research-report/glossary-section";
import { TopLevelAnalysis } from "@/app/components/research-report/top-level-analysis";
import { TyrannyOfPermissionlessness } from "@/app/components/research-report/tyranny-of-permissionlessness";
import { Strategies } from "@/app/components/research-report/strategies";
import { StrategiesWall } from "@/app/components/research-report/strategies-wall";
import Eyeballs from "@/app/components/research-report/_components/eyeballs";
import { BeyondFinancialSustainability } from "@/app/components/research-report/beyond-financial-sustainability";
import { RecommendationReveal } from "@/app/components/research-report/mountains/index";
import { Conclusion } from "@/app/components/research-report/conclusion";
import { FromTyrannyToPermissionlessness } from "@/app/components/research-report/from-tyranny-to-permissionlessness";
import { CoreFindingsTheTyrany } from "@/app/components/research-report/core-findings-the-tyrany";

export default function ResearchReport() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
      <main>
        <div className='bg-gray-custom-400 text-black'>
          <Wrapper>
            <div className='flex flex-col gap-16 md:gap-24'>
              <div className='flex flex-col gap-14 items-center w-full pt-16'>
                <section className='flex flex-col items-center gap-5'>
                  <h1 className='text-[30px] md:text-[40px] lg:text-[54px] leading-[120%] md:leading-[75.6px] font-inknutAntiqua font-normal text-center'>
                    Permissionless Paths
                  </h1>
                  <p className='text-xl sm:text-3xl font-josefinSlab font-normal text-center'>By Laura Lotti</p>
                </section>

                <Eyeballs 
                  guyImageSrc="/svgs/research/intro/guy.svg"
                  eyesImageSrc="/svgs/research/intro/eyes.svg"
                />
              </div>

              <div className='flex flex-col gap-5'>
                <h3 className='text-xl sm:text-4xl font-josefinSlab font-bold sm:text-center'>Executive Summary</h3>
                <section className='flex flex-col gap-3'>
                  <p>
                    This report presents findings from a qualitative study examining sustainable open source development in the freedom tech ecosystem
                    — an emerging field of decentralized, censorship-resistant technologies built to resist institutional capture. Between March and
                    May 2025, we interviewed 26 Bitcoin and Nostr contributors with at least 12 months of full-time grant-funded experience. We
                    explored their motivations, work patterns, and challenges to understand how they navigate open source development as independent
                    contributors. While grant funding enables work free from corporate capture, our research reveals critical gaps in support
                    structures for this decentralized workforce.
                  </p>

                  <span>
                    <strong>
                      Our core finding: the very values and features that attract developers to the Bitcoin and Nostr ecosystems — freedom as an
                      ideal, permissionless participation, autonomy over projects — become the source of their greatest challenges.
                    </strong>{" "}
                    We call this the “”tyranny of permissionlessness:” while these principles enable open innovation and resist capture, without
                    support structures they lead developers to navigate unlimited responsibility alone.
                  </span>
                  <strong>
                    This isn’t inevitable: with intentional design, we can maintain permissionless participation while building sustainable work
                    practices.
                  </strong>
                </section>
                <p>The report unfolds in six parts:</p>
              </div>
            </div>
          </Wrapper>

          <Wrapper className='py-24'>
          <div className='flex flex-col lg:flex-row w-full gap-16'>
            <section className='flex-1 relative'>
              <div className='flex flex-col gap-6 lg:pt-[70vh] pb-[85px]'>
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

            <div className='hidden lg:block lg:sticky top-0 h-screen'>
              <div className='w-full h-full flex items-center'>
                <GlossaryChart activeId={activeId} />
              </div>
            </div>
          </div>
        </Wrapper>

          <div className='flex flex-col gap-16'>
            <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='study-overview'>
              <StudyOverviewSection />
            </Wrapper>

            <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='top-level-analysis'>
              <TopLevelAnalysis />
            </Wrapper>
          </div>
        </div>
        <div className='bg-gray-custom-400 relative z-[2]'>
        <CoreFindingsTheTyrany />
        </div>
        <div className='bg-blue-custom-1200 relative z-[11]' data-section='tyranny-of-permissionlessness'>
          <div className='-mt-48 pt-64'>
            <TyrannyOfPermissionlessness />
          </div>
        </div>
        <div className='bg-blue-custom-1200'>
          <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='four-strategies-for-chaos'>
            <Strategies />
          </Wrapper>
        </div>

        <div className='bg-blue-custom-1200'>
          <StrategiesWall />
        </div>
       
        <div className='bg-blue-custom-1200'>
          <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='beyond-financial-sustainability'>
            <BeyondFinancialSustainability />
          </Wrapper>
        </div>
        <div className='bg-blue-custom-1100 overflow-hidden'>
          <RecommendationReveal />
        </div>

        <div className='bg-gray-custom-400'>
          <FromTyrannyToPermissionlessness />
        </div>
        <div className='bg-gray-custom-400 text-black'>
          <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='toward-sustainable-permissionlessness'>
            <Conclusion />
          </Wrapper>
        </div>
      </main>
  );
}
