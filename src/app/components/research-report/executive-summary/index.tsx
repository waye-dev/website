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
              This report presents findings from a qualitative study examining sustainable open source development in the freedom tech ecosystem
              — an emerging field of decentralized, censorship-resistant technologies built to resist institutional capture. Between March and
              May 2025, we interviewed 26 Bitcoin and Nostr contributors with at least 12 months of full-time grant-funded experience. We
              explored their motivations, work patterns, and challenges to understand how they navigate open source development as independent
              contributors. While grant funding enables work free from corporate capture, our research reveals critical gaps in support
              structures for this decentralized workforce.
            </p>

            <p>
              <strong>
                Our core finding: the very values and features that attract developers to the Bitcoin and Nostr ecosystems — freedom as an
                ideal, permissionless participation, autonomy over projects — become the source of their greatest challenges.
              </strong> <SimpleShareButton shareId={SHAREABLE_description_IDS.CORE_FINDING} />{" "}
              We call this the "tyranny of permissionlessness": while these principles enable open innovation and resist capture, without
              support structures they lead developers to navigate unlimited responsibility alone. <SimpleShareButton shareId={SHAREABLE_description_IDS.TYRANNY_DEFINITION} /> <strong>This isn't inevitable: with intentional design, we can maintain permissionless participation while building sustainable work
              practices.</strong> <SimpleShareButton shareId={SHAREABLE_description_IDS.INTENTIONAL_DESIGN} />
            </p>
          </section>
          <p>The report unfolds in six parts:</p>
          
        </div>
        
      </div>
    </Wrapper>
  );
};

