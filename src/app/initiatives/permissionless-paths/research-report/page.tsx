"use client";

import { useState } from "react";
import Image from "next/image";
import Wrapper from "@/app/components/wrapper";
import { StudyOverviewSection } from "@/app/components/research-report/study-overview-section";
import { GLOSSARY_LIST, GLOSSARY_TEXT_SECTIONS, GlossaryChart, GlossarySection } from "@/app/components/research-report/glossary-section";
import { TopLevelAnalysis } from "@/app/components/research-report/top-level-analysis";
import { TyrannyOfPermissionlessness } from "@/app/components/research-report/tyranny-of-permissionlessness";
import { Strategies } from "@/app/components/research-report/strategies";
import Eyeballs from "@/app/components/research-report/_components/eyeballs";
import { BeyondFinancialSustainability } from "@/app/components/research-report/beyond-financial-sustainability";

export default function ResearchReport() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <main>
      <div className='bg-gray-custom-400 text-black'>
        {/* intro section */}
        <Wrapper>
          <div className='flex flex-col gap-24'>
            <div className='flex flex-col gap-14 items-center w-full pt-16'>
              <section className='flex flex-col items-center gap-5'>
                <h1 className='text-[30px] md:text-[40px] lg:text-[54px] leading-[120%] md:leading-[75.6px] font-inknutAntiqua font-normal text-center'>
                  Permissionless Paths Report
                </h1>
                <p className='text-xl sm:text-3xl font-josefinSlab font-normal text-center'>By Laura Lotti</p>
              </section>

              <Eyeballs
                guyImageSrc='/svgs/research/intro/guy.svg'
                eyesImageSrc='/svgs/research/intro/eyes.svg'
                guyWidth={390}
                guyHeight={350}
                eyesWidth={147}
                eyesHeight={20}
              />
            </div>

            <div className='flex flex-col gap-5'>
              <h3 className='text-xl sm:text-4xl font-josefinSlab font-bold'>Executive Summary</h3>
              <section className='flex flex-col gap-3'>
                <p>
                  This report presents findings from a qualitative study examining sustainable open source development in the freedom tech ecosystem —
                  an emerging field of decentralized, censorship-resistant technologies built to resist institutional capture. Between March and May
                  2025, we interviewed 26 Bitcoin and Nostr contributors with at least 12 months of full-time grant-funded experience. We explored
                  their motivations, work patterns, and challenges to understand how they navigate open source development as independent
                  contributors. While grant funding enables work free from corporate capture, our research reveals critical gaps in support structures
                  for this decentralized workforce.
                </p>

                <span>
                  <strong>
                    Our core finding: the very values and features that attract developers to the Bitcoin and Nostr ecosystems — freedom as an ideal,
                    permissionless participation, autonomy over projects — become the source of their greatest challenges.
                  </strong>{" "}
                  We call this the “”tyranny of permissionlessness:” while these principles enable open innovation and resist capture, without support
                  structures they lead developers to navigate unlimited responsibility alone.
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

        {/* glossary section */}
        <Wrapper className='py-24'>
          <div className='flex flex-row w-full gap-16'>
            <section className='flex-1 relative'>
              <div className='flex flex-col gap-6 pt-[70vh] pb-[85px]'>
                {GLOSSARY_TEXT_SECTIONS.map((section, index) => (
                  <GlossarySection
                    key={index}
                    title={section.title}
                    index={index + 1}
                    summary={section.summary}
                    onInViewChange={(id, inView) => {
                      if (inView) {
                        setActiveId(id);
                      } else {
                        setActiveId((prev) => (prev === id ? null : prev));
                      }
                    }}
                  />
                ))}
              </div>
            </section>

            <div className='sticky top-0 h-screen flex items-center'>
              <div className='w-full'>
                <GlossaryChart activeId={activeId} />
              </div>
            </div>
          </div>
        </Wrapper>

        {/* Glossary content section */}
        <div className='flex flex-col gap-16'>
          {/* side bar list navigation */}
          <div className='pl-14'>
            <ul className='list-decimal pl-5 md:pl-8 flex flex-col gap-[7px]'>
              {GLOSSARY_LIST.slice(0, 3).map((part) => (
                <li
                  key={part.id}
                  className={`text-base uppercase text-black font-josefinSans font-medium tracking-wide ${
                    part.id === 1 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {part.title}
                </li>
              ))}
            </ul>
          </div>

          {/* study overview section */}
          <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24'>
            <StudyOverviewSection />
          </Wrapper>

          {/* top level analysis section */}
          <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24'>
            <TopLevelAnalysis />
          </Wrapper>
        </div>
      </div>
      <div className='bg-blue-custom-1100'>
        <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24'>
          <TyrannyOfPermissionlessness />
        </Wrapper>
      </div>
      <div className='bg-blue-custom-1200'>
        <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24'>
          <Strategies />
        </Wrapper>

        <div className='w-full max-h-[600px bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: "url('/svgs/block-bg.svg')" }}>
          <div className='grid grid-cols-2 gap-4 md:gap-8 items-center justify-items-center p-4 md:p-8 h-full'>
            {strategyImages.map((image) => (
              <div key={image.alt} className='flex items-center justify-center'>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className='object-contain' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-blue-custom-1100'>
        <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24'>
          <BeyondFinancialSustainability />
        </Wrapper>
      </div>
    </main>
  );
}

const strategyImages = [
  {
    src: "/svgs/strategy-image-1.svg",
    alt: "strategy image 1",
    width: 355,
    height: 298,
  },
  {
    src: "/svgs/strategy-image-2.svg",
    alt: "strategy image 2",
    width: 355,
    height: 298,
  },

  {
    src: "/svgs/strategy-image-3.svg",
    alt: "strategy image 3",
    width: 355,
    height: 298,
  },

  {
    src: "/svgs/strategy-image-4.svg",
    alt: "strategy image 4",
    width: 355,
    height: 298,
  },
];
