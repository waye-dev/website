"use client";

import Wrapper from "@/app/components/wrapper";
import Eyeballs from "@/app/components/research-report/_components/eyeballs";
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

export const ExecutiveSummary = () => {
  return (
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
          <h3 className='text-xl sm:text-3xl font-inknutAntiqua font-semibold sm:text-center'>Executive Summary</h3>
          <section className='flex flex-col gap-3'>
            <p>
              <strong>
                This report is the first-ever deep-dive into the working lives of independent developers building censorship-resistant technology and what they need to sustain their work.
              </strong> <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_1} /> Earlier this year, we interviewed 26 independent contributors within the Bitcoin and Nostr ecosystems, where grant funding is critical to ensure freedom from institutional capture. Rather than examining specific projects or funding mechanisms, we focused on the builders themselves: their motivations, work patterns, and the challenges they face navigating open source development.
            </p>

            <p>
              <strong>
                Our core finding: the very values and features that attract developers to Bitcoin and Nostr, including freedom, autonomy and permissionless participation, become the source of their greatest challenges.
              </strong> <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_2} />{" "}
              We call this the "tyranny of permissionlessness." While these principles enable open innovation and resist capture, without
              support structures they lead developers to navigate unlimited responsibility alone, leading to burnout and departure.
            </p>

            <p>
              <strong>
                This isn't inevitable. With intentional design, we can maintain permissionless participation while building sustainable work practices.
              </strong> <SimpleShareButton shareId={SHAREABLE_description_IDS.QUOTE_3} />{" "}
              We provide evidence-based, actionable recommendations for funders and ecosystem leaders to better support decentralized development. These include: team-based funding models, extended renewal cycles, administrative support infrastructure, mental health resources, and structured transition pathways for experienced contributors.
            </p>
          </section>
          <p>The report unfolds in six parts:</p>
        </div>
        
      </div>
    </Wrapper>
  );
};

