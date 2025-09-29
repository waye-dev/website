import React from "react";
import Image from "next/image";
import { QuoteCards } from "../_components/quotes";

export const SeniorAppDev = () => {
  return (
    <div className='w-full max-w-[1000px] xl:max-w-[1250px] mx-auto px-8 py-24'>
      <div className='flex flex-col gap-16'>
      <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>
        Senior app dev: "using chaos to keep things interesting"
      </h1>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
        <Image src='/svgs/senior-app-dev.svg' alt='senior app dev' width={516} height={580} />

        <div className='flex flex-col gap-8'>
          <StrategySubSection
            title='Key motivators vs lived reality: '
            description={`The humanitarian mission of the ecosystem drives daily engagement, but adds to the sense of urgency and feeling responsible for both users and volunteer contributors. Contributors "can't go back to a normal job," yet they live in a state of constant burnout as they juggle technical development, community management, grant writing, and contributor retention.`}
          />

          <StrategySubSectionWithList
            title='Routine : '
            description={[
              `More experienced developers have learnt to navigate the chaos of OSS work, not through any particular strategy but by leaning into it — with one interviewee explicitly "using chaos to keep things interesting."`,
              "Often contributors simply keep a mental todo list of their next tasks and update it as things proceed. However, this mastery of chaos comes at a cost — the constant adaptation and lack of clear boundaries eventually leads to chronic burnout, which becomes normalized within the community.",
              "Unlike their protocol counterparts who work in isolation, they must coordinate multiple stakeholders and manage volunteer teams, adding further complexity to their already chaotic environment.",
              "User feedback provides an important validating factor and helps give direction to a project, while also adding further expectations for lead maintainers. Managing a team of volunteer contributors adds further psychological pressure, with maintainers feeling personally responsible for their contributors' experience.",
            ]}
          />

          <StrategySubSectionWithList
            title='Key Challenges : '
            description={[
              "Permissionlessness attracts, then overwhelms [Ideological]",
              "Experience enables, then exhausts [Ideological]",
              "The invisibility of maintenance and management work [Human]",
              "The amorphous scope of OSS contribution [Human]",
              "Individual grants vs team requirements [Institutional]",
              "Bitcoin is forever, grants for a year only [Institutional]",
              "Permissionlessness attracts, then overwhelms [Ideological]",
            ]}
          />
        </div>
      </section>

      <QuoteCards
        quotes={[
          {
            id: "5",
            text: `You know, how bitcoiners say "I'm in for the tech", I came in for much more leaning towards that and the curiosity that transpired and … now I will say that I have a far broader view and a much more humanitarian goal in sight than just a technical one.`,
            author: {
              type: "new",
              respondentNumber: 5,
            },
          },
          {
            id: "20",
            text: "It's a lot different now than it was when we first started. It was kind of a toy prototype, and now it started to get a bit more serious, there's a lot more users, there's a lot more stakeholders, and people are expecting it to actually succeed.",
            author: {
              type: "expert",
              respondentNumber: 20,
            },
          },
          {
            id: "25",
            text: "There is this funny thing. So if you build something, then there's an expectation for you to then maintain that thing. And for some brains, like my brain, I like building something and moving on to the next thing, but you can't really do that, because people then become dependent upon the thing working, so you end up having to maintain and then more and more of your time starts to be focused on maintaining projects. Some people just move on to the next thing. But I think a lot of us feel the responsibility to maintain those projects. So even if you're reluctantly doing it, often you find yourself maintaining a lot more than innovating and contributing and developing and building new stuff. — Respondent #25 Expert contributor",
            author: {
              type: "expert",
              respondentNumber: 25,
            },
          },
          {
            id: "20b",
            text: "It's this constant battle between balancing your own work and trying to review contributors and help contributors. So that's probably one of the biggest challenges, and I struggle with that too, because sometimes I look and this guy's been waiting for four weeks for me to review his PR. I just haven't gotten to it yet, but I know. And then he goes away, and I'm like, Oh, I lost a potential contributor.",
            author: {
              type: "expert",
              respondentNumber: 20,
            },
          },
          {
            id: "25b",
            text: "We've got a team of four developers who are pretty much full time … and then you feel responsible. I mean, they've got lives, they don't get paid much because they're working on a project which they really love. So they're making sacrifices already … And then all you can really do is being the person who's helping source those funds to keep them working on the project. You just feel a lot of responsibility, because they have kids, they have families, and they have responsibility.",
            author: {
              type: "expert",
              respondentNumber: 25,
            },
          },
          {
            id: "18",
            text: "I can easily find a job at a company. I mean, I don't have a problem or fear of not having a job. I have a problem, a fear of not working on Bitcoin. — Respondent #18 Expert contributor",
            author: {
              type: "expert",
              respondentNumber: 18,
            },
          },
        ]}
      />
      </div>
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
