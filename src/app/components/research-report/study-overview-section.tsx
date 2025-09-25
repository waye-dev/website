"use client";

import Image from "next/image";
import { useResponsiveCircles } from "@/hooks/use-responsive-circles";
import { useState } from "react";
import { useEffect } from "react";

export const StudyOverviewSection = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0); // Default fallback height

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resizedWidthForDesign = screenWidth * 0.64;

  return (
    <div className='flex flex-col gap-14'>
      <h1 className='text-[30px] md:text-[40px] lg:text-[50px] leading-[120%] md:leading-[75.6px] font-inknutAntiqua font-bold text-center'>
        Study Overview
      </h1>

      <p className='text-lg'>
        Open Source Software (OSS) is foundational to our global digital infrastructure. OSS promises new modes of work that transcend corporate
        constraints — collaborative development beyond institutional boundaries, creative freedom without hierarchical control. In reality, however,
        open source development is largely beholden to either unpaid volunteer work or corporate employment. This leaves critical infrastructure
        vulnerable to both burnout and institutional capture.
      </p>

      <div className='flex flex-col gap-24'>
        {/* the bitcoin solution section */}
        <div className='flex flex-col gap-8'>
          <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>The Bitcoin Solution</h5>

          <section className='flex md:flex-row flex-col gap-8'>
            <Image src='/svgs/bitcoin-solution-image.svg' alt='bitcoin solution image' width={353} height={246} />

            <article className='flex flex-col gap-4 text-lg justify-between'>
              <p>
                Bitcoin introduced a new possibility for open source: by creating a new form of digital money, it also created new capacity to fund
                its development.
              </p>
              <p>
                The <strong>Bitcoin</strong> ecosystem, including <strong>Nostr</strong> as its primary decentralized communication layer, now
                supports hundreds of developers through an expanding grant landscape, enabling them to work full-time on OSS projects without
                institutional affiliation.
              </p>
              <p>For the first time, the original OSS vision — sustainable, independent development — seems within reach</p>
            </article>
          </section>

          <section className='flex flex-col gap-4 text-lg'>
            <p>
              Yet this arrangement is still treated as a rarity, rather than the radical reimagining of work that it could be. Without institutional
              support, grant-funded OSS developers are expected to navigate engineering issues, project management, and community building on their
              own. We know little about how these developers work, nor how to support them.
            </p>
            <p>
              If OSS is to deliver on its promise to decentralize the workforce, then we need to treat these developers' experiences as a primary way
              of working, rather than as the exception.
            </p>
          </section>
        </div>

        {/* our research section */}
        <div className='flex flex-col gap-12'>
          <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>Our Research </h5>

          <section className='flex md:flex-row flex-col gap-8'>
            <Image src='/svgs/our-research-image.svg' alt='our research image' width={256} height={246} />

            <article className='flex flex-col gap-4 text-lg max-w-[731px]'>
              <p>This pilot study addresses a foundational question:</p>
              <p className='font-inknutAntiqua text-xl'>
                How do full-time, grant-funded, institutionally unaffiliated developers in the Bitcoin and Bitcoin-adjacent (i.e. Nostr) ecosystem
                work – and what do they need to sustainably perform their role?
              </p>
            </article>
          </section>

          <section className='flex flex-col gap-4 text-lg'>
            <p>
              Between March and May 2025, we interviewed 26 Bitcoin and Nostr contributors who had worked full-time on grant-funded projects for at
              least 12 months. Through semi-structured interviews, we explored:
            </p>
          </section>

          <section className='flex flex-row gap-4 justify-between'>
            {researchOverviewNumbers.map((number) => (
              <div key={number.description} className='flex flex-col gap-2 items-center'>
                <p className='font-inknutAntiqua text-2xl md:text-4xl lg:text-4xl font-bold'>{number.number}</p>
                <p className='font-inknutAntiqua text-xl md:text-3xl'>{number.description}</p>
              </div>
            ))}
          </section>

          <section className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
            {researchOverviewNumbersIcons.map((icon) => (
              <div key={icon.description} className='flex flex-row items-start gap-4'>
                <Image src={icon.icon} alt={icon.alt} width={128} height={142} />

                <section className='flex flex-col gap-2'>
                  <p className='text-lg font-bold'>{icon.title}</p>
                  <p className='text-base italic'>{icon.description}</p>
                </section>
              </div>
            ))}
          </section>
        </div>

        {/* key findings and impact */}
        <div className='flex flex-col gap-12'>
          <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>Key Findings & Impact </h5>

          <section className='flex md:flex-row flex-col gap-8'>
            <Image src='/svgs/key-findings-image.svg' alt='key findings image' width={375} height={308} />

            <article className='flex flex-col gap-4 text-lg max-w-[731px]'>
              <p>Our analysis revealed a central paradox:</p>
              <p className='font-inknutAntiqua text-xl'>
                The very values and processes that attract developers to the Bitcoin and Nostr ecosystems become the source of their most persistent
                challenges.
              </p>
            </article>
          </section>

          <section className='flex flex-col gap-4 text-lg'>
            <p>
              Without structural support, permissionlessness — the core principle of Bitcoin — can create isolation, burnout, and unsustainable work
              patterns when applied to human systems.
            </p>
            <p>
              We focused on Bitcoin and Nostr as critical infrastructure within the freedom tech ecosystem — a growing field in OSS building
              censorship-resistant, decentralized infrastructure for financial sovereignty and free speech. The ecosystem's emphasis on decentralized
              development and grant funding ensures that this critical software remains free from gatekeeping and institutional lock-in. Without
              adequate support structures, however, this total autonomy leads developers to navigate increasingly unsustainable working conditions.
              Without addressing these systemic challenges, we risk losing the people building tools for human freedom.
            </p>
            <p>
              While our findings emerge from the freedom tech ecosystem — where the stakes of maintaining decentralization and censorship resistance
              are particularly high — they apply to any open source ecosystem seeking to support full-time, independent contributors and decentralized
              development. This study lays the groundwork for a shared understanding of how these developers work and what they need — providing
              insights that can inform the development of tools, funding programs, and support structures.
            </p>
          </section>
        </div>

        {/*Methodology section */}
        <div className='py-24 flex flex-col gap-12'>
          <h1 className='text-[30px] md:text-3xl leading-[120%] font-inknutAntiqua text-center'>Methodology</h1>

          <div className='bg-blue-custom-1000 rounded-3xl border border-black p-10 flex flex-col gap-4'>
            <section className='flex flex-col gap-2'>
              <p className='font-bold'>Study Design</p>

              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>Comprehensive literature review of OSS sustainability, developer experience, and burnout research</li>
                <li>Qualitative approach using semi-structured interviews</li>
                <li>
                  Two-step inductive coding analysis — identifying themes iteratively from the interviews rather than applying preset frameworks
                </li>
                <li>Focus on capturing social, ideological, and contextual factors</li>
              </ul>
            </section>

            <section className='flex flex-col gap-2'>
              <p className='font-bold'>Participant Selection</p>

              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>26 open source developers</li>
                <li>Minimum 12 months grant-funded full-time experience (current or previous)</li>
                <li>Recruited through direct outreach and open call through Waye’s channels</li>
                <li>Strategic sampling for diversity (geography, experience, project type)</li>
              </ul>
            </section>

            <section className='flex flex-col gap-2'>
              <p className='font-bold'>Data Collection</p>

              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>Conducted between March-May 2025</li>
                <li>45-60 minute remote interviews</li>
                <li>Open-ended format encouraging reflection</li>
                <li>All participants discussed their grant-funded experience regardless of current employment status</li>
                <li>
                  Numerical references in findings (e.g. “7/26 participants”) illustrate the prevalence of themes identified through coding. These are
                  not the result of structured survey questions, but reflect patterns that emerged organically in conversations.
                </li>
              </ul>
            </section>

            <section className='flex flex-col gap-2'>
              <p className='font-bold'>Scope and Limitations</p>

              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                <li>Focused on Bitcoin and Nostr as interconnected freedom technologies</li>
                <li>Sample size appropriate for qualitative depth, not statistical generalization</li>
                <li>
                  Yet the consistency of experiences across diverse participants suggests broader relevance for decentralized development ecosystems
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/*  Demographics Section */}
        <div className='flex flex-col gap-20'>
          <h5 className='text-xl md:text-2xl lg:text-3xl leading-[120%] font-inknutAntiqua font-bold text-center'>Demographics at a glance</h5>

          <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center h-full'>
            <section className='flex flex-col gap-12 text-xl justify-between h-full lg:max-w-[415px]'>
              <p>We interviewed participants from 10+ countries, spanning 5 continents.</p>
              <p>However, over half of our interviewees came from North America and Europe.</p>
              <p>Two participants chose not to disclose their location.</p>
            </section>

            <div className='w-full flex flex-col gap-10 items-center'>
              <Image src='/svgs/demographics.svg' alt='demographics image' width={700} height={560} />
              <section className='flex flex-row gap-6 justify-between flex-wrap'>
                {demographics.map((demographic) => (
                  <div key={demographic.country} className='flex flex-row gap-2 items-center'>
                    <div className='w-4 h-4 rounded-full' style={{ backgroundColor: demographic.color }} />
                    <p className='font-inknutAntiqua text-xs'>{demographic.country}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>

        {/* experience levels */}
        <div className='flex flex-col gap-20 py-24'>
          <h5 className='text-xl md:text-2xl lg:text-3xl leading-[120%] font-inknutAntiqua text-center'>Experience levels </h5>

          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {experienceLevels.map((level) => (
              <div key={level.title} className='flex flex-col gap-4 items-center'>
                <div className='max-w-[406px] max-h-[316px] w-full h-full flex items-center justify-center'>
                  <Image src={level.image} alt={level.title} width={level.width} height={level.height} />
                </div>

                <section>
                  <p className='text-lg font-bold'>{level.title}</p>
                  <p className='text-base italic'>{level.description}</p>
                </section>
              </div>
            ))}
          </section>
        </div>

        {/* Grant-funded tenure  section */}
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-14'>
            <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-bold font-inknutAntiqua text-center'>Grant-funded tenure </h5>

            <section className='flex flex-col gap-8 text-xl font-inter font-normal'>
              <p>
                <span className='font-inknutAntiqua text-3xl'>73%</span> of the contributors are currently grant-funded, while{" "}
                <span className='font-inknutAntiqua text-3xl'>27%</span> have transitioned to employment or independent projects in the ecosystem.
              </p>
              <p>
                Among all participants, <span className='font-inknutAntiqua text-3xl'>69%</span> have been in grant-funded roles for 2 years or less,
                while a quarter have sustained funding for 2-5 years and only one participant has been grant-funded for over 5 years.
              </p>
              <p>
                Funding was primarily provided by OpenSats, the Human Rights Foundation (HRF), and Btrust, although additional sources were mentioned.
              </p>
            </section>
          </div>

          {/* ecosystem distribution section */}
          <div className='flex flex-col gap-14'>
            <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-bold font-inknutAntiqua text-center'>Ecosystem distribution </h5>

            <section className='flex flex-col gap-10 text-xl font-inter font-normal items-center'>
              <div className='flex flex-col gap-10 items-center'>
                <ResponsiveCircleRow availableWidth={resizedWidthForDesign} />

                <section className='flex flex-row gap-20 justify-between w-full max-w-[600px]'>
                  {ecosystemDistribution.map((distribution) => (
                    <div key={distribution.title} className='flex flex-col gap-2 items-center'>
                      <p className='text-center font-inknutAntiqua text-3xl'>{distribution.value}</p>
                      <p className='text-center'>{distribution.title}</p>
                    </div>
                  ))}
                </section>
              </div>

              <p className='text-center'>Nostr developers cluster primarily in applications.</p>
            </section>
          </div>

          {/* Project focus  section */}
          <div className='flex flex-col gap-14'>
            <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-bold font-inknutAntiqua text-center'>Project focus </h5>

            <section className='flex flex-col gap-10 text-xl font-inter font-normal items-center'>
              <section className='flex flex-row gap-20 justify-between w-full max-w-[600px]'>
                {projectFocus.map((distribution) => (
                  <div key={distribution.title} className='flex flex-col gap-2 items-center'>
                    <p className='text-center font-inknutAntiqua text-3xl'>{distribution.value}</p>
                    <p className='text-center'>{distribution.title}</p>
                  </div>
                ))}
              </section>

              <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[12px]'>
                <li>Core protocol development dominates in the Bitcoin ecosystem.</li>
                <li>
                  Application work (payments, messaging, hardware) is evenly distributed between the Bitcoin and Nostr ecosystems. This mirrors the
                  ecosystem's maturation: infrastructure exists, user-facing tools are now needed.
                </li>
                <li>
                  Infrastructure work (19.2%), comprising developer toolkits and libraries, appears to be the domain of either newcomers or veterans,
                  with no middle ground.
                </li>
                <li>Within our sample, no expert contributors (6+ years OSS experience) worked on core protocol development.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export const projectFocus = [
  {
    value: "38.5%",
    title: "on applications",
  },
  {
    value: "30.8%",
    title: "on core protocol",
  },
];

export const ecosystemDistribution = [
  {
    value: "76.9%",
    title: "work on Bitcoin",
  },
  {
    value: "23.1%",
    title: "work on Nostr",
  },
];

const experienceLevels = [
  {
    title: "New contributors (<3 years) ",
    image: "/svgs/junior-developer.svg",
    description: "dominate at 42.3%, indicating healthy ecosystem growth.",
    width: 260,
    height: 250,
  },
  {
    title: "Mid-level contributors (3-5 years)",
    image: "/svgs/mid-level-developer.svg",
    description: "make up 34.6% of the sample, showing a steady influx of developers.",
    width: 260,
    height: 250,
  },
  {
    title: "Senior contributors (5+ years)",
    image: "/svgs/senior-developer.svg",
    description: "account for 23.1% of the sample, indicating a growing number of experienced developers.",
    width: 260,
    height: 250,
  },
];

const demographics = [
  {
    country: "Noth America",
    color: "#C4DEF8",
  },
  {
    country: "South America",
    color: "#D6F8C4",
  },
  {
    country: "Europe",
    color: "#031C51",
  },
  {
    country: "Africa",
    color: "#F9D483",
  },
  {
    country: "Asia",
    color: "#FF9999",
  },
  {
    country: "Not Applicable",
    color: "#D9D9D9",
  },
];

const researchOverviewNumbers = [
  {
    number: 26,
    description: "Contributors",
  },
  {
    number: "12+",
    description: "Months",
  },
  {
    number: "4",
    description: "Focus areas",
  },
];

export const researchOverviewNumbersIcons = [
  {
    icon: "/svgs/medal.svg",
    alt: "Medal",
    title: "Motivations",
    description:
      "What drives developers to OSS, and how do these motivations evolve? How do motivations and incentives differ in a grant-funded versus full-time employment context?",
  },
  {
    icon: "/svgs/clock.svg",
    alt: "Clock",
    title: "Day-to-day work",
    description:
      "How do open source developers structure and experience their daily work life? What does their typical day and environment look like?",
  },
  {
    icon: "/svgs/leaves.svg",
    alt: "Leaves",
    title: "Sustainability",
    description:
      "What does sustainability mean to open source developers, and what financial and non-financial factors support or threaten it? What enables long-term contribution versus burnout and departure?",
  },
  {
    icon: "/svgs/chains.svg",
    alt: "Chains",
    title: "Constraints",
    description:
      "What structural challenges prevent sustainable development? Are there practical barriers that can be addressed by projects or their funders? ",
  },
];

// Responsive Circle Row Component
interface ResponsiveCircleRowProps {
  availableWidth: number;
  darkPercentage?: number;
}

const ResponsiveCircleRow = ({ availableWidth, darkPercentage = 0.76 }: ResponsiveCircleRowProps) => {
  const circleConfig = useResponsiveCircles({
    availableWidth,
    darkPercentage,
  });

  const { circleCount, circleSize, gap, darkCircleCount } = circleConfig;

  // Generate circles array with proper distribution
  const circles = Array.from({ length: circleCount }, (_, i) => ({
    id: i,
    isDark: i < darkCircleCount,
  }));

  return (
    <section className='flex flex-row justify-center flex-nowrap' style={{ width: availableWidth }}>
      {circles.map((circle, index) => (
        <div
          key={circle.id}
          className={`rounded-full ${circle.isDark ? "bg-blue-custom-900" : "bg-gray-custom-800"}`}
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            marginRight: index < circleCount - 1 ? `${gap}px` : "0",
          }}
        />
      ))}
    </section>
  );
};
