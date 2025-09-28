import React from "react";
import Image from "next/image";
import { QuoteCards } from "../_components/quotes";

export const JuniorAppDev = () => {
  return (
    <div className='flex flex-col gap-16'>
      <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>Junior app dev: building user-facing applications</h1>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
        <Image src='/svgs/junior-app-dev.svg' alt='junior app dev' width={516} height={580} />

        <div className='flex flex-col gap-8'>
          <StrategySubSection
            title='Key motivators vs lived reality: '
            description={
              <p>
                Similarly to junior core developers, contributors working on user-facing applications are attracted by the opportunities to work in
                an expanding value-aligned ecosystem, but also struggle with autonomous decision making and self-management, as well as the added
                tasks of working on a product (communication, recruiting and retaining volunteer contributors, scaling the project). The ideological
                commitment and community focus drives daily motivation, while adding pressure to deliver.
              </p>
            }
          />

          <StrategySubSection
            title='Entry pathways: '
            description='Contributors working on applications generally come from "fiat careers" in tech startups, as one contributor described it, or from a hacker background. They enter the space by volunteering to projects with small tasks and eventually get funded through grants, in some cases to work on their own projects.'
          />
          <StrategySubSection
            title='Routine : '
            description={`The immediate user feedback and tangible results of application development provide clearer direction and enable faster iteration cycles, creating a more structured feedback loop than protocol work. However, this user-facing focus comes with additional responsibilities: community management, user support, and contributor outreach expand developers' daily workload beyond pure technical tasks.`}
          />

          <StrategySubSectionWithList
            title='Key Challenges : '
            description={[
              "Permissionlessness attracts, then overwhelms [Ideological]",
              "Individual grants vs team requirements [Institutional]",
              "Excited to collaborate, but working in isolation [Structural]",
              "The amorphous scope of OSS contribution [Human]",
            ]}
          />
        </div>
      </section>

      <QuoteCards
        quotes={[
          {
            id: "5",
            text: `This is probably the most common thing you're gonna hear the whole time. I'm my own best asset and worst enemy in the sense that I'm highly motivated, I want to work on the thing, I like to think I'm fairly intelligent and can do good work, but I am limited strongly by the number of hours I can work. I'm learning on the job and trying to figure stuff out. And often it takes me longer than I feel like it should. I just have all the general failings of a human and so, I have to just keep reminding myself on a regular basis. — Respondent #5 New contributor`,
            author: {
              type: "new",
              respondentNumber: 5,
            },
          },
          {
            id: "7",
            text: "Where I worked before, most times, at any slight inconvenience or slight roadblock, we usually jump on a call and resolve it. It's not like that in open source.",
            author: {
              type: "new",
              respondentNumber: 7,
            },
          },
          {
            id: "1",
            text: "I'm worried that before a certain threshold of success or momentum, if I get jaded, I'm thinking about the risk of being at the tip of the spear stopping, and everything else stopping.",
            author: {
              type: "new",
              respondentNumber: 1,
            },
          },
        ]}
      />
    </div>
  );
};

const StrategySubSection = ({ title, description }: { title: string; description: string | React.ReactNode }) => {
  return (
    <section className='flex flex-col gap-4'>
      <h5 className='font-josefinSans font-bold text-xl uppercase'>{title}</h5>
      <section className='font-inter font-normal'>{description}</section>
    </section>
  );
};

const StrategySubSectionWithList = ({ title, description }: { title: string; description: string[] }) => {
  return (
    <section className='flex flex-col gap-4'>
      <h5 className='font-josefinSans font-bold text-xl uppercase'>{title}</h5>
      <ul className='font-inter font-normal list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
