import React from "react";
import Wrapper from "@/app/components/wrapper";
import { CardHeading, CTACard } from "@/app/components/os-reboot/cards";
import Link from "next/link";

const page = () => {
  const buttonLinks = [
    {
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf5RKqNV0I_zEekk1vxAToizH2OU1JR8AShfxQeqJVGRiTuCQ/viewform",
      text: "Participate",
    },
    {
      link: "/subscribe",
      text: "Stay Updated",
    },
  ];

  return (
    <div className='bg-gray-custom-100 text-black pt-10 md:pt-[108px] xl:pt-[148px] pb-20 md:pb-[200px] h-full'>
      <Wrapper>
        <div className='max-w-[1030px] mx-auto rounded-[20px] w-full h-full border border-black flex flex-col  items-start gap-[30px] sm:gap-0 p-4 py-6 sm:p-10 bg-blue-custom-700'>
          <section className='w-full'>
            <section className='flex flex-col gap-2 md:gap-1'>
              <p className='text-[40px] md:text-[54px] leading-[120%] md:leading-[75.6px]'>Permissionless Paths</p>
              <CardHeading title='Burnout, Isolation, and the Chaos of Independence' />
            </section>
            <section className='flex text-lg leading-[28.8px] flex-col gap-[27px] pt-3 sm:pt-0'>
              <p>
                Open-source development is often seen as the future of work—independent, decentralized, driven by purpose. But let’s be real:
                <span className='font-semibold'> it’s the Wild West.</span>
              </p>
              <p>
                You’re not just writing code. You’re managing your own time, budget, and long-term sustainability. You’re chasing grants, navigating
                community politics, and staying on top of ever-changing projects—all while trying to maintain deep focus and produce meaningful work.
                There’s no roadmap, no structure, no safety net.
                <span className='font-semibold'> It’s liberating, but it’s also exhausting.</span>
              </p>
              <p>
                Burnout, isolation, and the challenges of independent open-source work are real and growing problems— widely felt but rarely discussed
                in a structured, actionable way. There’s no shared language, no clear solutions, and no roadmap for improvement. Everyone feels the
                weight, yet it remains nebulous—an open secret with no clear way forward.
                <span className='font-semibold'> This pilot study is here to change that and we need your help.</span>
              </p>
            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-10'>
            <CardHeading title='The Study: Making Sense of Chaos' />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[27px] pt-3 sm:pt-0'>
              <p>
                We’re launching a first-of-its-kind <span className='font-semibold'> ethnographic research study</span> to{" "}
                <span className='font-semibold'>finally bring clarity</span> to the reality of full- time, grant-funded open-source development. Right
                now, it’s a system built on uncertainty—developers navigate financial instability, burnout, and the pressure to produce without the
                support structures found in traditional careers.{" "}
                <span className='font-semibold'>
                  No HR, no manager, no clear path forward—just you, your code, and the constant challenge of staying afloat.
                </span>
              </p>
              <p>
                For too long, we’ve talked about these struggles in vague terms. Everyone knows the issues exist, but no one has mapped them out in a
                way that leads to real solutions. We’re here to change that.
              </p>
              <p>
                Our goal is to <span className='font-semibold'>interview 30+ open-source developers</span> working in Bitcoin, Nostr, and related
                freedom tech, we’re unpacking the <span className='font-semibold'>real, lived experiences</span> of what it takes to build without an
                institution backing you. This study isn’t about surface-level observations—it’s about{" "}
                <span className='font-semibold'>listening, documenting, and defining the problem space finally start addressing it.</span>{" "}
                <span className='underline'>
                  <Link
                    href='https://docs.google.com/forms/d/e/1FAIpQLSf5RKqNV0I_zEekk1vxAToizH2OU1JR8AShfxQeqJVGRiTuCQ/viewform?pli=1'
                    target='_blank'
                  >
                    Schedule an interview to participate.
                  </Link>
                </span>
              </p>
            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-10'>
            <CardHeading title='What we’re uncovering:' />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[27px] pt-3 sm:pt-0'>
              <p>
                We’re digging into the realities of being a full-time, grant-funded open-source developer. That means answering some tough questions:
              </p>

              <section className='text-lg leading-[28.8px]'>
                <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                  <li>
                    <span className='font-semibold'>What does burnout actually look like in open source?</span> There’s no HR, no performance reviews,
                    no off- the-shelf solutions—so how do developers even talk about it? How do they identify it?
                  </li>
                  <li>
                    <span className='font-semibold'>How do solo open-source developers manage their time, energy, and focus?</span> When you’re
                    juggling deep work, community expectations, and financial uncertainty, how do you stay productive?
                  </li>
                  <li>
                    <span className='font-semibold'>What tools and systems help—or fail—when it comes to sustaining long-term contributions?</span>{" "}
                    What’s missing, and what should change?
                  </li>
                </ul>
              </section>

              <p>
                We’re not here to theorize. <span className='font-semibold'>We’re here to bring clarity to a space that has none.</span>
              </p>
            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-10'>
            <CardHeading title={`How we're doing it:`} />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[27px] pt-3 sm:pt-0'>
              <p>
                This research takes an <span className='font-semibold'>ethnographic approach</span>—meaning we’re going straight to the source. Our
                methodology is built on direct engagement with open-source developers, focusing on:
              </p>

              <section className='text-lg leading-[28.8px]'>
                <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                  <li>
                    <span className='font-semibold'>One-on-one interviews</span> with grant-funded developers who’ve been navigating this space
                    firsthand.
                  </li>
                  <li>
                    <span className='font-semibold'>Observational research</span> into how developers manage their time, attention, and mental load.
                  </li>
                  <li className='font-semibold'>
                    <span>Pattern analysis</span> to connect shared struggles and solutions across contributors.
                  </li>
                  <li>
                    <span className='font-semibold'>No institutional bias </span> —this study is independent, unaffiliated, and built around what
                    developers actually experience, not what outsiders assume.
                  </li>
                </ul>
              </section>

              <p>
                We’ll be publishing a final report with{" "}
                <span className='font-semibold'>concrete insights, clear patterns, and a language for talking about these issues</span> in a way that
                moves the conversation forward.
              </p>
            </section>
          </section>

          <section className='w-full pt-[1.875rem] md:pt-10	'>
            <CardHeading title='Who can participate?' />
            <section className='flex text-lg leading-[28.8px] flex-col gap-[15px] pt-3 sm:pt-0'>
              <p>
                We’re looking for{" "}
                <span className='font-semibold'>developers who have worked under a grant or contributed to open source for at least a year</span>{" "}
                without being tied to an organization.
              </p>

              <p>Ways to get involved:</p>

              <section className='text-lg leading-[28.8px]'>
                <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
                  <li>
                    <span className='font-semibold'>Join an interview.</span> Share your experience—what’s worked, what hasn’t, and what needs to
                    change.
                  </li>
                  <li>
                    <span className='font-semibold'>Stay in the loop.</span> Not ready to participate? No problem. Sign up for our mailing list.
                  </li>
                </ul>
              </section>

              <p>
                We’ll be publishing a final report with{" "}
                <span className='font-semibold'>concrete insights, clear patterns, and a language for talking about these issues</span> in a way that
                moves the conversation forward. This study adheres to standard ethical guidelines, including informed consent, voluntary
                participation, confidentiality, and the right to withdraw at any time.
              </p>
            </section>
          </section>

          <section className='pt-[30px] sm:pt-10 w-full'>
            <CTACard
              title='Ready to help define the future of open-source work?'
              description='Sign up to participate or receive updates:'
              buttonLinks={buttonLinks}
              buttonProps={{
                className:
                  "rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[15px] px-[72px] underline text-black text-nowrap border-2 border-black flex items-center justify-center md:w-fit",
              }}
            />
          </section>

          <section className='flex flex-col gap-[9px] pt-[40px] pb-[30px] sm:pb-[90px]'>
            <p className='text-xl leading-[160%] font-medium'>Questions?</p>
            <div className='text-lg leading-[160%]'>
              <p>Reach out to us.</p>
              <Link href='mailto:waye.dev@gmail.com' className='flex items-center gap-2'>
                <span className='underline-offset-8 underline'>waye.dev@gmail.com</span>
                <span className='text-blue-custom-100'>→</span>
              </Link>
            </div>
          </section>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
