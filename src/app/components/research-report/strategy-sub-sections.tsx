import React from "react";
import Link from "next/link";
import Image from "next/image";
import { QuoteCards } from "./_components/quotes";

export const StrategySubSections = () => {
  return (
    <div className='flex flex-col gap-24'>
      {/* junior core dev section */}
      <div className='flex flex-col gap-16'>
        <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>Junior core dev: lost in the protocol </h1>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
          <Image src='/svgs/junior-core-dev.svg' alt='junior core dev' width={516} height={580} />

          <div className='flex flex-col gap-8'>
            <StrategySubSection
              title='Key motivators vs lived reality: '
              description='Newer contributors working on core infrastructure are particularly attracted by the endless opportunities the ecosystem offers for personal and professional growth but struggle with self-management, isolation and pressure to deliver in a low feedback environment.'
            />
            <StrategySubSection
              title='Entry pathways: '
              description='Most contributors joined the ecosystem through fellowships or university connections. Some of them had less than 1 year of OS experience prior to their grant-funded positions.'
            />
            <StrategySubSection
              title='Routine: '
              description='Newer core developers (with less than 3 years grant-funded experience) tend to have more structured routines that help them deal with the uncertainty of everyday work. These include: focus tracking, productivity strategies, and tool minimization — as one participant put it: “we minimize the tools as much as possible and maximize the effectiveness of a single tool.”'
            />
          </div>
        </section>

        <QuoteCards
          quotes={[
            {
              id: "3",
              text: "I've been doing the AIR sessions. … I do that every week, so that next week I know exactly what I'm supposed to do, because there's no one telling me what to do.",
              author: {
                type: "new",
                respondentNumber: 3,
              },
            },
            {
              id: "14",
              text: "I’m quite wary about open communication and coming out as coming across as unprepared or not as informed or knowledgeable about something. So that really impacted how much I wouldn't ask questions because I felt I should know it, and I think that affected how much I could communicate in the community channel.",
              author: {
                type: "new",
                respondentNumber: 14,
              },
            },
            {
              id: "10",
              text: " knew one person at the beginning. It's probably one of the biggest reasons why I lasted. You know, I survived last year.",
              author: {
                type: "new",
                respondentNumber: 10,
              },
            },
          ]}
        />
      </div>

      {/* senior core dev section */}
      <div className='flex flex-col gap-16'>
        <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>Senior core dev: looking beyond the protocol</h1>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
          <Image src='/svgs/senior-core-dev.svg' alt='senior core dev' width={516} height={580} />

          <div className='flex flex-col gap-8'>
            <StrategySubSection
              title='Key motivators vs lived reality: '
              description={
                <p>
                  Interestingly, in our sample there were no senior core contributors. Of the experienced developers we interviewed working on core
                  infrastructure (3-6 years in OSS), only one was actively working in a grant-funded role. The others had moved on to found their own
                  projects or were hired by companies in the ecosystem. One contributor reported leaving their role due to burnout. This aligns with
                  the broader ecosystem pattern: at present, there are only 5 active Bitcoin Core maintainers and 41 active Core Developers total{" "}
                  <span>
                    <Link href='https://s3.amazonaws.com/1a1z.com/files/1A1z%20-%20Funding%20Bitcoin%20-%20Part%201.pdf' target='_blank'>
                      (1A1z 2024)
                    </Link>
                  </span>{" "}
                  — an extremely small and concentrated space despite the broader ecosystem’s growth.
                </p>
              }
            />
            <StrategySubSectionWithList
              title='Departure patterns: '
              description={[
                "Contributors navigate years of protocol work without clear impact metrics, until the motivation that sustained them fades, leading to what one contributor described as a “fog of motivation.”",
                "Expertise in core development paradoxically leads away from core development: the skills gained — protocol knowledge, ecosystem understanding —  makes contributors too valuable (or too burned out) to remain in grant-funded roles.",
                "This suggests that grant-funded core development may be inherently transitional, a launching pad rather than a destination for experienced developers.",
              ]}
            />
            <StrategySubSectionWithList
              title='Key Challenges : '
              description={[
                "Predictability of motivation in unpredictable environment [Institutional]",
                "The amorphous scope of OSS contribution [Human]",
                "Realizing your vision vs working for the grant [Institutional]",
                "No clear career pathways beyond cycling through grants [Structural]",
              ]}
            />
          </div>
        </section>

        <QuoteCards
          quotes={[
            {
              id: "2",
              text: `At some point, I stopped being able to believe that I could just build a better technology and trust that it would be used well, and [became] more focused on how that technology is entering the world. > >`,
              author: {
                type: "mid",
                respondentNumber: 2,
              },
            },
            {
              id: "4",
              text: "[Motivation] was all the things. It was research, then it was ideology, then it was making money, then it was back to ideology. … It was always hard to reflect on this, so it was always kind of foggy. … I was working for many years, and I wish I spent more time thinking about meta questions about why I work than actually working. So if somebody had asked me more often, I would have a good answer by now, and maybe I would have quit earlier, or maybe I would just have enjoyed it better. … I wish I did more thinking about this exact question at the time.",
              author: {
                type: "mid",
                respondentNumber: 4,
              },
            },
          ]}
        />
      </div>

      {/* junior app dev section */}
      <div className='flex flex-col gap-16'>
        <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>Senior core dev: looking beyond the protocol</h1>

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
              description='Contributors working on applications generally come from “fiat careers” in tech startups, as one contributor described it, or from a hacker background. They enter the space by volunteering to projects with small tasks and eventually get funded through grants, in some cases to work on their own projects.'
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
              text: `This is probably the most common thing you're gonna hear the whole time. I'm my own best asset and worst enemy in the sense that I'm highly motivated, I want to work on the thing, I like to think I'm fairly intelligent and can do good work, but I am limited strongly by the number of hours I can work. I’m learning on the job and trying to figure stuff out. And often it takes me longer than I feel like it should. I just have all the general failings of a human and so, I have to just keep reminding myself on a regular basis. — Respondent #5 New contributor`,
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

      {/* senior app dev section */}
      <div className='flex flex-col gap-16'>
        <h1 className='text-[30px] md:text-[28px] leading-[120%] font-inknutAntiqua text-center'>
          Senior app dev: “using chaos to keep things interesting”
        </h1>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
          <Image src='/svgs/senior-app-dev.svg' alt='senior app dev' width={516} height={580} />

          <div className='flex flex-col gap-8'>
            <StrategySubSection
              title='Key motivators vs lived reality: '
              description={`The humanitarian mission of the ecosystem drives daily engagement, but adds to the sense of urgency and feeling responsible for both users and volunteer contributors. Contributors “can't go back to a normal job,” yet they live in a state of constant burnout as they juggle technical development, community management, grant writing, and contributor retention.`}
            />

            <StrategySubSectionWithList
              title='Routine : '
              description={[
                `More experienced developers have learnt to navigate the chaos of OSS work, not through any particular strategy but by leaning into it — with one interviewee explicitly “using chaos to keep things interesting.”`,
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
