import Image from "next/image";
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

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

export const OurResearch = () => {
  return (
    <div className='flex flex-col gap-12'>
      <h5 className='text-xl md:text-2xl lg:text-2xl leading-[120%] font-inknutAntiqua font-bold'>Our Research </h5>

      <section className='flex flex-col gap-12 pl-16'>
        <section className='flex md:flex-row flex-col md:gap-24 gap-8'>
          <Image src='/svgs/our-research-image.svg' alt='our research image' width={256} height={246} />

          <article className='flex flex-col gap-4 text-lg max-w-[731px]'>
            <p>This pilot study addresses a foundational question:</p>
            <p className='font-inknutAntiqua text-xl'>
              How do full-time, grant-funded, institutionally unaffiliated developers in the Bitcoin and Bitcoin-adjacent (i.e. Nostr) ecosystem
              work – and what do they need to sustainably perform their role?
            </p>
          </article>
        </section>

        <section className='flex flex-row gap-4 justify-between'>
          {researchOverviewNumbers.map((number) => (
            <div key={number.description} className='flex flex-col gap-2 items-center'>
              <p className='font-inknutAntiqua text-2xl md:text-4xl lg:text-4xl font-bold'>{number.number}</p>
              <p className='font-inknutAntiqua text-xl md:text-3xl'>{number.description}</p>
            </div>
          ))}
        </section>
      </section>

      <p>
        Between March and May 2025, we interviewed 26 Bitcoin and Nostr contributors who had worked full-time on grant-funded projects for at
        least 12 months. Through semi-structured interviews, we explored: <SimpleShareButton shareId={SHAREABLE_description_IDS.STUDY_STATS} />
      </p>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
        {researchOverviewNumbersIcons.map((icon) => (
          <div key={icon.description} className='flex flex-row items-start gap-4'>
            <Image src={icon.icon} alt={icon.alt} width={128} height={142} />

            <section className='flex flex-col gap-2'>
              <p className='text-lg font-bold'>{icon.title}</p>
              <p className='text-base'>{icon.description}</p>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};
