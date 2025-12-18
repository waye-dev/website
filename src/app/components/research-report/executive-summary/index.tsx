"use client";

import Wrapper from "@/app/components/wrapper";
import Eyeballs from "@/app/components/research-report/_components/eyeballs";

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

        {/* <div className='flex justify-center'>
          <button
            onClick={() => {
              console.log("Download read-only version initiated");
            }}
            className="gap-2 bg-black/5 text-black hover:text-white hover:bg-blue-custom-1100 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 px-6 py-3 flex items-center justify-center font-medium"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download read-only version
          </button>
        </div> */}

        <div className='flex flex-col gap-5'>
          <h3 className='text-xl sm:text-3xl font-inknutAntiqua font-semibold sm:text-center'>Executive Summary</h3>
          <section className='flex flex-col gap-3'>
            <p>
              <strong>
                This report is the first-ever deep-dive into the working lives of independent developers building censorship-resistant technology and what they need to sustain their work.
              </strong> Earlier this year, we interviewed 26 independent contributors within the Bitcoin and Nostr ecosystems, where grant funding is critical to ensure freedom from institutional capture. Rather than examining specific projects or funding mechanisms, we focused on the builders themselves: their motivations, work patterns, and the challenges they face navigating open source development.
            </p>

            <p>
              <strong>
                Our core finding: the very values and features that attract developers to Bitcoin and Nostr, including freedom, autonomy and permissionless participation, become the source of their greatest challenges.
              </strong>{" "}
              We call this the "tyranny of permissionlessness." While these principles enable open innovation and resist capture, without
              support structures they lead developers to navigate unlimited responsibility alone, leading to burnout and departure.
            </p>

            <p>
              <strong>
                This isn't inevitable. With intentional design, we can maintain permissionless participation while building sustainable work practices.
              </strong>{" "}
              We provide evidence-based, actionable recommendations for funders and ecosystem leaders to better support decentralized development. These include: team-based funding models, extended renewal cycles, administrative support infrastructure, mental health resources, and structured transition pathways for experienced contributors.
            </p>
          </section>
          <p>The report unfolds in six parts:</p>
        </div>
        
      </div>
    </Wrapper>
  );
};

